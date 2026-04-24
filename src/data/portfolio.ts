/* ─── Portfolio Content Data ─────────────────────────────────────
   Source of truth: Md. Zubayer Ahmad Shibly's CV.
   Sections not explicitly covered by the CV (e.g. Collaborators) use
   demo content and will be refined later.
   ──────────────────────────────────────────────────────────────── */

export const personalInfo = {
  nameFirst:  'Md. Zubayer Ahmad',
  nameLast:   'Shibly',
  tagline:    'AI Researcher · CSE Undergraduate, Southeast University',
  description:
    'Computer Science & Engineering student focused on Deep Learning, Transformers, Explainable AI, and data-driven modeling — applying applied AI to healthcare, network security, and decision-support systems.',
  email:      'zubayer.shibly.cse@gmail.com',
  phone:      '+880 1845250202',
  location:   'Narayanganj, Bangladesh',
  cvUrl:      '/portfolio-assets/pdf/CV.pdf',
  /* ── Video config ────────────────────────────────────────────── */
  videoUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
  videoLabel:  'Introduction Video',
  videoPoster: '',
  statusTag:  'Open for PhD / Graduate RA Positions — 2026',
  socials: {
    scholar:  'https://scholar.google.com/',
    github:   'https://github.com/iamshibly',
    linkedin: 'https://www.linkedin.com/in/zubayer-shibly/',
  },
} as const;

/* ─── Hero Stats ─────────────────────────────────────────────── */
export const heroStats: { target: number; label: string }[] = [
  { target: 3,  label: 'Accepted Papers' },
  { target: 7,  label: 'Under Review' },
  { target: 3,  label: 'Projects' },
  { target: 1,  label: 'Rank in CSE' },
];

/* ─── About ──────────────────────────────────────────────────── */
export const aboutBio: string[] = [
  "I am a Computer Science & Engineering student at Southeast University, Dhaka, with a CGPA of 4.00/4.00 and the departmental top rank in CSE.",
  "My research focuses on Deep Learning, Transformers, Explainable AI, and feature engineering — bridging theoretical rigor with real-world impact.",
  "I have contributed to applied AI projects across healthcare (ovarian cancer, PCOS, hepatitis-B, brain tumor MRI), network security (federated intrusion detection), and decision-support systems (loan approval, obesity prediction).",
  "I collaborate internationally with Dr. Maybin Muyeba (University of Salford, UK) and Rajon Bardhan (Augusta University, USA) on federated learning, evolutionary feature selection, and explainable modeling.",
  "Inspired by the principle of “Know Thyself,” I value self-discovery, continuous growth, and the craft of doing research that is both rigorous and useful.",
  "Beyond the lab, I serve as Director of Project Management at Roots of Rise and contribute to community learning initiatives as an Aspire Leaders Program alumnus.",
  "I am actively seeking PhD opportunities to extend this work in trustworthy, explainable, and federated AI for healthcare.",
];

export const researchInterests: string[] = [
  'Explainable AI (XAI)',
  'Deep Learning',
  'Transformers',
  'Federated Learning',
  'Feature Selection',
  'Medical Image Analysis',
  'Evolutionary Optimization',
  'Tabular Representation Learning',
  'Intrusion Detection',
  'Trustworthy ML',
  'AI Agents',
];

export const hobbies: string[] = [
  'Debating', 'Reading', 'Writing', 'Volunteering',
];

/* ─── Education ──────────────────────────────────────────────── */
export interface IeltsBreakdown {
  overall: number;
  listening: number;
  reading: number;
  writing: number;
  speaking: number;
}

export interface Education {
  year: string;
  degree: string;
  institution: string;
  cgpa: string;
  cgpaRecent?: string;
  ielts?: IeltsBreakdown;
}

