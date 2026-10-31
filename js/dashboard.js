/**
 * LYCEMIT & Chanakya Classes by Manmit Sir
 * Student Portal & Dashboard Engine (js/dashboard.js)
 * Manages Batches, Teachers Assigned, Performance Graphs, Classes, Attendance & Test Scores
 */

// =========================================================================
// 1. ALL AVAILABLE BATCHES & ASSIGNED TEACHERS DATASET
// =========================================================================
const ALL_AVAILABLE_BATCHES = [
    {
        id: 'batch-10th-cbse',
        name: 'Class 10th CBSE Board Toppers Batch',
        category: 'Class 10th CBSE',
        badge: 'Board Intensive',
        badgeColor: 'emerald',
        type: 'Offline Campus (Bettiah)',
        venue: 'Room 3, Main Lecture Hall, Supriya Cinema Road',
        timing: 'Daily Morning 6:30 AM – 8:30 AM | Doubt: 4:30 PM – 6:30 PM',
        targetExam: 'CBSE Class 10 Board 2027 (95%+ Target)',
        totalSeats: 30,
        enrolledSeats: 24,
        syllabusCovered: 78,
        kitDetails: '4 Fast Track Printed Books + Formula Concept Maps Combo',
        description: 'Direct face-to-face classroom coaching by Manmit Sir with rigorous daily concept drilling, printed study kit, weekly Sunday OMR tests, and individual doubt sessions.',
        assignedFaculty: [
            {
                name: 'Manmit Sir',
                role: 'Founder & Chief Academic Director',
                subject: 'Physics & Chemistry',
                exp: '12+ Years Experience (Bettiah Pioneer)',
                avatar: 'assets/manmit_sir_headshot_square.jpg',
                highlight: 'Ex-Kota Expert • Mentored 1000+ 95%+ Scorers'
            },
            {
                name: 'Er. Rajesh Verma',
                role: 'Senior Mathematics Specialist',
                subject: 'Mathematics & Coordinate Geometry',
                exp: '10+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: 'IIT-JEE Foundation & CBSE Topper Mentor'
            },
            {
                name: 'Dr. A. K. Mishra',
                role: 'Senior Biology Faculty',
                subject: 'Biology & Life Science Processes',
                exp: '9+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: 'Medical Foundation & Olympiad Specialist'
            },
            {
                name: 'Prof. S. P. Shrivastava',
                role: 'Senior Faculty',
                subject: 'Social Science & Board Presentation',
                exp: '15+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: '100/100 SST Board Answer Sheet Mentor'
            }
        ]
    },
    {
        id: 'batch-12th-neet',
        name: 'Class 11th & 12th Science + NEET Medical Super Batch',
        category: 'Class 11th-12th NEET',
        badge: 'Medical Special',
        badgeColor: 'rose',
        type: 'Offline Campus + All-India Test Series',
        venue: 'Room 5, Senior Wing, Supriya Cinema Road',
        timing: 'Morning 6:30 AM – 9:00 AM | Afternoon 3:00 PM – 5:30 PM',
        targetExam: 'NEET UG 2027 (680+ Marks Target) + CBSE 12th',
        totalSeats: 25,
        enrolledSeats: 21,
        syllabusCovered: 81,
        kitDetails: 'NCERT Line-by-Line Modules + 15 Yrs NEET PYQ Bank',
        description: 'Comprehensive medical entrance training covering Physics, Chemistry, Botany & Zoology with rigorous OMR mock testing and 1-on-1 performance reviews.',
        assignedFaculty: [
            {
                name: 'Manmit Sir',
                role: 'Chief Mentor & Director',
                subject: 'Physical Chemistry & Medical Guidance',
                exp: '12+ Years Experience',
                avatar: 'assets/manmit_sir_headshot_square.jpg',
                highlight: 'High-Yield Formula Techniques & Reaction Mastery'
            },
            {
                name: 'Dr. Neha Pandey',
                role: 'HOD Biology & Medical Trainer',
                subject: 'Botany & Human Physiology',
                exp: '8+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: 'Ex-Aakash Senior Faculty • 360/360 Bio Specialist'
            },
            {
                name: 'Er. Alok Ranjan',
                role: 'Senior Physics Lead',
                subject: 'Mechanics, Electrodynamics & Modern Physics',
                exp: '9+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: 'M.Tech • High-Speed Numerical Problem Solving'
            }
        ]
    },
    {
        id: 'batch-12th-jee',
        name: 'Class 11th & 12th JEE Main & Advanced Pinnacle Batch',
        category: 'Class 11th-12th JEE',
        badge: 'Engineering Pinnacle',
        badgeColor: 'indigo',
        type: 'Offline Campus + Advanced Problem Solving',
        venue: 'Room 4, Pinnacle Hall, Supriya Cinema Road',
        timing: 'Morning 7:30 AM – 10:00 AM | Evening 4:00 PM – 6:30 PM',
        targetExam: 'JEE Main / Advanced 2027 + CBSE 12th',
        totalSeats: 25,
        enrolledSeats: 19,
        syllabusCovered: 76,
        kitDetails: 'Advanced Problem Sheets, DPPs & 10-Year JEE PYQs',
        description: 'Intensive JEE Advanced program designed for high-scoring aspirants with specialized calculus, modern physics, and inorganic chemistry mechanisms.',
        assignedFaculty: [
            {
                name: 'Manmit Sir',
                role: 'Chief Mentor',
                subject: 'Inorganic & Physical Chemistry',
                exp: '12+ Years Experience',
                avatar: 'assets/manmit_sir_headshot_square.jpg',
                highlight: 'Thermodynamics, Equilibrium & Reaction Pathways'
            },
            {
                name: 'Er. Rajesh Verma',
                role: 'HOD Mathematics',
                subject: 'Advanced Calculus, Vectors & Matrices',
                exp: '10+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: 'IIT Kharagpur Alumnus • Advanced Problem Expert'
            },
            {
                name: 'Er. Alok Ranjan',
                role: 'Senior Physics Lead',
                subject: 'Rotational Dynamics & Electromagnetism',
                exp: '9+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: 'FIITJEE Pedagogy • Multi-Concept Question Solving'
            }
        ]
    },
    {
        id: 'batch-09th-olympiad',
        name: 'Class 09th Foundation & NTSE/Olympiad Prodigy Batch',
        category: 'Class 9th Foundation',
        badge: 'Foundation Prodigy',
        badgeColor: 'amber',
        type: 'Offline Campus & Practical Demonstrations',
        venue: 'Room 2, Foundation Wing, Supriya Cinema Road',
        timing: 'Daily Evening 5:00 PM – 7:00 PM',
        targetExam: 'Class 9 CBSE + Pre-RMO + Science Olympiad',
        totalSeats: 25,
        enrolledSeats: 18,
        syllabusCovered: 74,
        kitDetails: 'Foundation Concept Maps & Olympiad Workbooks',
        description: 'Building deep analytical thinking in Science & Mathematics early on with live classroom experiments, logical reasoning, and Olympiad problem sheets.',
        assignedFaculty: [
            {
                name: 'Manmit Sir',
                role: 'Chief Mentor',
                subject: 'Conceptual Science & Experimental Lab Demos',
                exp: '12+ Years Experience',
                avatar: 'assets/manmit_sir_headshot_square.jpg',
                highlight: 'Interactive Physics Demos & Real-World Science'
            },
            {
                name: 'Er. Vivek Anand',
                role: 'Senior Faculty',
                subject: 'Mental Ability & Olympiad Mathematics',
                exp: '7+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: 'NTSE Stage 1 & Mathematical Reasoning Lead'
            }
        ]
    },
    {
        id: 'batch-lycemit-app',
        name: 'Lycemit Fast Track 24x7 Digital Vault & Live App Batch',
        category: 'Online & Digital',
        badge: 'Online 24x7',
        badgeColor: 'brand',
        type: 'Online App & 24x7 Digital Vault',
        venue: 'Lycemit Android App / Web Portal',
        timing: 'Anytime 24x7 On-Demand Access + Daily 7:00 PM Live Doubt Stream',
        targetExam: 'Board Revision, Topic Masterclasses & All-Bettiah Mock Tests',
        totalSeats: 500,
        enrolledSeats: 420,
        syllabusCovered: 88,
        kitDetails: 'Digital E-Books, PDF Handwritten Notes & OMR Generator',
        description: '24x7 mobile learning companion with full chapter video lectures by Manmit Sir, downloadable notes, chapter DPPs, and instant doubt resolution.',
        assignedFaculty: [
            {
                name: 'Manmit Sir',
                role: 'Master Educator',
                subject: 'Physics, Chemistry & Board Strategy',
                exp: '12+ Years Experience',
                avatar: 'assets/manmit_sir_headshot_square.jpg',
                highlight: '142 Recorded HD Lectures & Live Evening Streams'
            },
            {
                name: 'Lycemit Academic Mentors',
                role: 'Digital Support Team',
                subject: '24x7 Instant DPP & Doubt Resolution',
                exp: '5+ Years Experience',
                avatar: 'assets/logo-transparent.png',
                highlight: 'Average Doubt Resolution Time: <15 Minutes'
            }
        ]
    }
];

