import caseStudies from './caseStudies';

export const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Ali-Hammadi', icon: 'fa-brands fa-github' },
    { label: 'WhatsApp', href: 'https://wa.me/963937472856', icon: 'fa-brands fa-whatsapp' },
    { label: 'Telegram', href: 'https://t.me/aliehammadi', icon: 'fa-brands fa-telegram' },
    { label: 'Email', href: 'mailto:hamadea524@gmail.com', icon: 'fa-solid fa-envelope' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aliehammadi', icon: 'fa-brands fa-linkedin' },
];

export const projectCatalog = {
    telmi: {
        name: 'Telmi',
        cover: '/images/telmi/mockup_telmi.jpeg',
        caseStudy: caseStudies.telmi,
        tags: ['Flutter', 'Wear OS', 'Firebase', 'WebRTC', 'Clean Architecture', 'BLoC/Cubit'],
        links: { github: '', store: '', demo: '', video: '' },
        summary: {
            en: 'A connected communication and support ecosystem for children with ASD and speech delays: a parent mobile app paired with a child Wear OS smartwatch app, offering visual AAC communication, live location, routines, and secure video calls.',
            ar: 'منظومة تواصل ودعم متصلة للأطفال ضمن طيف التوحد وتأخر الكلام: تطبيق للوالدين وتطبيق للطفل على ساعة ذكية بنظام Wear OS، مع تواصل بصري AAC وتتبع للموقع وروتين ومكالمات فيديو آمنة.',
        },
        gallery: [
            '/images/telmi/photo_1_2026-10-01_12-00-45.jpeg',
            '/images/telmi/photo_2_2026-10-01_12-00-45.jpeg',
            '/images/telmi/photo_3_2026-10-01_12-00-45.jpeg',
            '/images/telmi/photo_4_2026-10-01_12-00-45.jpeg',
            '/images/telmi/photo_5_2026-10-01_12-00-45.jpeg',
            '/images/telmi/photo_6_2026-10-01_12-00-45.jpeg',
        ],
    },
    tfouki: {
        name: 'Tfouki',
        cover: '/images/tfouki/mockup_tfouki.jpeg',
        caseStudy: caseStudies.tfouki,
        tags: ['Flutter', 'Django REST', 'PostgreSQL', 'Cubit', 'Clean Architecture'],
        links: { github: '', store: '', demo: '', video: '' },
        summary: {
            en: 'A mobile learning and examination platform for schools: private video lessons, timed multiple-choice exams organized by subject, term, and chapter, and student progress tracking, built with Flutter and Django REST.',
            ar: 'منصة موبايل تعليمية وامتحانية للمدارس: دروس فيديو خاصة، واختبارات اختيار من متعدد بمؤقت مصنفة حسب المادة والفصل والجزء، وتتبع لتقدم الطالب، مبنية بـ Flutter وDjango REST.',
        },
        gallery: [
            '/images/tfouki/tafawwoq-educational-app-1.jpeg',
            '/images/tfouki/tafawwoq-educational-app-2.jpeg',
            '/images/tfouki/tafawwoq-educational-app-3.jpeg',
            '/images/tfouki/tafawwoq-educational-app-4.jpeg',
            '/images/tfouki/tafawwoq-educational-app-5.jpeg',
            '/images/tfouki/tafawwoq-educational-app-6.jpeg',
        ],
    },
    afiete: {
        name: 'Afiete',
        cover: '/images/afiete/afiete_mockup.jpeg',
        caseStudy: caseStudies.afiete,
        tags: ['Flutter', 'Django REST', 'PostgreSQL', 'Cubit', 'Clean Architecture'],
        links: { github: '', store: '', demo: '', video: '' },
        summary: {
            en: 'A digital mental-health platform connecting users with psychological specialists, with appointment booking, psychological assessments, digital records, communication, and push notifications, built with Flutter and Django REST.',
            ar: 'منصة رقمية للصحة النفسية تربط المستخدمين بأخصائيين نفسيين، مع حجز المواعيد والتقييمات النفسية والسجلات الرقمية والتواصل والإشعارات الفورية، مبنية بـ Flutter وDjango REST.',
        },
        gallery: [
            '/images/afiete/photo_1_2026-10-01_12-23-53.jpeg',
            '/images/afiete/photo_2_2026-10-01_12-23-53.jpeg',
            '/images/afiete/photo_3_2026-10-01_12-23-53.jpeg',
            '/images/afiete/photo_4_2026-10-01_12-23-53.jpeg',
            '/images/afiete/photo_5_2026-10-01_12-23-53.jpeg',
            '/images/afiete/photo_6_2026-10-01_12-23-53.jpeg',
        ],
    },
};

export const projectList = [
    { id: 'telmi', title: 'Telmi', cover: '/images/telmi/mockup_telmi.jpeg', short: { en: 'Parent app + child Wear OS smartwatch app supporting children with ASD and speech delays.', ar: 'تطبيق للوالدين وتطبيق للطفل على ساعة Wear OS لدعم الأطفال ضمن طيف التوحد وتأخر الكلام.' } },
    { id: 'tfouki', title: 'Tfouki', cover: '/images/tfouki/mockup_tfouki.jpeg', short: { en: 'School learning platform with private video lessons, timed MCQ exams, and progress tracking.', ar: 'منصة تعليمية للمدارس بدروس فيديو خاصة واختبارات MCQ مؤقتة وتتبع للتقدم.' } },
    { id: 'afiete', title: 'Afiete', cover: '/images/afiete/afiete_mockup.jpeg', short: { en: 'Mental-health platform connecting users with specialists: appointments, assessments, and digital records.', ar: 'منصة صحة نفسية تربط المستخدمين بأخصائيين: مواعيد وتقييمات وسجلات رقمية.' } },
];

export const skillGroups = ( text ) => [
    { title: text.skill_cat_1, items: [ 'Flutter', 'Dart', 'BLoC / Cubit', 'GetX' ] },
    { title: text.skill_cat_2, items: [ 'Django', 'Python', 'REST APIs', 'Firebase', 'SQLite' ] },
    { title: text.skill_cat_3, items: [ 'Clean Architecture', 'Git / GitHub', 'Postman', 'Responsive UI' ] },
];