export const education: Education[] = [
  {
    year:        'Jul 2022 – Present',
    degree:      'B.Sc. in Computer Science and Engineering',
    institution: 'Southeast University (SEU), Tejgaon, Dhaka',
    cgpa:        '4.00 / 4.00',
    cgpaRecent:  'Ranked 1st in CSE Department · Full Tuition Waiver Scholarship',
  },
];

/* ─── Research Positions ─────────────────────────────────────── */
export interface ResearchPosition {
  date:       string;
  status?:    string;
  title:      string;
  org:        string;
  supervisor: string;
  faculty:    string;
  topics:     string[];
  variant:    'cyan' | 'gold';
}

export const researchPositions: ResearchPosition[] = [
  {
    date:       '2026 – Present',
    status:     'Active',
    title:      'Collaborative Researcher',
    org:        'University of Salford, United Kingdom',
    supervisor: 'Supervised by Dr. Maybin Muyeba',
    faculty:    'School of Science, Engineering & Environment',
    variant:    'cyan',
    topics: [
      'Developed an explainable federated intrusion detection framework based on Empirical-Bernstein certified Bandit-KL mixing with tree stacking — accepted at IEEE FUZZ 2026 (Netherlands, B-core).',
      'Designed FedBridge++, a privacy-preserving federated self-supervision framework with interpretable transformers for tabular loan approval — accepted at SERA 2026 (USA, C-core).',
    ],
  },
  {
    date:       '2025 – Early 2026',
    status:     'Completed',
    title:      'Collaborative Researcher',
    org:        'Augusta University, USA',
    supervisor: 'Supervised by Rajon Bardhan',
    faculty:    'School of Computer and Cyber Sciences',
    variant:    'gold',
    topics: [
      'UADGE-FS: Uncertainty-Aware, Dominance-Gated Evolutionary Feature Selection — submitted to ICDM 2026 (China, A*).',
      'TRUST-GFS: Tie-safe Reliability and Uplift Screening for Target-guided Genetic Feature Selection — submitted to NeurIPS 2026 (A*).',
    ],
  },
];

/* ─── Publications ───────────────────────────────────────────── */
export type PubType = 'Journal' | 'International Conference' | 'Domestic Conference' | 'Under Review';

export interface Publication {
  num:     number;
  title:   string;
  authors: string;
  venue:   string;
  year:    number;
  type:    PubType;
  link?:   string;
  status:  string;
}

