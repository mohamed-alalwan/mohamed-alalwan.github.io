export type Project = {
  id: string;
  title: string;
  year: string;
  category: 'Professional' | 'Community' | 'Earlier work';
  type: string;
  organization: string;
  summary: string;
  contribution: string;
  stack: string[];
  links?: { label: string; url: string }[];
  caseStudy?: string;
  featured?: boolean;
  monogram: string;
};

// One static catalog replaces the old Firebase/IndexedDB portfolio database.
// Earlier-project descriptions are adapted from Mohamed's existing portfolio.
export const projects: Project[] = [
  {
    id: 'penny-smart-scan', title: 'AI Smart Scan', year: '2026',
    category: 'Professional', type: 'AI / full-stack', organization: 'penny.',
    summary: 'Invoice extraction and mismatch review inside a live procurement product.',
    contribution: 'I shipped AI Smart Scan for the Bill module. It extracts values from uploaded invoices and helps users check them against bill data already in the system. I worked across the Angular interface, backend APIs and Python AI service.',
    stack: ['Angular', 'NestJS', 'Python', 'REST APIs', 'Document AI'], caseStudy: '/work/ai-smart-scan/', featured: true, monogram: 'AI',
  },
  {
    id: 'penny-offer-extraction', title: 'Vendor-offer extraction', year: '2026',
    category: 'Professional', type: 'AI / product workflow', organization: 'penny.',
    summary: 'Extracting offer details from uploaded documents for RFQ responses.',
    contribution: 'I built document extraction for RFQ and vendor-offer submissions. Sellers can upload an offer, review the extracted information and use it to fill in the response.',
    stack: ['Angular', 'NestJS', 'Python', 'REST APIs', 'Document extraction'], caseStudy: '/work/vendor-offer-extraction/', monogram: 'RFQ',
  },
  {
    id: 'payment-validation', title: 'Payment validation automation', year: 'KPMG tenure',
    category: 'Professional', type: 'AI / business process', organization: 'KPMG Bahrain',
    summary: 'Document extraction and payment checks with less manual monitoring.',
    contribution: 'I helped deliver the production payment-validation solution as part of the KPMG team. The solution reached approximately 90% extraction accuracy and reduced manual monitoring workload by approximately 40%.',
    stack: ['Document AI', 'Azure', 'Workflow design', 'Integration'], caseStudy: '/work/payment-validation/', featured: true, monogram: 'K',
  },
  {
    id: 'diabetes-awareness', title: 'Diabetes Awareness App', year: '2024–2025',
    category: 'Community', type: 'Mobile / AI', organization: 'Bahrain Diabetes Society',
    summary: 'A multilingual app for diabetes education, tracking and information.',
    contribution: 'I contributed to the volunteer app’s development and user experience. It includes educational resources, blood-sugar tracking, emergency guidance and an AI assistant for general information.',
    stack: ['Ionic Angular', 'Cloudflare Workers', 'Firebase', 'Figma'], caseStudy: '/work/diabetes-awareness/', featured: true, monogram: 'BDS',
    links: [{ label: 'Project post', url: 'https://www.linkedin.com/posts/mohamed-alalwan_digitalhealth-techforgood-volunteerimpact-activity-7344684569264033792-qvgz' }],
  },
  {
    id: 'mtaem', title: 'Mtaem Website', year: '2023', category: 'Earlier work', type: 'Marketplace', organization: 'Al Amthal Group',
    summary: 'Food-ordering marketplace for browsing restaurants and menus.',
    contribution: 'I designed and implemented front-end work, mainly the home page and menu experience, with attention to responsiveness.',
    stack: ['Ionic', 'TypeScript', 'SCSS', 'Bootstrap'], monogram: 'M',
  },
  {
    id: 'aqaraats', title: 'Aqaraats Real-Estate', year: '2023', category: 'Earlier work', type: 'Web / mobile', organization: 'Al Amthal Group',
    summary: 'A Bahrain real-estate website and early standalone-app design work.',
    contribution: 'I worked on Angular front-end fixes, responsive behavior and initial Ionic app design.',
    stack: ['Angular', 'Ionic', 'TypeScript', 'SCSS'], monogram: 'A',
    links: [{ label: 'Website', url: 'https://www.aqaraats.com' }],
  },
  {
    id: 'whatsapp-service', title: 'WhatsApp Messaging Service', year: '2023', category: 'Earlier work', type: 'Messaging platform', organization: 'Al Amthal Group',
    summary: 'A team-built messaging service with automation and bot features.',
    contribution: 'I worked alongside the development team on an Ionic/Angular interface and Node.js-backed service using WhatsApp integration.',
    stack: ['Ionic', 'Angular', 'Node.js', 'MSSQL', 'WhatsApp API'], monogram: 'WA',
  },
  {
    id: 'mallats', title: 'Mallats — app & website', year: '2023', category: 'Earlier work', type: 'E-commerce', organization: 'Al Amthal Group',
    summary: 'A shopping app and website with saved and comparison lists.',
    contribution: 'I worked on favourites, custom and comparison lists, responsive layouts and how product images loaded.',
    stack: ['Angular', 'Ionic', 'TypeScript', 'SCSS', 'MSSQL'], monogram: 'ML',
    links: [{ label: 'Website', url: 'https://www.mallats.com' }, { label: 'iOS app', url: 'https://apps.apple.com/bh/app/mallats/id1521858678' }],
  },
  {
    id: 'cms-builder', title: 'CMS Website Builder', year: '2023', category: 'Earlier work', type: 'Full-stack web', organization: 'Independent project',
    summary: 'A template-based site editor with a React front end and Express API.',
    contribution: 'I built a content-management prototype where users could select and adapt website templates.',
    stack: ['React', 'Express', 'MongoDB', 'Firebase Auth'], monogram: 'CMS',
    links: [{ label: 'Repository', url: 'https://github.com/mohamed-alalwan/CMS_BE' }],
  },
  {
    id: 'codehub', title: 'CodeHub', year: '2023', category: 'Earlier work', type: 'Community web app', organization: 'Independent project',
    summary: 'A coding questions-and-answers forum inspired by developer communities.',
    contribution: 'I built a Django/PostgreSQL application for posting questions and sharing programming answers.',
    stack: ['Django', 'PostgreSQL', 'Python', 'JavaScript'], monogram: '</>',
    links: [{ label: 'Repository', url: 'https://github.com/mohamed-alalwan/codehub' }],
  },
  {
    id: 'breakout', title: 'Crazy Break Out Game', year: '2023', category: 'Earlier work', type: 'Browser game', organization: 'Independent project',
    summary: 'A browser game based on Breakout, with rotation in the gameplay.',
    contribution: 'I designed and built this small browser game in vanilla web technologies.',
    stack: ['JavaScript', 'HTML', 'CSS'], monogram: 'BO',
    links: [{ label: 'Repository', url: 'https://github.com/mohamed-alalwan/breakout-game' }, { label: 'Play game', url: 'https://mohamed-alalwan.github.io/breakout-game/' }],
  },
  {
    id: 'innovation-cafe', title: 'Innovation Cafe', year: '2023', category: 'Earlier work', type: 'Ordering website', organization: 'Independent project',
    summary: 'A cafe ordering site with menus, cart and role-based access.',
    contribution: 'I built menu browsing, cart flows and role-based access for a cafe website.',
    stack: ['Express', 'EJS', 'Mongoose', 'JavaScript'], monogram: 'IC',
    links: [{ label: 'Repository', url: 'https://github.com/mohamed-alalwan/innovation-cafe' }],
  },
  {
    id: 'seyaqti', title: 'Seyaqti App', year: '2023', category: 'Earlier work', type: 'Mobile app', organization: 'Bahrain Polytechnic / iGA',
    summary: 'Driving-school scheduling and communication for instructors and trainees.',
    contribution: 'I developed this sponsored college project with lesson scheduling, chat, reviews and search.',
    stack: ['Flutter', 'Firebase', 'Figma'], monogram: 'SY',
    links: [{ label: 'Repository', url: 'https://github.com/mohamed-alalwan/seyaqti-app' }],
  },
  {
    id: 'orient', title: 'Orient Event Organizer', year: '2022', category: 'Earlier work', type: 'Booking website', organization: 'Bahrain Polytechnic',
    summary: 'An event-management site for rooms, halls and services.',
    contribution: 'I made this booking-oriented website as part of my studies.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML'], monogram: 'OE',
    links: [{ label: 'Repository', url: 'https://github.com/mohamed-alalwan/orient-event-organizer' }],
  },
  {
    id: 'impending-doom', title: 'Impending Doom', year: '2022', category: 'Earlier work', type: 'Unity game', organization: 'Bahrain Polytechnic',
    summary: 'A third-person survival game built as a senior project.',
    contribution: 'I developed the Unity game, with rounds of enemies and survival mechanics.',
    stack: ['Unity', 'C#', 'Game design'], monogram: 'ID',
    links: [{ label: 'Gameplay files', url: 'https://drive.google.com/drive/folders/11X-zDj3HA08pVuhWWFM4PX7xw-t7stiM?usp=share_link' }],
  },
  {
    id: 'speedster', title: 'Speedster', year: '2021', category: 'Earlier work', type: 'Unity game', organization: 'Bahrain Polytechnic',
    summary: 'A multi-level runner game about navigating obstacles to the finish.',
    contribution: 'I developed this Unity game as part of my studies.',
    stack: ['Unity', 'C#'], monogram: 'SP',
    links: [{ label: 'Gameplay files', url: 'https://drive.google.com/drive/folders/12Cli3Sy1RsG5aSji6kdfkSnJ3sSoLUuL?usp=share_link' }],
  },
  {
    id: 'task-scheduler', title: 'Task Scheduler App', year: '2021', category: 'Earlier work', type: 'iOS app', organization: 'Bahrain Polytechnic',
    summary: 'A task organizer with categories and reminders.',
    contribution: 'I developed this study project with teammate Yaqoob Husain.',
    stack: ['Swift', 'Xcode', 'Firebase', 'Adobe XD'], monogram: 'TS',
    links: [{ label: 'Repository', url: 'https://github.com/mohamed-alalwan/taskscheduler' }, { label: 'Demo video', url: 'https://youtu.be/ssiNwAAJggk' }],
  },
];