// =========================================================================
// 2. STUDENT PERSONA DATA STORE (WITH PERFORMANCE GRAPH DATA)
// =========================================================================
const STUDENT_PERSONAS = {
    aarav: {
        id: 'aarav',
        name: 'Aarav Sharma',
        hindiName: 'आरव शर्मा',
        rollNo: 'CHK-2026-1042',
        avatar: 'assets/manmit_avatar.png',
        targetExam: 'CBSE Class 10th Board 2026–27',
        targetGoal: '98.5% Board Target',
        campus: 'Supriya Cinema Road, Bettiah (West Champaran)',
        room: 'Lecture Hall 3 (Offline Campus)',
        chiefMentor: 'Manmit Sir (Physics & Chemistry Expert)',
        guardian: 'Rajesh Sharma (+91 98765 43210)',
        bloodGroup: 'O+',
        enrollmentDate: '15 April 2026',
        enrolledBatchIds: ['batch-10th-cbse', 'batch-lycemit-app'],
        attendance: {
            overallRate: 94.2,
            totalDays: 70,
            presentDays: 66,
            medicalLeaves: 2,
            unexcused: 2,
            streakDays: 14,
            offlineRate: 95.8,
            onlineRate: 91.5
        },
        performance: {
            growthRate: '+8.0%',
            accuracyRate: '95.8%',
            avgTimePerQ: '52s',
            currentPercentile: '98.3%',
            currentRank: '#2 / 120 Students',
            testLabels: ['Test #1', 'Test #2', 'Test #3', 'Test #4', 'Test #5', 'Test #6', 'Test #7', 'Test #8'],
            dates: ['07 Sep', '14 Sep', '21 Sep', '28 Sep', '05 Oct', '12 Oct', '19 Oct', '25 Oct'],
            studentScores: [88, 90, 89, 92, 94, 93, 95, 96],
            batchAvgScores: [72, 73, 71, 74, 75, 74, 76, 75],
            topperScores: [94, 95, 94, 96, 97, 96, 98, 98],
            ranks: ['#7/110', '#5/112', '#6/115', '#4/115', '#3/118', '#4/118', '#3/120', '#2/120'],
            percentiles: ['94.2%', '95.5%', '94.8%', '96.5%', '97.4%', '96.8%', '97.8%', '98.3%'],
            subjects: [
                { name: 'Mathematics', score: 98, max: 100, accuracy: 98, speed: '48s/Q', status: 'Highest in Batch 🏆', color: 'emerald' },
                { name: 'Physics', score: 96, max: 100, accuracy: 96, speed: '52s/Q', status: 'Exceptional (Ray Optics)', color: 'blue' },
                { name: 'Biology', score: 94, max: 100, accuracy: 94, speed: '45s/Q', status: 'Strong Concept Retention', color: 'teal' },
                { name: 'Chemistry', score: 92, max: 100, accuracy: 92, speed: '55s/Q', status: 'Carbon Revision Needed ⚠️', color: 'amber' }
            ],
            mentorDiagnosis: 'Aarav has shown consistent upward momentum across all 8 weekly Sunday tests. Speed in Mathematics and Ray Optics is top tier in Bettiah. Recommend 1 special doubt session with Manmit Sir on Carbon Nomenclature before Sunday Test #9.'
        },
        batches: [
            {
                id: 'batch-10th-cbse',
                name: 'Class 10th CBSE Board Toppers Batch',
                type: 'Offline Campus (Bettiah)',
                timing: 'Daily Morning 6:30 AM – 8:30 AM | Evening Doubt: 4:30 PM – 6:30 PM',
                room: 'Room 3, Main Hall',
                mentor: 'Manmit Sir & Expert Team',
                progress: 78,
                subjects: [
                    { name: 'Physics', progress: 82, teacher: 'Manmit Sir' },
                    { name: 'Chemistry', progress: 76, teacher: 'Manmit Sir' },
                    { name: 'Mathematics', progress: 85, teacher: 'Er. Rajesh Verma' },
                    { name: 'Biology', progress: 80, teacher: 'Dr. A. K. Mishra' },
                    { name: 'Social Science & Sanskrit', progress: 72, teacher: 'Prof. S. P. Shrivastava' }
                ],
                kitStatus: '4 Fast Track Books Issued'
            },
            {
                id: 'batch-lycemit-app',
                name: 'Lycemit Fast Track Online Revision & Test Vault',
                type: 'Online App & 24x7 Digital Vault',
                timing: 'Anytime Self-Paced Access',
                room: 'Lycemit Android App / Web',
                mentor: 'Manmit Sir Recorded Lectures',
                progress: 88,
                videosWatched: '118 / 142 Lectures',
                dppSolved: '58 / 65 DPP Sets'
            }
        ],
        classesToday: [
            {
                time: '06:30 AM – 07:30 AM',
                subject: 'Mathematics',
                topic: 'Quadratic Equations & Roots Analysis',
                mentor: 'Manmit Sir',
                status: 'completed',
                statusText: 'Completed',
                attendance: 'Present (06:28 AM Biometric)',
                notesUrl: '#',
                hasDpp: true
            },
            {
                time: '07:30 AM – 08:30 AM',
                subject: 'Physics',
                topic: 'Light Reflection & Spherical Mirrors Numericals',
                mentor: 'Manmit Sir',
                status: 'completed',
                statusText: 'Completed',
                attendance: 'Present (07:31 AM Biometric)',
                notesUrl: '#',
                hasDpp: true
            },
            {
                time: '04:30 PM – 05:30 PM',
                subject: 'Chemistry',
                topic: 'Chemical Reactions, Balances & Precipitation Lab Demo',
                mentor: 'Manmit Sir',
                status: 'live',
                statusText: 'Live Now 🔴',
                attendance: 'Hall 3 In-Session',
                notesUrl: '#',
                hasDpp: false
            },
            {
                time: '05:30 PM – 06:30 PM',
                subject: 'Special Doubt Clearing',
                topic: 'Weekly Sunday OMR Mock Test #9 Strategy',
                mentor: 'Manmit Sir',
                status: 'upcoming',
                statusText: 'Upcoming ⏰',
                attendance: 'Seat Confirmed #14',
                notesUrl: '#',
                hasDpp: false
            }
        ],
        testScores: [
            {
                id: 'test-8',
                name: 'Sunday All-Bettiah Mega Mock Test #8',
                date: '25 October 2026',
                syllabus: 'Science (Full Term 1) & Maths (Algebra + Geometry)',
                score: 96,
                maxScore: 100,
                percentage: 96.0,
                rank: '#2 / 120 Students',
                percentile: '98.3%',
                grade: 'A1 • Outstanding',
                subjects: {
                    maths: { score: 49, max: 50 },
                    physics: { score: 24, max: 25 },
                    chemistry: { score: 23, max: 25 }
                },
                mentorNote: 'Exceptional speed in coordinate geometry. Minor revision needed in carbon nomenclature.'
            },
            {
                id: 'test-7',
                name: 'Sunday OMR Mock Test #7',
                date: '18 October 2026',
                syllabus: 'Physics Light & Electricity + Maths Triangles',
                score: 95,
                maxScore: 100,
                percentage: 95.0,
                rank: '#3 / 118 Students',
                percentile: '97.4%',
                grade: 'A1 • Excellent',
                subjects: {
                    maths: { score: 48, max: 50 },
                    physics: { score: 24, max: 25 },
                    chemistry: { score: 23, max: 25 }
                },
                mentorNote: 'Ray diagrams were neat and mathematically accurate.'
            },
            {
                id: 'test-6',
                name: 'Sunday OMR Mock Test #6',
                date: '11 October 2026',
                syllabus: 'Chemistry Acids, Bases & Salts + Maths Polynomials',
                score: 93,
                maxScore: 100,
                percentage: 93.0,
                rank: '#4 / 115 Students',
                percentile: '96.5%',
                grade: 'A1 • Superior',
                subjects: {
                    maths: { score: 46, max: 50 },
                    physics: { score: 24, max: 25 },
                    chemistry: { score: 23, max: 25 }
                },
                mentorNote: 'Great time management; finished 15 minutes before buzzer.'
            },
            {
                id: 'test-5',
                name: 'Sunday OMR Mock Test #5',
                date: '04 October 2026',
                syllabus: 'Biology Life Processes + Maths Real Numbers',
                score: 94,
                maxScore: 100,
                percentage: 94.0,
                rank: '#3 / 112 Students',
                percentile: '97.3%',
                grade: 'A1 • Excellent',
                subjects: {
                    maths: { score: 47, max: 50 },
                    physics: { score: 24, max: 25 },
                    chemistry: { score: 23, max: 25 }
                },
                mentorNote: 'Clean nephron and circulatory diagrams.'
            }
        ]
    },
    priya: {
        id: 'priya',
        name: 'Priya Kumari',
        hindiName: 'प्रिया कुमारी',
        rollNo: 'CHK-2026-1208',
        avatar: 'assets/manmit_avatar.png',
        targetExam: 'Class 12th Science (PCB) + NEET Medical 2027',
        targetGoal: 'NEET 680+ Marks Target',
        campus: 'Supriya Cinema Road, Bettiah (Senior Hall)',
        room: 'NEET Special Wing, Room 5',
        chiefMentor: 'Manmit Sir (Biology & Physical Chemistry Mentor)',
        guardian: 'Sunil Kumar (+91 94312 87654)',
        bloodGroup: 'B+',
        enrollmentDate: '10 May 2026',
        enrolledBatchIds: ['batch-12th-neet', 'batch-lycemit-app'],
        attendance: {
            overallRate: 96.5,
            totalDays: 70,
            presentDays: 68,
            medicalLeaves: 1,
            unexcused: 1,
            streakDays: 22,
            offlineRate: 97.2,
            onlineRate: 95.0
        },
        performance: {
            growthRate: '+10.5%',
            accuracyRate: '96.2%',
            avgTimePerQ: '46s',
            currentPercentile: '99.1%',
            currentRank: '#1 / 85 Students',
            testLabels: ['Test #1', 'Test #2', 'Test #3', 'Test #4', 'Test #5', 'Test #6', 'Test #7', 'Test #8'],
            dates: ['07 Sep', '14 Sep', '21 Sep', '28 Sep', '05 Oct', '12 Oct', '19 Oct', '25 Oct'],
            studentScores: [86, 88, 89, 91, 92, 94, 95, 96.5],
            batchAvgScores: [68, 70, 71, 72, 73, 74, 75, 74],
            topperScores: [88, 90, 92, 93, 94, 95, 96, 96.5],
            ranks: ['#3/80', '#2/80', '#2/82', '#2/85', '#1/85', '#1/85', '#1/85', '#1/85'],
            percentiles: ['96.2%', '97.5%', '97.8%', '98.2%', '98.9%', '99.0%', '99.0%', '99.1%'],
            subjects: [
                { name: 'Biology (Botany & Zoology)', score: 98, max: 100, accuracy: 98, speed: '40s/Q', status: 'Batch Rank #1 🏆', color: 'emerald' },
                { name: 'Physical Chemistry', score: 94, max: 100, accuracy: 94, speed: '48s/Q', status: 'Very High Accuracy', color: 'blue' },
                { name: 'Physics Mechanics', score: 92, max: 100, accuracy: 92, speed: '56s/Q', status: 'Solid Numerical Grip', color: 'teal' }
            ],
            mentorDiagnosis: 'Priya continues to lead the senior NEET cohort in Bettiah. Biology NCERT accuracy is exceptional (352/360 projection). Recommend focusing on projectile motion edge cases during evening numerical drills.'
        },
        batches: [
            {
                id: 'batch-12th-neet',
                name: 'Class 11th & 12th Science + NEET Medical Super Batch',
                type: 'Offline Bettiah Campus + NEET Test Series',
                timing: 'Morning 6:30 AM – 9:00 AM | Afternoon: 3:00 PM – 5:30 PM',
                room: 'Room 5, Senior Wing',
                mentor: 'Manmit Sir & Medical Entrance Faculty',
                progress: 81,
                subjects: [
                    { name: 'Biology (Botany & Zoology)', progress: 88, teacher: 'Dr. Neha Pandey' },
                    { name: 'Physical Chemistry', progress: 82, teacher: 'Manmit Sir' },
                    { name: 'Organic Chemistry', progress: 78, teacher: 'Manmit Sir' },
                    { name: 'Physics', progress: 75, teacher: 'Er. Alok Ranjan' }
                ],
                kitStatus: 'NEET Fast Track Modules Issued'
            },
            {
                id: 'batch-lycemit-app',
                name: 'Lycemit Fast Track Online Revision & Test Vault',
                type: 'Online App & 24x7 Digital Vault',
                timing: 'Anytime Self-Paced Access',
                room: 'Lycemit Android App / Web',
                mentor: 'Manmit Sir Recorded Lectures',
                progress: 92,
                videosWatched: '132 / 142 Lectures',
                dppSolved: '62 / 65 DPP Sets'
            }
        ],
        classesToday: [
            {
                time: '06:30 AM – 08:00 AM',
                subject: 'Biology (Zoology)',
                topic: 'Human Neural Control & Coordination',
                mentor: 'Dr. Neha Pandey',
                status: 'completed',
                statusText: 'Completed',
                attendance: 'Present (06:22 AM Biometric)',
                notesUrl: '#',
                hasDpp: true
            },
            {
                time: '08:00 AM – 09:00 AM',
                subject: 'Chemistry',
                topic: 'Chemical Kinetics & Rate Law Numericals',
                mentor: 'Manmit Sir',
                status: 'completed',
                statusText: 'Completed',
                attendance: 'Present (08:01 AM Biometric)',
                notesUrl: '#',
                hasDpp: true
            },
            {
                time: '03:00 PM – 04:30 PM',
                subject: 'Physics',
                topic: 'Current Electricity: Kirchhoff Laws & Potentiometer',
                mentor: 'Er. Alok Ranjan',
                status: 'live',
                statusText: 'Live Now 🔴',
                attendance: 'Senior Hall In-Session',
                notesUrl: '#',
                hasDpp: true
            }
        ],
        testScores: [
            {
                id: 'test-8-neet',
                name: 'Sunday All-Bettiah NEET Mega Mock #8',
                date: '25 October 2026',
                syllabus: 'NEET Full Syllabus (Physics + Chemistry + Biology 720 Marks)',
                score: 695,
                maxScore: 720,
                percentage: 96.5,
                rank: '#1 / 85 Students',
                percentile: '99.1%',
                grade: 'A1 • Rank 1 Topper',
                subjects: {
                    biology: { score: 355, max: 360 },
                    chemistry: { score: 172, max: 180 },
                    physics: { score: 168, max: 180 }
                },
                mentorNote: 'Phenomenal precision in genetics and cell biology. Potential top state medical college candidate.'
            }
        ]
    },
    rohan: {
        id: 'rohan',
        name: 'Rohan Verma',
        hindiName: 'रोहन वर्मा',
        rollNo: 'CHK-2026-1185',
        avatar: 'assets/manmit_avatar.png',
        targetExam: 'Class 09th CBSE + Science Olympiad 2026–27',
        targetGoal: '97% Foundation Target',
        campus: 'Supriya Cinema Road, Bettiah (Foundation Wing)',
        room: 'Room 2, Foundation Wing',
        chiefMentor: 'Manmit Sir (Science Specialist)',
        guardian: 'Manoj Verma (+91 91234 56789)',
        bloodGroup: 'A+',
        enrollmentDate: '20 June 2026',
        enrolledBatchIds: ['batch-09th-olympiad', 'batch-lycemit-app'],
        attendance: {
            overallRate: 92.8,
            totalDays: 70,
            presentDays: 65,
            medicalLeaves: 3,
            unexcused: 2,
            streakDays: 10,
            offlineRate: 94.0,
            onlineRate: 90.0
        },
        performance: {
            growthRate: '+9.0%',
            accuracyRate: '93.5%',
            avgTimePerQ: '58s',
            currentPercentile: '95.2%',
            currentRank: '#5 / 96 Students',
            testLabels: ['Test #1', 'Test #2', 'Test #3', 'Test #4', 'Test #5', 'Test #6', 'Test #7', 'Test #8'],
            dates: ['07 Sep', '14 Sep', '21 Sep', '28 Sep', '05 Oct', '12 Oct', '19 Oct', '25 Oct'],
            studentScores: [82, 84, 86, 88, 87, 89, 90, 91],
            batchAvgScores: [65, 67, 68, 70, 71, 71, 72, 73],
            topperScores: [92, 94, 95, 95, 96, 96, 97, 98],
            ranks: ['#9/90', '#7/92', '#6/95', '#5/95', '#6/96', '#5/96', '#5/96', '#5/96'],
            percentiles: ['90.5%', '92.4%', '93.8%', '94.5%', '94.0%', '94.8%', '95.0%', '95.2%'],
            subjects: [
                { name: 'Science Olympiad', score: 92, max: 100, accuracy: 94, speed: '55s/Q', status: 'Olympiad Gold Track', color: 'emerald' },
                { name: 'Mathematics', score: 90, max: 100, accuracy: 92, speed: '60s/Q', status: 'Strong Algebra Basics', color: 'blue' },
                { name: 'Mental Ability (MAT)', score: 94, max: 100, accuracy: 96, speed: '45s/Q', status: 'NTSE Stage 1 Ready', color: 'teal' }
            ],
            mentorDiagnosis: 'Strong intuitive curiosity and practical experimentation skills. Rohan grasps physical mechanics fast; should focus on balancing chemical equations carefully.'
        },
        batches: [
            {
                id: 'batch-09th-olympiad',
                name: 'Class 09th Foundation & NTSE/Olympiad Prodigy Batch',
                type: 'Offline Campus & Practical Labs',
                timing: 'Daily Evening: 5:00 PM – 7:00 PM',
                room: 'Room 2, Foundation Wing',
                mentor: 'Manmit Sir & Junior Mentors',
                progress: 74,
                subjects: [
                    { name: 'Physics & Chemistry', progress: 76, teacher: 'Manmit Sir' },
                    { name: 'Mathematics', progress: 75, teacher: 'Er. Rajesh Verma' },
                    { name: 'Mental Ability & MAT', progress: 80, teacher: 'Er. Vivek Anand' }
                ],
                kitStatus: 'Foundation Concept Maps Issued'
            },
            {
                id: 'batch-lycemit-app',
                name: 'Lycemit Fast Track Online Revision & Test Vault',
                type: 'Online App & 24x7 Digital Vault',
                timing: 'Anytime Self-Paced Access',
                room: 'Lycemit Android App / Web',
                mentor: 'Manmit Sir Recorded Lectures',
                progress: 80,
                videosWatched: '95 / 142 Lectures',
                dppSolved: '48 / 65 DPP Sets'
            }
        ],
        classesToday: [
            {
                time: '05:00 PM – 06:00 PM',
                subject: 'Science Olympiad',
                topic: 'Force and Laws of Motion Practical Demonstrations',
                mentor: 'Manmit Sir',
                status: 'upcoming',
                statusText: 'Upcoming ⏰',
                attendance: 'Seat #24 Assigned',
                notesUrl: '#',
                hasDpp: true
            },
            {
                time: '06:00 PM – 07:00 PM',
                subject: 'Mathematics',
                topic: 'Linear Equations in Two Variables Practice',
                mentor: 'Er. Rajesh Verma',
                status: 'upcoming',
                statusText: 'Upcoming ⏰',
                attendance: 'Room 2',
                notesUrl: '#',
                hasDpp: false
            }
        ],
        testScores: [
            {
                id: 'test-8-class9',
                name: 'Sunday Foundation OMR Mock #8',
                date: '25 October 2026',
                syllabus: 'Laws of Motion + Number Systems + Atoms & Molecules',
                score: 91,
                maxScore: 100,
                percentage: 91.0,
                rank: '#5 / 96 Students',
                percentile: '95.2%',
                grade: 'A1 • Excellent',
                subjects: {
                    science: { score: 46, max: 50 },
                    maths: { score: 45, max: 50 }
                },
                mentorNote: 'Strong intuitive understanding of momentum principles. Keep practicing algebraic substitutions.'
            }
        ]
    }
};