export const publications: Publication[] = [
  {
    num:     1,
    title:   'Leveraging Multi-Algorithmic Feature Selection and Ensemble Machine Learning for Accurate Detection of Polycystic Ovarian Syndrome',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   'IEEE ICCCNT 2025, Indore, India',
    year:    2025,
    type:    'International Conference',
    status:  'Accepted (Forthcoming)',
  },
  {
    num:     2,
    title:   'A Novel Hybrid Feature Selection and Ensemble Learning Approach for Mortality Risk Classification in Hepatitis B Patients: An Explainable AI Study',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   "ICCIT 2025, Cox's Bazar, Bangladesh",
    year:    2025,
    type:    'International Conference',
    status:  'Accepted (Forthcoming)',
  },
  {
    num:     3,
    title:   'Explainable AI-Driven Ensemble Learning Framework for PCOS Diagnosis Using AIM-PDCF and Quantum-GraphRFE Feature Selection',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   "ICCIT 2025, Cox's Bazar, Bangladesh",
    year:    2025,
    type:    'International Conference',
    status:  'Accepted (Forthcoming)',
  },
  {
    num:     4,
    title:   'Federated Explainable Intrusion Detection via Empirical-Bernstein Certified Bandit-KL Mixing with Tree Stacking',
    authors: 'Md. Zubayer Ahmad Shibly, Dr. Maybin Muyeba, et al.',
    venue:   'IEEE FUZZ 2026, Netherlands — B-core',
    year:    2026,
    type:    'International Conference',
    status:  'Accepted',
  },
  {
    num:     5,
    title:   'FedBridge++: Privacy-Preserving Federated Self-Supervision with Interpretable Transformers for Tabular Loan Approval',
    authors: 'Md. Zubayer Ahmad Shibly, Dr. Maybin Muyeba, et al.',
    venue:   'SERA 2026, USA — C-core',
    year:    2026,
    type:    'International Conference',
    status:  'Accepted',
  },
  {
    num:     6,
    title:   'Adaptive Biomarker Categorization with DiCAT and TCCA Feature Selection for Robust, Explainable Early Ovarian Cancer Detection',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   'IRAI 2026, Melbourne, Australia',
    year:    2026,
    type:    'Under Review',
    status:  'Under Review',
  },
  {
    num:     7,
    title:   'An Explainable Stacking Ensemble Framework with Disagreement-Aware Feature Selection for Loan Approval Prediction',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   'TENSYMP 2026, Penang, Malaysia',
    year:    2026,
    type:    'Under Review',
    status:  'Under Review',
  },
  {
    num:     8,
    title:   'An Interpretable Framework for Early Lung Cancer Prediction Using Graph Fusion and Role Stability for Robust Feature Selection with TabFGT',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   'AVSS 2026, Lecce, Italy',
    year:    2026,
    type:    'Under Review',
    status:  'Under Review',
  },
  {
    num:     9,
    title:   'Q-SEAL: An Explainable Transformer-Based Meta-Ensemble Model for Ovarian Cancer Prediction and Deployment Evaluation',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   'Journal of Pathology Informatics',
    year:    2026,
    type:    'Journal',
    status:  'Under Review',
  },
  {
    num:     10,
    title:   'Image Dataset for Classification and Recognition with Nutritional Values of Small Indigenous Freshwater River Fish from Bangladesh',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   'Data in Brief, Elsevier',
    year:    2026,
    type:    'Journal',
    status:  'Under Review',
  },
  {
    num:     11,
    title:   'Explainable Ovarian Cancer Diagnosis: Fusion-Based RFE-SHAP and Quantum-Inspired ANN-QUBO Feature Selection with Two-Tier Evaluation',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   'Digital Health (SAGE)',
    year:    2026,
    type:    'Journal',
    status:  'Under Review',
  },
  {
    num:     12,
    title:   'AIDPCP: An Adaptive Intelligent Preprocessing and Clustering Pipeline for Obesity Prediction with Explainable AI',
    authors: 'Md. Zubayer Ahmad Shibly, et al.',
    venue:   'IET Software (Wiley)',
    year:    2026,
    type:    'Journal',
    status:  'Under Review',
  },
  {
    num:     13,
    title:   'FedGCF-Net: Federated Genetically-Optimized Contrast-Enhanced Fusion Network for Brain Tumor Classification',
    authors: 'Md. Zubayer Ahmad Shibly',
    venue:   'The Journal of Engineering',
    year:    2026,
    type:    'Journal',
    status:  'Under Review (Undergraduate Thesis)',
  },
];

/* ─── Projects ───────────────────────────────────────────────── */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'MultiDx Clinical AI — Multi-Disease Prediction System',
    description: 'Full-stack clinical AI platform with an end-to-end modeling-to-deployment workflow. Integrates four disease-specific models (Ovarian Cancer, PCOS, Hepatitis B, Brain Tumor MRI) and ships explainability modules using SHAP and LIME with PDP, ICE, and ALE analytical views.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'scikit-learn', 'Next.js', 'TypeScript', 'SHAP', 'LIME'],
    link: 'https://github.com/iamshibly',
    demo: '#',
  },
  {
    title: 'AniMaze — AI-Powered Anime & Manga Platform',
    description: 'Full-stack platform with a responsive interface, structured navigation, and user-focused design. Features AI-powered quiz generation, XP-based progression, leaderboards, typo-tolerant smart search, role-based dashboards, external API integrations, and subscription badge logic.',
    tags: ['TypeScript', 'MySQL', 'Supabase', 'Next.js'],
    link: 'https://github.com/iamshibly',
  },
  {
    title: 'Arduino Home Security & Fire/Smoke Detection',
    description: 'Keypad + LCD door security system with servo-controlled locking and timed auto re-lock. Bluetooth-based mobile control for gate access, pump, and alarm. Fire/smoke detection automatically triggers alarms and activates the water pump via relay.',
    tags: ['Arduino Uno', 'HC-05 Bluetooth', 'MQ-2 Sensor', 'Flame Sensor', 'Servo', 'Relay', 'Keypad'],
    link: 'https://github.com/iamshibly',
  },
];

