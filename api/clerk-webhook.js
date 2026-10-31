import { Webhook } from 'svix';

const RESEND_API_URL = 'https://api.resend.com/emails';

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  const isNode = Boolean(res && typeof res.status === 'function');

  function jsonResponse(body, status = 200) {
    if (isNode) {
      res.setHeader('content-type', 'application/json; charset=utf-8');
      return res.status(status).json(body);
    }
    return new Response(JSON.stringify(body), {
      status,
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    });
  }

  const method = req.method || 'GET';
  if (method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed.' }, 405);
  }

  const signingSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || 'Lycemit Website <onboarding@resend.dev>';
  const signInUrl = process.env.LYCEMIT_SIGN_IN_URL || 'https://lycemit.com/';

  if (!signingSecret || !apiKey) {
    console.warn('Clerk webhook or Resend environment variables are missing on Vercel.');
    return jsonResponse({ error: 'Webhook email service is not configured.' }, 503);
  }

  let rawBody = '';
  if (isNode) {
    // If bodyParser is false in Node.js, read stream chunks
    if (typeof req.body === 'string') {
      rawBody = req.body;
    } else if (Buffer.isBuffer(req.body)) {
      rawBody = req.body.toString('utf8');
    } else if (typeof req.body === 'object' && req.body !== null) {
      rawBody = JSON.stringify(req.body);
    } else {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
      }
      rawBody = Buffer.concat(chunks).toString('utf8');
    }
  } else {
    rawBody = await req.text();
  }

  const getHeader = (key) => {
    if (isNode) {
      return req.headers[key.toLowerCase()] || '';
    }
    return req.headers.get(key) || '';
  };

  const headers = {
    'svix-id': getHeader('svix-id'),
    'svix-timestamp': getHeader('svix-timestamp'),
    'svix-signature': getHeader('svix-signature')
  };

  let event;
  try {
    event = new Webhook(signingSecret).verify(rawBody, headers);
  } catch (error) {
    console.error('Clerk webhook signature verification failed:', error);
    return jsonResponse({ error: 'Invalid webhook signature.' }, 400);
  }

  if (event.type !== 'user.created') {
    return jsonResponse({ received: true });
  }

  const user = event.data || {};
  const emailAddress = Array.isArray(user.email_addresses)
    ? user.email_addresses.find((item) => item.id === user.primary_email_address_id)?.email_address
    : '';

  if (!emailAddress) {
    console.error('Clerk user.created event has no primary email address.');
    return jsonResponse({ error: 'User email is missing.' }, 422);
  }

  const firstName = user.first_name || 'Student';
  let emailResponse;
  try {
    emailResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
        'idempotency-key': `clerk-user-created-${user.id}`
      },
      body: JSON.stringify({
        from,
        to: [emailAddress],
        subject: 'Your Lycemit student account is ready',
        text: [
          `Hello ${firstName},`,
          '',
          'Welcome to Lycemit and Chanakya Classes.',
          'Your student account has been created successfully.',
          '',
          `Sign in to your account: ${signInUrl}`,
          '',
          'We will share course updates, class schedules, and study resources with you.',
          '',
          '— Team Lycemit'
        ].join('\n'),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#172033;max-width:560px">
            <h2>Welcome to Lycemit, ${firstName}!</h2>
            <p>Your student account has been created successfully.</p>
            <p><a href="${signInUrl}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:700">Sign in to Lycemit</a></p>
            <p>We will share course updates, class schedules, and study resources with you.</p>
            <p>— Team Lycemit</p>
          </div>
        `
      })
    });
  } catch (error) {
    console.error('Resend welcome email request failed:', error);
    return jsonResponse({ error: 'Unable to reach the email service.' }, 502);
  }

  if (!emailResponse.ok) {
    console.error('Resend welcome email failed:', await emailResponse.text());
    return jsonResponse({ error: 'Unable to send welcome email.' }, 502);
  }

  return jsonResponse({ received: true });
}