let currentPersona = STUDENT_PERSONAS.aarav;
let currentAttendanceFilter = 'all'; // 'all', 'offline', 'online'
let currentPerformanceView = 'overall'; // 'overall', 'subjects', 'accuracy'
let currentPerformanceTimeRange = '8weeks'; // '4weeks', '8weeks', 'all'

// =========================================================================
// 3. DASHBOARD INITIALIZATION
// =========================================================================
function initStudentDashboard() {
    try {
        const stored = localStorage.getItem('lycemit_student_session');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed.name && parsed.name.toLowerCase().includes('priya')) {
                currentPersona = { ...STUDENT_PERSONAS.priya };
            } else if (parsed.name && parsed.name.toLowerCase().includes('rohan')) {
                currentPersona = { ...STUDENT_PERSONAS.rohan };
            } else if (parsed.name) {
                currentPersona = {
                    ...STUDENT_PERSONAS.aarav,
                    name: parsed.name,
                    email: parsed.email || STUDENT_PERSONAS.aarav.email,
                    avatar: parsed.avatar || STUDENT_PERSONAS.aarav.avatar
                };
                if (parsed.targetClass) currentPersona.targetExam = parsed.targetClass;
            }
        }
    } catch (e) {}

    // Synchronize with Clerk user if signed in
    syncClerkStudentPersona();
    if (window.Clerk && typeof window.Clerk.addListener === 'function') {
        window.Clerk.addListener(() => {
            if (syncClerkStudentPersona()) {
                renderProfileHeader();
            }
            syncDashboardAuthButtons();
            updatePersonaDropdown();
        });
    }

    renderDashboardAll();
    setupDashboardClock();
    syncDashboardAuthButtons();
    updatePersonaDropdown();
}