/* ─── Collaborators ──────────────────────────────────────────── */
export interface Collaborator {
  name: string;
  title: string;
  institution: string;
  image: string;
}

export const collaborators: Collaborator[] = [
  {
    name:        'Prof. Mo Saraee',
    title:       'Professor of Data Science',
    institution: 'School of Science, Engineering & Environment, University of Salford, UK',
    image:       '/collaborators/mo-saraee.jpg',
  },
  {
    name:        'Dr. Maybin Muyeba',
    title:       'Lecturer in Data Science',
    institution: 'School of Science, Engineering & Environment, University of Salford, UK',
    image:       '/collaborators/maybin-muyeba.jpg',
  },
  {
    name:        'Rajon Bardhan',
    title:       'Ph.D. Student — Digital Forensics & Machine Learning',
    institution: 'Augusta University, USA',
    image:       '/collaborators/rajon-bardhan.jpg',
  },
  {
    name:        'Al-Amain',
    title:       'Research Assistant',
    institution: 'Dept. of Computer Science, Islamic University of Technology (IUT)',
    image:       '/collaborators/al-amain.jpg',
  },
  {
    name:        'Mirza Nadim Saad',
    title:       'Research Assistant',
    institution: 'Islamic University of Technology (IUT)',
    image:       '/collaborators/mirza-nadim-saad.jpg',
  },
  {
    name:        'Md. Jahidul Islam',
    title:       'Undergraduate Researcher',
    institution: 'Dept. of CSE, Southeast University (SEU)',
    image:       '/collaborators/jahidul-islam.jpg',
  },
];

/* ─── Experience ─────────────────────────────────────────────── */
export interface Experience {
  date:        string;
  role:        string;
  org:         string;
  description: string;
}

export const experience: Experience[] = [
  {
    date:        'Mar 2026 – Present',
    role:        'AI Agent Developer Intern',
    org:         'NeuroCrack Technologies',
    description: 'Building intelligent AI agent systems and production workflows. Offer letter on record.',
  },
  {
    date:        'Sep 2025 – Present',
    role:        'Director of Project Management (Volunteer)',
    org:         'Roots of Rise — NGO',
    description: 'Leading cross-functional volunteer teams on education and social-impact projects; coordinating program delivery, timelines, and reporting.',
  },
  {
    date:        'Mar 2025 – May 2025',
    role:        'Campus Ambassador Intern',
    org:         'IMUN (International Model United Nations)',
    description: 'Represented IMUN on campus, organized conference outreach, and earned certificate + offer letter + conference participation.',
  },
  {
    date:        'Feb 2024 – Apr 2024',
    role:        'Project Manager (Part-time)',
    org:         'Laga Tour',
    description: 'Planned and delivered operational projects, coordinated vendors, and owned client communication and delivery timelines.',
  },
];

/* ─── Skills ─────────────────────────────────────────────────── */
export interface SkillBar {
  name:  string;
  level: number;
  tags:  string[];
}

export interface SkillGroup {
  groupTitle: string;
  skills:     SkillBar[];
}

