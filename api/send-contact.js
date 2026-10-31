const RESEND_API_URL = 'https://api.resend.com/emails';

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export const config = {
  api: {
    bodyParser: true
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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || 'Lycemit Website <onboarding@resend.dev>';
  const to = process.env.RESEND_TO_EMAIL || 'lycemit@gmail.com';

  if (!apiKey) {
    console.warn('RESEND_API_KEY environment variable is not configured on Vercel.');
    return jsonResponse({ 
      error: 'Email service is not configured. Please set RESEND_API_KEY in Vercel project environment variables or contact via WhatsApp.' 
    }, 503);
  }

  let payload = {};
  if (isNode) {
    if (typeof req.body === 'object' && req.body !== null) {
      payload = req.body;
    } else if (typeof req.body === 'string') {
      try {
        payload = JSON.parse(req.body);
      } catch {
        return jsonResponse({ error: 'Invalid JSON body.' }, 400);
      }
    }
  } else {
    try {
      payload = await req.json();
    } catch {
      return jsonResponse({ error: 'Invalid JSON body.' }, 400);
    }
  }

  const name = clean(payload.name, 100);
  const phone = clean(payload.phone, 40);
  const email = clean(payload.email, 160);
  const course = clean(payload.course, 160);
  const message = clean(payload.message, 1200);

  if (!name || !phone || !course || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ error: 'Please provide valid contact details and a message.' }, 400);
  }

  let emailResponse;
  try {
    emailResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New Lycemit admission inquiry: ${course}`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Course: ${course}`,
          '',
          message
        ].join('\n')
      })
    });
  } catch (error) {
    console.error('Resend contact email request failed:', error);
    return jsonResponse({ error: 'Unable to reach the email service.' }, 502);
  }

  if (!emailResponse.ok) {
    console.error('Resend contact email failed:', await emailResponse.text());
    return jsonResponse({ error: 'Unable to send the inquiry right now.' }, 502);
  }

  return jsonResponse({ ok: true });
}