function syncClerkStudentPersona() {
    let changed = false;
    if (window.Clerk && window.Clerk.user) {
        const u = window.Clerk.user;
        const fullName = u.fullName || u.firstName || (u.primaryEmailAddress ? u.primaryEmailAddress.emailAddress.split('@')[0] : '');
        if (fullName && currentPersona.name !== fullName) {
            currentPersona.name = fullName;
            changed = true;
        }
        if (u.imageUrl && currentPersona.avatar !== u.imageUrl) {
            currentPersona.avatar = u.imageUrl;
            changed = true;
        }
    }
    return changed;
}

function updatePersonaDropdown() {
    const sel = document.getElementById('dashboardPersonaSelect');
    if (!sel) return;

    const isCustom = (
        currentPersona.name !== STUDENT_PERSONAS.aarav.name &&
        currentPersona.name !== STUDENT_PERSONAS.priya.name &&
        currentPersona.name !== STUDENT_PERSONAS.rohan.name
    );

    if (isCustom) {
        sel.innerHTML = `
            <option value="custom" selected>🎓 ${currentPersona.name} (Active)</option>
            <option value="aarav">👤 Demo: Aarav Sharma (10th CBSE)</option>
            <option value="priya">👩‍⚕️ Demo: Priya Kumari (12th NEET)</option>
            <option value="rohan">🧑‍🔬 Demo: Rohan Verma (9th Olympiad)</option>
        `;
    } else {
        sel.innerHTML = `
            <option value="aarav" ${currentPersona.name === STUDENT_PERSONAS.aarav.name ? 'selected' : ''}>👤 Aarav Sharma (10th CBSE)</option>
            <option value="priya" ${currentPersona.name === STUDENT_PERSONAS.priya.name ? 'selected' : ''}>👩‍⚕️ Priya Kumari (12th NEET)</option>
            <option value="rohan" ${currentPersona.name === STUDENT_PERSONAS.rohan.name ? 'selected' : ''}>🧑‍🔬 Rohan Verma (9th Olympiad)</option>
        `;
    }
}

function switchStudentPersona(personaKey) {
    if (personaKey === 'custom') {
        initStudentDashboard();
        return;
    }
    if (STUDENT_PERSONAS[personaKey]) {
        currentPersona = { ...STUDENT_PERSONAS[personaKey] };
        renderDashboardAll();
        updatePersonaDropdown();
        if (typeof showToast === 'function') {
            showToast(`Switched profile to ${currentPersona.name}`);
        }
    }
}

function syncDashboardAuthButtons() {
    const loggedInActions = document.getElementById('authLoggedInActions');
    const loggedOutActions = document.getElementById('authLoggedOutActions');
    const accountLabel = document.getElementById('dashboardAccountLabel');
    if (!loggedInActions || !loggedOutActions) return;

    const hasClerkUser = Boolean(window.Clerk && window.Clerk.user);
    const hasLocalSession = Boolean(localStorage.getItem('lycemit_student_session'));
    const isLoggedIn = hasClerkUser || hasLocalSession;

    if (isLoggedIn) {
        loggedInActions.classList.remove('hidden');
        loggedInActions.classList.add('flex');
        loggedOutActions.classList.add('hidden');
        loggedOutActions.classList.remove('flex');
        if (accountLabel) {
            accountLabel.textContent = hasClerkUser ? 'Account' : 'Digital ID';
        }
    } else {
        loggedInActions.classList.add('hidden');
        loggedInActions.classList.remove('flex');
        loggedOutActions.classList.remove('hidden');
        loggedOutActions.classList.add('flex');
    }
}
window.syncDashboardAuthButtons = syncDashboardAuthButtons;