export const skillGroups: SkillGroup[] = [
  {
    groupTitle: 'AI / ML Research',
    skills: [
      { name: 'Deep Learning & Transformers', level: 92, tags: ['PyTorch', 'Transformers', 'Attention', 'CNNs'] },
      { name: 'Explainable AI',               level: 90, tags: ['SHAP', 'LIME', 'PDP', 'ICE', 'ALE'] },
      { name: 'Feature Engineering & Selection', level: 90, tags: ['Genetic FS', 'RFE', 'QUBO', 'Stability'] },
      { name: 'Federated & Privacy-Preserving ML', level: 82, tags: ['FedAvg', 'Self-Supervision', 'Interpretable'] },
    ],
  },
  {
    groupTitle: 'Data & Engineering',
    skills: [
      { name: 'Data Analysis & Statistics',   level: 88, tags: ['NumPy', 'Pandas', 'Experimental Design'] },
      { name: 'Programming',                  level: 85, tags: ['Python', 'C', 'Java', 'Dart', 'Flutter'] },
      { name: 'Tools & Workflows',            level: 85, tags: ['scikit-learn', 'Matplotlib', 'Jupyter', 'Colab', 'Git', 'Overleaf'] },
      { name: 'Databases & Productivity',     level: 75, tags: ['MySQL', 'MongoDB', 'LaTeX', 'Excel'] },
    ],
  },
];

/* ─── Certifications ─────────────────────────────────────────── */
export interface Certification {
  name:   string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: 'Advanced Research in Machine Learning & XAI',                 issuer: 'Neural Research — Jun 2025' },
  { name: 'Python Functions, Files, and Dictionaries',                   issuer: 'University of Michigan (Coursera) — Mar 2025' },
  { name: 'Foundations of Project Management',                           issuer: 'Coursera — Jun 2024' },
  { name: 'Cybersecurity Foundations',                                   issuer: 'LinkedIn Learning — Feb 2024' },
  { name: 'ENGL210: Technical Writing',                                  issuer: 'Saylor Academy — Feb 2024' },
  { name: 'Webinar on Programming Contest & Research',                   issuer: 'IEEE Computer Society, SEU SBC — Dec 2025' },
  { name: 'LaTeX Unlocked: The Research Writing Workshop',               issuer: 'IEEE Computer Society, SEU SBC — Dec 2025' },
];

/* ─── Awards ─────────────────────────────────────────────────── */
export interface Award {
  icon: 'trophy' | 'medal' | 'graduation' | 'star' | 'sparkles';
  name: string;
  org:  string;
  year: number;
}

export const awards: Award[] = [
  { icon: 'medal',      name: 'Ranked 1st in CSE Department',                    org: 'Southeast University',              year: 2024 },
  { icon: 'graduation', name: 'Full Tuition Waiver Scholarship (4 years)',       org: 'Southeast University',              year: 2022 },
  { icon: 'star',       name: 'Aspire Institute Awards — Leadership Recognition', org: 'Aspire Leaders Program 2025',       year: 2025 },
  { icon: 'trophy',     name: 'Debate Competition Winner (Team President)',      org: 'FICC — Farees International Career Counseling', year: 2020 },
  { icon: 'sparkles',   name: 'Volunteerism for Social Change — Trained',        org: 'BYLCx',                              year: 2024 },
];

/* ─── News ───────────────────────────────────────────────────── */
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  image: string;
  featured: boolean;
}

export const news: NewsItem[] = [
  {
    id: '1',
    date: 'March 2026',
    title: 'Joined NeuroCrack Technologies as AI Agent Developer Intern',
    summary: 'Started working on production-grade AI agent systems at NeuroCrack Technologies. Excited to apply research-driven thinking to real-world agentic workflows.',
    image: 'https://picsum.photos/seed/news-neurocrack/800/450',
    featured: true,
  },
  {
    id: '2',
    date: 'February 2026',
    title: 'Two Papers Accepted at IEEE FUZZ 2026 and SERA 2026',
    summary: 'Our collaborative work with Dr. Maybin Muyeba on federated explainable intrusion detection (IEEE FUZZ 2026, Netherlands) and FedBridge++ for tabular loan approval (SERA 2026, USA) has been accepted.',
    image: 'https://picsum.photos/seed/news-fuzz/800/450',
    featured: false,
  },
  {
    id: '3',
    date: 'January 2026',
    title: 'Three Papers Submitted to A* Venues',
    summary: 'Submitted UADGE-FS and TRUST-GFS (collaboration with Rajon Bardhan, Augusta University) to ICDM 2026 and NeurIPS 2026 — two A* venues — on uncertainty-aware and reliability-aware evolutionary feature selection.',
    image: 'https://picsum.photos/seed/news-icdm/800/450',
    featured: false,
  },
  {
    id: '4',
    date: 'December 2025',
    title: 'Completed LaTeX Research Writing Workshop',
    summary: 'Attended "LaTeX Unlocked: The Research Writing Workshop" organized by the IEEE Computer Society, SEU Student Branch Chapter.',
    image: 'https://picsum.photos/seed/news-latex/800/450',
    featured: false,
  },
  {
    id: '5',
    date: 'November 2025',
    title: 'Three Papers Accepted at ICCCNT 2025 and ICCIT 2025',
    summary: 'Our work on multi-algorithmic feature selection for PCOS (ICCCNT 2025, India) and hybrid ensemble + XAI approaches for Hepatitis-B mortality risk and PCOS diagnosis (ICCIT 2025, Bangladesh) has been accepted.',
    image: 'https://picsum.photos/seed/news-icccnt/800/450',
    featured: false,
  },
  {
    id: '6',
    date: 'September 2025',
    title: 'Appointed Director of Project Management at Roots of Rise',
    summary: 'Honored to take on the role of Director of Project Management at Roots of Rise, an NGO focused on education and community impact.',
    image: 'https://picsum.photos/seed/news-roots/800/450',
    featured: false,
  },
  {
    id: '7',
    date: 'June 2025',
    title: 'Aspire Institute Awards — Leadership Recognition',
    summary: 'Recognized at the Aspire Institute Awards through the Aspire Leaders Program 2025 for leadership and community contribution.',
    image: 'https://picsum.photos/seed/news-aspire/800/450',
    featured: false,
  },
  {
    id: '8',
    date: 'May 2025',
    title: 'Completed IMUN Campus Ambassador Internship',
    summary: 'Wrapped up my Campus Ambassador Internship with the International Model United Nations (IMUN), earning certification, an offer letter, and conference participation.',
    image: 'https://picsum.photos/seed/news-imun/800/450',
    featured: false,
  },
  {
    id: '9',
    date: 'March 2025',
    title: 'Advanced Research in ML & XAI — Certified',
    summary: 'Completed certification in Advanced Research in Machine Learning & Explainable AI from Neural Research.',
    image: 'https://picsum.photos/seed/news-xai/800/450',
    featured: false,
  },
  {
    id: '10',
    date: 'July 2022',
    title: 'Started B.Sc. in CSE at Southeast University',
    summary: 'Began the B.Sc. in Computer Science and Engineering at Southeast University with a full tuition waiver scholarship — currently holding a CGPA of 4.00/4.00.',
    image: 'https://picsum.photos/seed/news-seu/800/450',
    featured: false,
  },
];

/* ─── References / Contact ───────────────────────────────────── */
export interface Reference {
  name:        string;
  title:       string;
  institution: string;
  email:       string;
  image:       string;
  note?:       string;
}

export const references: Reference[] = [
  {
    name:        'Khandaker Mohammad Mohi Uddin',
    title:       'Assistant Professor',
    institution: 'Dept. of CSE, Southeast University',
    email:       'mohiuddin.kh@seu.edu.bd',
    image:       '/references/mohi-uddin.jpg',
    note:        'Undergraduate thesis supervisor',
  },
  {
    name:        'Shifat Ahmed',
    title:       'Assistant Professor',
    institution: 'Dept. of CSE, Southeast University',
    email:       'shifat.ahmed@seu.edu.bd',
    image:       '/references/shifat-ahmed.jpg',
  },
];