function openStudentAccountModal() {
    if (window.Clerk && window.Clerk.user) {
        window.Clerk.openUserProfile();
    } else {
        openDigitalIdModal();
    }
}
window.openStudentAccountModal = openStudentAccountModal;

// =========================================================================
// 4. COMPLETE RENDER PIPELINE
// =========================================================================
function renderDashboardAll() {
    renderProfileHeader();
    renderStatsMetrics();
    renderEnrolledBatches();
    renderAvailableBatches();
    renderTodayClasses();
    renderAttendanceSection();
    renderPerformanceGraph();
    renderTestScoresSection();
}

// A. Profile Header & Dossier
function renderProfileHeader() {
    const p = currentPersona;
    const nameEls = document.querySelectorAll('.dash-student-name');
    nameEls.forEach(el => el.textContent = p.name);

    const rollEls = document.querySelectorAll('.dash-student-roll');
    rollEls.forEach(el => el.textContent = p.rollNo);

    const examEls = document.querySelectorAll('.dash-student-target');
    examEls.forEach(el => el.textContent = p.targetExam);

    const mentorEls = document.querySelectorAll('.dash-student-mentor');
    mentorEls.forEach(el => el.textContent = p.chiefMentor);

    const campusEls = document.querySelectorAll('.dash-student-campus');
    campusEls.forEach(el => el.textContent = p.campus);

    const guardianEls = document.querySelectorAll('.dash-student-guardian');
    guardianEls.forEach(el => el.textContent = p.guardian);

    const bloodEls = document.querySelectorAll('.dash-student-blood');
    bloodEls.forEach(el => el.textContent = p.bloodGroup);
}

// B. Stats Metric Cards
function renderStatsMetrics() {
    const p = currentPersona;
    const statBatchEl = document.getElementById('statEnrolledBatches');
    if (statBatchEl) statBatchEl.textContent = `${p.batches.length} Active`;

    const statClassesEl = document.getElementById('statTodayClasses');
    if (statClassesEl) statClassesEl.textContent = `${p.classesToday.length} Sessions`;

    const statAttRateEl = document.getElementById('statAttendanceRate');
    if (statAttRateEl) statAttRateEl.textContent = `${p.attendance.overallRate}%`;

    const statScoreEl = document.getElementById('statLatestScore');
    const latestTest = p.testScores[0];
    if (statScoreEl && latestTest) {
        statScoreEl.textContent = `${latestTest.score} / ${latestTest.maxScore} (${latestTest.percentage}%)`;
    }

    const statRankEl = document.getElementById('statBatchRank');
    if (statRankEl && latestTest) {
        statRankEl.textContent = latestTest.rank;
    }
}

// C. Enrolled Batches
function renderEnrolledBatches() {
    const p = currentPersona;
    const container = document.getElementById('enrolledBatchesList');
    if (!container) return;

    container.innerHTML = p.batches.map(b => `
        <div class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-2">
                        <i class="fa-solid fa-graduation-cap"></i> ${b.type}
                    </span>
                    <h3 class="font-display font-extrabold text-xl text-slate-900 dark:text-white">${b.name}</h3>
                </div>
                <div class="text-right flex-shrink-0">
                    <span class="text-2xl font-black text-brand-600 dark:text-brand-400">${b.progress}%</span>
                    <p class="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Syllabus Covered</p>
                </div>
            </div>

            <div class="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-5">
                <div class="h-full bg-gradient-to-r from-brand-600 to-amber-500 rounded-full transition-all duration-1000" style="width: ${b.progress}%"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300 mb-5">
                <div class="flex items-center gap-2">
                    <i class="fa-regular fa-clock text-brand-600"></i>
                    <span><strong>Routine:</strong> ${b.timing}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-location-dot text-rose-500"></i>
                    <span><strong>Venue:</strong> ${b.room}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-chalkboard-user text-amber-500"></i>
                    <span><strong>Mentor:</strong> ${b.mentor}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-book text-emerald-500"></i>
                    <span><strong>Kit Status:</strong> ${b.kitStatus || b.videosWatched || 'Verified Active'}</span>
                </div>
            </div>

            ${b.subjects ? `
                <div class="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-2">
                    <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">Subject-Wise Progress &amp; Faculty Lead:</p>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        ${b.subjects.map(s => `
                            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                                <div class="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                                    <span class="truncate pr-1">${s.name}</span>
                                    <span class="text-brand-600 dark:text-brand-400">${s.progress}%</span>
                                </div>
                                <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-1">
                                    <div class="h-full bg-brand-500 rounded-full" style="width: ${s.progress}%"></div>
                                </div>
                                <span class="text-[10px] text-slate-500 block truncate"><i class="fa-solid fa-user-tie mr-1 text-brand-500"></i>${s.teacher}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <span class="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Active Enrolled Batch • Session 2026–27
                </span>
                <button onclick="openCourseSyllabusModal('${b.name}')" class="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 text-slate-800 dark:text-slate-200 transition">
                    View Syllabus &amp; Notes
                </button>
            </div>
        </div>
    `).join('');
}

// D. ALL AVAILABLE BATCHES & ASSIGNED TEACHERS
function renderAvailableBatches() {
    const p = currentPersona;
    const container = document.getElementById('availableBatchesList');
    if (!container) return;

    container.innerHTML = ALL_AVAILABLE_BATCHES.map(batch => {
        const isEnrolled = p.enrolledBatchIds.includes(batch.id);
        const seatsLeft = batch.totalSeats - batch.enrolledSeats;

        return `
            <div class="rounded-3xl bg-white dark:bg-slate-900 border ${isEnrolled ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-slate-200 dark:border-slate-800'} p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between group">
                <div>
                    <!-- Card Header -->
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                                ${batch.badge}
                            </span>
                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${batch.type.includes('Offline') ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20' : 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20'}">
                                <i class="${batch.type.includes('Offline') ? 'fa-solid fa-school' : 'fa-solid fa-mobile-screen'} mr-1"></i> ${batch.type}
                            </span>
                        </div>
                        ${isEnrolled ? `
                            <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500 text-white shadow-md shadow-emerald-500/30 flex items-center gap-1.5 flex-shrink-0 animate-pulse">
                                <i class="fa-solid fa-circle-check"></i> Enrolled
                            </span>
                        ` : `
                            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex-shrink-0">
                                <i class="fa-solid fa-users text-brand-500 mr-1"></i> ${seatsLeft} Seats Left
                            </span>
                        `}
                    </div>

                    <h3 class="font-display font-extrabold text-xl text-slate-900 dark:text-white leading-tight mb-2">
                        ${batch.name}
                    </h3>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        ${batch.description}
                    </p>

                    <!-- Batch Info Pills -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 dark:text-slate-300 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 mb-5">
                        <div class="flex items-center gap-2">
                            <i class="fa-regular fa-clock text-brand-600 flex-shrink-0"></i>
                            <span class="truncate"><strong>Timings:</strong> ${batch.timing.split('|')[0]}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-location-dot text-rose-500 flex-shrink-0"></i>
                            <span class="truncate"><strong>Venue:</strong> ${batch.venue.split(',')[0]}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-bullseye text-amber-500 flex-shrink-0"></i>
                            <span class="truncate"><strong>Target:</strong> ${batch.targetExam}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-box text-emerald-500 flex-shrink-0"></i>
                            <span class="truncate"><strong>Kit:</strong> ${batch.kitDetails}</span>
                        </div>
                    </div>

                    <!-- TEACHERS ASSIGNED SECTION -->
                    <div class="border-t border-slate-100 dark:border-slate-800 pt-4 mb-4">
                        <div class="flex items-center justify-between mb-3">
                            <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                                <i class="fa-solid fa-chalkboard-user text-brand-600"></i> Teachers Assigned to this Batch:
                            </h4>
                            <span class="text-[10px] text-slate-400 font-bold">${batch.assignedFaculty.length} Mentors</span>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            ${batch.assignedFaculty.map(faculty => `
                                <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 transition flex items-start gap-3 shadow-sm">
                                    <div class="w-10 h-10 rounded-xl overflow-hidden bg-brand-500/10 flex items-center justify-center flex-shrink-0 border border-brand-500/20">
                                        <img src="${faculty.avatar}" alt="${faculty.name}" class="w-full h-full object-cover">
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-center justify-between gap-1">
                                            <h5 class="font-display font-extrabold text-xs text-slate-900 dark:text-white truncate">${faculty.name}</h5>
                                            <span class="text-[9px] font-bold px-1.5 py-0.2 rounded bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 flex-shrink-0">${faculty.role.split('&')[0]}</span>
                                        </div>
                                        <p class="text-[11px] font-bold text-amber-600 dark:text-amber-400 truncate mt-0.5">${faculty.subject}</p>
                                        <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${faculty.highlight}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Footer Actions -->
                <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div class="text-xs text-slate-500">
                        <span class="font-bold text-slate-800 dark:text-slate-200">${batch.enrolledSeats} / ${batch.totalSeats}</span> enrolled students
                    </div>
                    ${isEnrolled ? `
                        <button onclick="document.getElementById('classes').scrollIntoView({ behavior: 'smooth' })" class="px-4 py-2.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/20 transition flex items-center gap-1.5">
                            <i class="fa-regular fa-calendar-check"></i> View My Classes
                        </button>
                    ` : `
                        <button onclick="openBatchSwitchModal('${batch.id}', '${batch.name}')" class="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition flex items-center gap-1.5">
                            <i class="fa-solid fa-paper-plane text-amber-400"></i> Request Batch Switch
                        </button>
                    `}
                </div>
            </div>
        `;
    }).join('');
}

// E. PERFORMANCE GRAPH & ACADEMIC TRAJECTORY
function renderPerformanceGraph() {
    const p = currentPersona;
    const perf = p.performance;
    const container = document.getElementById('performanceGraphContainer');
    if (!container) return;

    // A. Update KPI Metrics in the header
    const kpiGrowthEl = document.getElementById('perfKpiGrowth');
    if (kpiGrowthEl) kpiGrowthEl.textContent = perf.growthRate;

    const kpiAccuracyEl = document.getElementById('perfKpiAccuracy');
    if (kpiAccuracyEl) kpiAccuracyEl.textContent = perf.accuracyRate;

    const kpiPercentileEl = document.getElementById('perfKpiPercentile');
    if (kpiPercentileEl) kpiPercentileEl.textContent = perf.currentPercentile;

    const kpiRankEl = document.getElementById('perfKpiRank');
    if (kpiRankEl) kpiRankEl.textContent = perf.currentRank;

    const mentorDiagEl = document.getElementById('perfMentorDiagnosis');
    if (mentorDiagEl) mentorDiagEl.textContent = perf.mentorDiagnosis;

    // B. Calculate SVG Coordinates for the 8 data points
    // Dimensions: 840px wide by 260px high
    // X range: 50 to 790 (interval = 740 / 7 ≈ 105.71px)
    // Y range: 60% = 220px, 100% = 30px (delta = 190px for 40% -> 4.75px per 1%)
    const minScore = 60;
    const maxScore = 100;
    const svgWidth = 840;
    const svgHeight = 260;
    const xStart = 50;
    const xInterval = (svgWidth - 100) / (perf.testLabels.length - 1);
    const yBottom = 220;
    const yTop = 30;

    function getCoords(scores) {
        return scores.map((s, idx) => {
            const x = xStart + (idx * xInterval);
            const clamped = Math.max(minScore, Math.min(maxScore, s));
            const y = yBottom - ((clamped - minScore) / (maxScore - minScore)) * (yBottom - yTop);
            return { x, y, score: s };
        });
    }

    const studentCoords = getCoords(perf.studentScores);
    const avgCoords = getCoords(perf.batchAvgScores);
    const topperCoords = getCoords(perf.topperScores);

    // Build SVG Path Strings with smooth cubic bezier curves
    function buildBezierPath(coords) {
        if (!coords.length) return '';
        let d = `M ${coords[0].x.toFixed(1)},${coords[0].y.toFixed(1)}`;
        for (let i = 0; i < coords.length - 1; i++) {
            const current = coords[i];
            const next = coords[i + 1];
            const cpX = (current.x + next.x) / 2;
            d += ` C ${cpX.toFixed(1)},${current.y.toFixed(1)} ${cpX.toFixed(1)},${next.y.toFixed(1)} ${next.x.toFixed(1)},${next.y.toFixed(1)}`;
        }
        return d;
    }

    const studentPath = buildBezierPath(studentCoords);
    const avgPath = buildBezierPath(avgCoords);
    const topperPath = buildBezierPath(topperCoords);

    // Closed Area path for gradient fill under student curve
    const areaPath = `${studentPath} L ${studentCoords[studentCoords.length - 1].x.toFixed(1)},${yBottom} L ${studentCoords[0].x.toFixed(1)},${yBottom} Z`;

    // Render interactive SVG
    container.innerHTML = `
        <div class="space-y-6">
            <!-- Graph Visual Container -->
            <div class="relative w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-6 shadow-2xl">
                <!-- Floating On-Hover Tooltip Box -->
                <div id="perfGraphTooltip" class="hidden absolute top-4 right-4 z-20 p-3.5 rounded-2xl bg-slate-950/90 border border-brand-500/40 text-xs backdrop-blur-md shadow-2xl min-w-[200px] pointer-events-none transition-all duration-200">
                    <div class="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5 mb-1.5">
                        <span id="tooltipTestName" class="font-display font-extrabold text-white text-xs">Sunday Test #8</span>
                        <span id="tooltipDate" class="text-[10px] text-slate-400">25 Oct</span>
                    </div>
                    <div class="space-y-1">
                        <div class="flex justify-between items-center">
                            <span class="text-slate-400 text-[11px]">${p.name}'s Score:</span>
                            <span id="tooltipScore" class="font-bold text-emerald-400 font-mono text-xs">96%</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-slate-400 text-[11px]">Bettiah Rank:</span>
                            <span id="tooltipRank" class="font-bold text-amber-300 font-mono text-xs">#2 / 120</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-slate-400 text-[11px]">Percentile:</span>
                            <span id="tooltipPercentile" class="font-bold text-sky-400 font-mono text-xs">98.3%</span>
                        </div>
                    </div>
                </div>

                <!-- SVG Performance Graph Canvas -->
                <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="w-full h-auto select-none overflow-visible">
                    <defs>
                        <linearGradient id="perfAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#2563eb" stop-opacity="0.45" />
                            <stop offset="70%" stop-color="#10b981" stop-opacity="0.15" />
                            <stop offset="100%" stop-color="#0284c7" stop-opacity="0.0" />
                        </linearGradient>
                        <linearGradient id="perfLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#3b82f6" />
                            <stop offset="50%" stop-color="#06b6d4" />
                            <stop offset="100%" stop-color="#10b981" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="glow"/>
                            <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                        </filter>
                    </defs>

                    <!-- Horizontal Gridlines & Y-Axis Scale -->
                    ${[100, 90, 80, 70, 60].map(val => {
                        const y = yBottom - ((val - minScore) / (maxScore - minScore)) * (yBottom - yTop);
                        return `
                            <g class="text-[10px] font-mono fill-slate-500 select-none">
                                <line x1="${xStart - 10}" y1="${y}" x2="${svgWidth - xStart + 10}" y2="${y}" stroke="#334155" stroke-dasharray="3,4" stroke-width="1" />
                                <text x="${xStart - 18}" y="${y + 3}" text-anchor="end">${val}%</text>
                            </g>
                        `;
                    }).join('')}

                    <!-- Area Fill Beneath Student Curve -->
                    <path d="${areaPath}" fill="url(#perfAreaGradient)" />

                    <!-- Bettiah Topper Line (Dotted Amber) -->
                    <path d="${topperPath}" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3" opacity="0.85" />

                    <!-- Batch Average Line (Dashed Slate) -->
                    <path d="${avgPath}" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5" opacity="0.75" />

                    <!-- Student Score Trajectory Line (Glowing Emerald-Blue) -->
                    <path d="${studentPath}" fill="none" stroke="url(#perfLineGradient)" stroke-width="4" stroke-linecap="round" filter="url(#glow)" />

                    <!-- Interactive Data Nodes -->
                    ${studentCoords.map((coord, idx) => `
                        <g class="cursor-pointer group" onmouseenter="showGraphNodeTooltip(${idx})" onclick="showGraphNodeTooltip(${idx})">
                            <!-- Invisible Enlarged Target Area -->
                            <circle cx="${coord.x}" cy="${coord.y}" r="14" fill="transparent" />
                            <!-- Outer Pulsing Halo -->
                            <circle cx="${coord.x}" cy="${coord.y}" r="6.5" fill="#10b981" opacity="0.3" class="animate-ping" />
                            <!-- Main Node Core -->
                            <circle cx="${coord.x}" cy="${coord.y}" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="3" />
                            <!-- Score Label on Top -->
                            <text x="${coord.x}" y="${coord.y - 10}" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold" font-family="monospace">${coord.score}%</text>
                            <!-- X-Axis Test Label -->
                            <text x="${coord.x}" y="${yBottom + 20}" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="600">${perf.testLabels[idx]}</text>
                            <text x="${coord.x}" y="${yBottom + 33}" text-anchor="middle" fill="#64748b" font-size="9">${perf.dates[idx]}</text>
                        </g>
                    `).join('')}
                </svg>

                <!-- Graph Legend -->
                <div class="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-800 text-xs">
                    <div class="flex flex-wrap items-center gap-4">
                        <span class="flex items-center gap-2 text-white font-bold">
                            <span class="w-3.5 h-1 rounded bg-gradient-to-r from-brand-500 to-emerald-400"></span>
                            <span>${p.name}'s Score (Current: ${perf.studentScores[perf.studentScores.length - 1]}%)</span>
                        </span>
                        <span class="flex items-center gap-2 text-slate-400">
                            <span class="w-3.5 h-0.5 border-t border-dashed border-amber-400"></span>
                            <span>Bettiah Topper Peak (${perf.topperScores[perf.topperScores.length - 1]}%)</span>
                        </span>
                        <span class="flex items-center gap-2 text-slate-400">
                            <span class="w-3.5 h-0.5 border-t border-dashed border-slate-400"></span>
                            <span>Batch Average (${perf.batchAvgScores[perf.batchAvgScores.length - 1]}%)</span>
                        </span>
                    </div>
                    <span class="text-[11px] text-slate-400">
                        <i class="fa-solid fa-arrow-trend-up text-emerald-400 mr-1"></i> Net Growth: <strong class="text-emerald-400">${perf.growthRate}</strong>
                    </span>
                </div>
            </div>

            <!-- Subject-Wise Comparative Bars & Strength Radar -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                    <h4 class="font-display font-extrabold text-sm text-slate-900 dark:text-white mb-3 flex items-center justify-between">
                        <span><i class="fa-solid fa-chart-simple text-brand-600 mr-1.5"></i> Subject Mastery &amp; Accuracy</span>
                        <span class="text-[11px] text-slate-400">Test #8 Metrics</span>
                    </h4>
                    <div class="space-y-3.5">
                        ${perf.subjects.map(s => `
                            <div>
                                <div class="flex justify-between items-center text-xs font-bold mb-1">
                                    <span class="text-slate-800 dark:text-slate-200">${s.name}</span>
                                    <span class="text-brand-600 dark:text-brand-400 font-mono">${s.score}% (${s.accuracy}% accuracy)</span>
                                </div>
                                <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-brand-600 to-emerald-500 rounded-full" style="width: ${s.score}%"></div>
                                </div>
                                <div class="flex justify-between items-center text-[10px] text-slate-500 mt-0.5">
                                    <span>Status: <strong class="text-slate-700 dark:text-slate-300">${s.status}</strong></span>
                                    <span>Avg Speed: <strong>${s.speed}</strong></span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-gradient-to-br from-brand-900/40 via-slate-900 to-slate-950 border border-brand-500/20 text-white shadow-md flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-2 mb-2 text-xs font-bold text-amber-400">
                            <i class="fa-solid fa-brain"></i> Manmit Sir's Academic Diagnosis &amp; Strategic Review
                        </div>
                        <p class="text-xs text-slate-200 leading-relaxed italic">
                            "${perf.mentorDiagnosis}"
                        </p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                        <span class="text-slate-400">Target for Sunday Test #9: <strong class="text-emerald-400">98% / 100</strong></span>
                        <button onclick="downloadOmrReport('Performance Trajectory Report')" class="px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold transition flex items-center gap-1.5 shadow-sm text-xs">
                            <i class="fa-solid fa-file-arrow-down"></i> Export Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showGraphNodeTooltip(index) {
    const p = currentPersona;
    const perf = p.performance;
    const tooltip = document.getElementById('perfGraphTooltip');
    if (!tooltip) return;

    document.getElementById('tooltipTestName').textContent = perf.testLabels[index];
    document.getElementById('tooltipDate').textContent = perf.dates[index];
    document.getElementById('tooltipScore').textContent = `${perf.studentScores[index]}%`;
    document.getElementById('tooltipRank').textContent = perf.ranks[index];
    document.getElementById('tooltipPercentile').textContent = perf.percentiles[index];

    tooltip.classList.remove('hidden');
}

// F. TODAY'S CLASS ROUTINE
function renderTodayClasses() {
    const p = currentPersona;
    const container = document.getElementById('todayClassesList');
    if (!container) return;

    container.innerHTML = p.classesToday.map(c => {
        let badgeClass = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
        let iconClass = 'fa-solid fa-circle-check text-emerald-500';

        if (c.status === 'live') {
            badgeClass = 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 animate-pulse';
            iconClass = 'fa-solid fa-tower-broadcast text-rose-500 animate-pulse';
        } else if (c.status === 'upcoming') {
            badgeClass = 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30';
            iconClass = 'fa-regular fa-clock text-amber-500';
        }

        return `
            <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:border-brand-500/50 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 text-xl">
                        <i class="${iconClass}"></i>
                    </div>
                    <div>
                        <div class="flex flex-wrap items-center gap-2 mb-1">
                            <span class="text-xs font-bold text-slate-500 dark:text-slate-400">${c.time}</span>
                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${badgeClass}">
                                ${c.statusText}
                            </span>
                        </div>
                        <h4 class="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                            ${c.subject}: <span class="font-normal text-slate-700 dark:text-slate-300">${c.topic}</span>
                        </h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
                            <span><i class="fa-solid fa-chalkboard-user mr-1 text-brand-500"></i> ${c.mentor}</span>
                            <span>•</span>
                            <span class="text-emerald-600 dark:text-emerald-400 font-semibold"><i class="fa-solid fa-id-badge mr-1"></i> ${c.attendance}</span>
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-2 self-end md:self-center flex-shrink-0">
                    ${c.status === 'live' ? `
                        <button onclick="joinLiveClass('${c.subject}')" class="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 transition flex items-center gap-1.5">
                            <i class="fa-solid fa-video"></i> Join Classroom
                        </button>
                    ` : ''}
                    ${c.notesUrl ? `
                        <button onclick="downloadClassNotes('${c.subject} - ${c.topic}')" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5" title="Download Lecture Handout">
                            <i class="fa-solid fa-file-arrow-down text-brand-500"></i> Notes PDF
                        </button>
                    ` : ''}
                    ${c.hasDpp ? `
                        <button onclick="openDppModal('${c.subject}')" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/20 transition flex items-center gap-1.5">
                            <i class="fa-solid fa-pen-ruler"></i> DPP #14
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// G. ATTENDANCE SECTION
function renderAttendanceSection() {
    const p = currentPersona;
    const att = p.attendance;

    const overallEl = document.getElementById('attOverallPercent');
    if (overallEl) overallEl.textContent = `${att.overallRate}%`;

    const presentEl = document.getElementById('attPresentCount');
    if (presentEl) presentEl.textContent = `${att.presentDays} Days`;

    const totalEl = document.getElementById('attTotalCount');
    if (totalEl) totalEl.textContent = `${att.totalDays} Total`;

    const streakEl = document.getElementById('attStreakDays');
    if (streakEl) streakEl.textContent = `${att.streakDays} Days 🔥`;

    renderAttendanceCalendar();
}

function setAttendanceFilter(filterMode) {
    currentAttendanceFilter = filterMode;
    const btnAll = document.getElementById('filterAll');
    const btnOffline = document.getElementById('filterOffline');
    const btnOnline = document.getElementById('filterOnline');

    [btnAll, btnOffline, btnOnline].forEach(b => {
        if (!b) return;
        b.className = 'px-3.5 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition';
    });

    const activeBtn = filterMode === 'all' ? btnAll : (filterMode === 'offline' ? btnOffline : btnOnline);
    if (activeBtn) {
        activeBtn.className = 'px-3.5 py-2 rounded-xl bg-brand-600 text-white shadow-sm transition';
    }

    renderAttendanceCalendar();
}

function renderAttendanceCalendar() {
    const grid = document.getElementById('attendanceCalendarGrid');
    if (!grid) return;

    const daysInMonth = 31;
    let html = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const isSunday = (day % 7 === 4);
        let status = 'offline-present';
        let label = 'P';
        let colorClass = 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30';

        if (isSunday) {
            status = 'omr-test';
            label = 'OMR';
            colorClass = 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/40 font-black';
        } else if (day === 9 || day === 23) {
            if (currentAttendanceFilter === 'online') {
                status = 'online-present';
                label = 'APP';
                colorClass = 'bg-sky-500/20 text-sky-700 dark:text-sky-300 border-sky-500/30 font-bold';
            } else {
                status = 'absent';
                label = 'ABS';
                colorClass = 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/30';
            }
        } else if (day % 3 === 0) {
            status = 'online-present';
            label = 'P';
            colorClass = 'bg-sky-500/20 text-sky-700 dark:text-sky-300 border-sky-500/30';
        }

        if (currentAttendanceFilter === 'offline' && status === 'online-present') {
            colorClass = 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 border-slate-200 dark:border-slate-800';
            label = '—';
        } else if (currentAttendanceFilter === 'online' && status === 'offline-present') {
            colorClass = 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 border-slate-200 dark:border-slate-800';
            label = '—';
        }

        html += `
            <div onclick="showDayAttendanceDetail(${day}, '${label}')" class="aspect-square rounded-xl sm:rounded-2xl border ${colorClass} p-1 sm:p-2 flex flex-col justify-between cursor-pointer hover:scale-105 transition-all duration-200 shadow-sm" title="October ${day}: ${label}">
                <span class="text-[10px] sm:text-xs font-bold">${day}</span>
                <span class="text-[9px] sm:text-[11px] font-extrabold text-center block">${label}</span>
            </div>
        `;
    }

    grid.innerHTML = html;
}

function showDayAttendanceDetail(day, label) {
    if (typeof showToast === 'function') {
        showToast(`October ${day}, 2026: ${label}`);
    } else {
        alert(`October ${day}, 2026:\nStatus: ${label}\nCampus Gate: Supriya Cinema Road Turnstile #1\nVerified by: Manmit Sir Academic Team`);
    }
}

// H. TEST SCORES SECTION
function renderTestScoresSection() {
    const p = currentPersona;
    const listContainer = document.getElementById('testScoresHistoryList');
    if (!listContainer) return;

    listContainer.innerHTML = p.testScores.map(t => `
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:border-brand-500/50 transition space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                            ${t.date}
                        </span>
                        <span class="text-xs font-bold text-slate-500 dark:text-slate-400">${t.rank}</span>
                    </div>
                    <h4 class="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">${t.name}</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Syllabus: ${t.syllabus}</p>
                </div>
                <div class="text-right flex-shrink-0">
                    <span class="text-2xl font-black text-emerald-600 dark:text-emerald-400">${t.score} / ${t.maxScore}</span>
                    <p class="text-xs font-extrabold text-brand-600 dark:text-brand-400">${t.percentage}% • ${t.grade}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                ${Object.entries(t.subjects).map(([sub, data]) => `
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <div class="flex justify-between items-center text-xs font-bold mb-1">
                            <span class="capitalize text-slate-700 dark:text-slate-300">${sub}</span>
                            <span class="text-emerald-600 dark:text-emerald-400 font-extrabold">${data.score} / ${data.max}</span>
                        </div>
                        <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div class="h-full bg-emerald-500 rounded-full" style="width: ${(data.score / data.max) * 100}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="p-3 rounded-xl bg-brand-500/5 border border-brand-500/20 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <i class="fa-solid fa-quote-left text-brand-500 mt-0.5 text-sm"></i>
                <p><strong>Manmit Sir Review:</strong> "${t.mentorNote}"</p>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
                <span class="text-xs text-slate-500">
                    <i class="fa-solid fa-chart-line text-brand-500 mr-1"></i> Percentile: <strong>${t.percentile}</strong>
                </span>
                <div class="flex items-center gap-2">
                    <button onclick="downloadOmrReport('${t.name}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white transition flex items-center gap-1.5 shadow-sm">
                        <i class="fa-solid fa-file-pdf"></i> Download OMR Scorecard
                    </button>
                    <button onclick="openOmrSolutions('${t.name}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition">
                        Answer Key &amp; Explanations
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// =========================================================================
// 5. ACTION HANDLERS & MODALS
// =========================================================================
function openDigitalIdModal() {
    if (typeof openModal === 'function') {
        openModal('digitalIdModal');
    } else {
        const modal = document.getElementById('digitalIdModal');
        if (modal) modal.classList.remove('hidden');
    }
}

function closeDigitalIdModal() {
    if (typeof closeModal === 'function') {
        closeModal('digitalIdModal');
    } else {
        const modal = document.getElementById('digitalIdModal');
        if (modal) modal.classList.add('hidden');
    }
}

function openBatchSwitchModal(batchId, batchName) {
    const modal = document.getElementById('batchSwitchModal');
    if (!modal) return;
    const nameEl = document.getElementById('modalTargetBatchName');
    const studentNameEl = document.getElementById('modalBatchStudentName');
    const rollEl = document.getElementById('modalBatchStudentRoll');
    if (nameEl) nameEl.textContent = batchName;
    if (studentNameEl) studentNameEl.value = currentPersona.name;
    if (rollEl) rollEl.value = currentPersona.rollNo;

    if (typeof openModal === 'function') {
        openModal('batchSwitchModal');
    } else {
        modal.classList.remove('hidden');
    }
}

function closeBatchSwitchModal() {
    if (typeof closeModal === 'function') {
        closeModal('batchSwitchModal');
    } else {
        const modal = document.getElementById('batchSwitchModal');
        if (modal) modal.classList.add('hidden');
    }
}

function submitBatchSwitchRequest(e) {
    e.preventDefault();
    closeBatchSwitchModal();
    if (typeof showToast === 'function') {
        showToast('Batch admission/switch request sent to Manmit Sir! Academic office will verify within 24h.');
    } else {
        alert('Batch admission/switch request sent to Manmit Sir!\nThe Chanakya Classes Bettiah office will verify your request.');
    }
}

function downloadOmrReport(testName) {
    if (typeof showToast === 'function') {
        showToast(`Generating Official PDF for ${testName}...`);
    } else {
        alert(`Generating Official PDF for ${testName}...\nVerified by Manmit Sir, Chanakya Classes Bettiah.`);
    }
}

function openOmrSolutions(testName) {
    if (typeof showToast === 'function') {
        showToast(`Loading complete answer key and video explanations for ${testName}`);
    } else {
        alert(`Loading complete answer key and video explanations for ${testName}`);
    }
}

function joinLiveClass(subject) {
    if (typeof showToast === 'function') {
        showToast(`Connecting to ${subject} live broadcast stream with Manmit Sir...`);
    } else {
        alert(`Connecting to ${subject} live broadcast stream with Manmit Sir at Supriya Cinema Road Campus!`);
    }
}

function downloadClassNotes(title) {
    if (typeof showToast === 'function') {
        showToast(`Downloading official handwritten lecture notes for: ${title}`);
    } else {
        alert(`Downloading official handwritten lecture notes for: ${title}`);
    }
}

function openDppModal(subject) {
    if (typeof showToast === 'function') {
        showToast(`Opening Daily Practice Problem (DPP) #14 for ${subject}`);
    } else {
        alert(`Opening Daily Practice Problem (DPP) #14 for ${subject}`);
    }
}

function openCourseSyllabusModal(batchName) {
    if (typeof showToast === 'function') {
        showToast(`Loading complete CBSE syllabus tracker for ${batchName}`);
    } else {
        alert(`Loading complete CBSE syllabus tracker for ${batchName}`);
    }
}

function logoutStudent() {
    try {
        localStorage.removeItem('lycemit_student_session');
    } catch (e) {}
    if (window.Clerk && typeof window.Clerk.signOut === 'function') {
        window.Clerk.signOut().then(() => {
            const isSectionPage = window.location.pathname.includes('/sections/');
            window.location.href = isSectionPage ? 'home.html' : 'index.html';
        }).catch(() => {
            const isSectionPage = window.location.pathname.includes('/sections/');
            window.location.href = isSectionPage ? 'home.html' : 'index.html';
        });
        return;
    }
    if (typeof showToast === 'function') {
        showToast('You have been safely signed out.');
    }
    const isSectionPage = window.location.pathname.includes('/sections/');
    window.location.href = isSectionPage ? 'home.html' : 'index.html';
}

function setupDashboardClock() {
    const clockEl = document.getElementById('dashboardLiveClock');
    if (!clockEl) return;
    function update() {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    }
    update();
    setInterval(update, 1000);
}

// Auto-run when DOM ready
document.addEventListener('DOMContentLoaded', initStudentDashboard);
