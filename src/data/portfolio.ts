/* ─── Portfolio Content Data ─────────────────────────────────────
   All content lives here. Swap values to update the site.
   ──────────────────────────────────────────────────────────────── */

export const personalInfo = {
  nameFirst:  'Naimur Asif',
  nameLast:   'Borno',
  tagline:    'Mechatronics Engineer → AI Researcher',
  description:
    'Specializing in diffusion models, continual learning & medical image synthesis.',
  email:      'naimur.ruet@gmail.com',
  phone:      '+880 1860-460298',
  location:   'Rajshahi, Bangladesh',
  cvUrl:      '/portfolio-assets/pdf/CV.pdf',
  /* ── Video config ──────────────────────────────────────────────
     YouTube embed:   https://www.youtube.com/embed/VIDEO_ID
     Google Drive:    https://drive.google.com/file/d/FILE_ID/preview
     Set videoPoster  to a .jpg/.png in public/portfolio-assets/posters/
     (leave empty string '' to use the decorative grid fallback)    */
  videoUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
  videoLabel:  'Research Presentation',
  videoPoster: '',   /* e.g. '/portfolio-assets/posters/hero-poster.jpg' */
  statusTag:  'Open to PhD / Research Positions — 2025',
  socials: {
    scholar:  'https://scholar.google.com/citations?user=6UJCdmkAAAAJ&hl=en',
    github:   'https://github.com/naimurborno',
    linkedin: 'https://linkedin.com/in/naimurborno',
  },
} as const;

/* ─── Hero Stats ─────────────────────────────────────────────── */
export const heroStats: { target: number; label: string }[] = [
  { target: 4, label: 'Publications' },
  { target: 3, label: 'Institutions' },
  { target: 7, label: 'IELTS Band' },
  { target: 2, label: 'Under Review' },
];

/* ─── About ──────────────────────────────────────────────────── */
export const aboutBio: string[] = [
  "I'm a Mechatronics Engineering graduate from RUET (May 2024) turned AI researcher, currently working as a Research Assistant at the University of Queensland under Dr. Mohammad Ali Moni.",
  'My research lives at the intersection of generative AI and medical imaging — designing frequency-aware diffusion frameworks, knowledge-distilled continual learning systems, and decentralized federated learning pipelines.',
  "I've had the privilege of collaborating across three continents — with labs in Australia, Japan, and Bangladesh — publishing at venues like Knowledge-Based Systems (IF 7.6), Scientific Reports, and IEEE conferences.",
  'I thrive on problems where mathematical rigor meets real clinical impact, and I\'m actively seeking PhD opportunities to push this work further.',
];

export const researchInterests: string[] = [
  'Diffusion Models',
  'Image Editing',
  'Inpainting',
  'Vision Transformers',
  'Img-to-Img Translation',
  'Medical Image Gen.',
  'Continual Learning',
  'Knowledge Distillation',
  'Federated Learning',
  'Frequency-Domain ML',
];

export const hobbies: string[] = [
  'Traveling', 'Movies', 'Singing', 'Photography', 'Books',
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
    year:        'Graduated — May 2024',
    degree:      'Bachelor of Science in Mechatronics Engineering',
    institution: 'Rajshahi University of Engineering and Technology (RUET), Bangladesh',
    cgpa:        '3.44 / 4.00',
    cgpaRecent:  '3.64 / 4.00 (Last 4 semesters)',
    ielts: {
      overall:   7.0,
      listening: 7.5,
      reading:   7.0,
      writing:   6.5,
      speaking:  6.0,
    },
  },
];

/* ─── Research Positions ─────────────────────────────────────── */
export interface ResearchPosition {
  date:       string;
  title:      string;
  org:        string;
  supervisor: string;
  faculty:    string;
  topics:     string[];
  variant:    'cyan' | 'gold';
}

export const researchPositions: ResearchPosition[] = [
  {
    date:       '2024 – Present',
    title:      'Research Assistant',
    org:        'University of Queensland (UQ)',
    supervisor: 'Dr. Mohammad Ali Moni',
    faculty:    'Faculty of Health, Medicine and Behavioural Sciences',
    variant:    'cyan',
    topics: [
      'Frequency-aware diffusion framework (targeting A* venue)',
      'KDC-Diff: Knowledge-distilled continual diffusion (Knowledge-Based Systems, IF 7.6)',
      'Decentralized LoRA Augmented Transformer (Under Review — Scientific Reports)',
    ],
  },
  {
    date:       '2024',
    title:      'Research Assistant',
    org:        'University of Aizu, Japan',
    supervisor: 'Prof. Jungpil Shin',
    faculty:    'Advanced Media and Information Research Lab (AMIRL)',
    variant:    'gold',
    topics: [
      'Percept-Diff: Perceptual IHC image generation (Published — 3ICT 2024, Bahrain)',
    ],
  },
];

/* ─── Publications ───────────────────────────────────────────── */
export type PubType = 'Conference' | 'Journal' | 'Under Review';

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
    title:   'Decentralized LoRA Augmented Transformer for Federated Medical Image Synthesis',
    authors: 'Borno, M.N.A., Shovon, M.S.H., Sikder, M.D., Rimi, I.F., Alahmadi, T.J., Moni, M.A.',
    venue:   'Knowledge-Based Systems',
    year:    2025,
    type:    'Journal',
    status:  'Published',
    link:    'https://doi.org/10.1016/j.knosys.2025.113001',
  },
  {
    num:     2,
    title:   'KDC-Diff: Latent-Aware Knowledge-Distilled Continual Diffusion Model for Medical Image Synthesis',
    authors: 'Borno, M.N.A., Shovon, M.S.H., Al-Moisheer, A.S., Moni, M.A.',
    venue:   'Scientific Reports',
    year:    2025,
    type:    'Under Review',
    status:  'Under Review',
    link:    'https://arxiv.org/abs/2503.xxxxx',
  },
  {
    num:     3,
    title:   'Percept-Diff: Perceptual Guidance for IHC Image Generation via Diffusion Models',
    authors: 'Borno, M.N.A., Raihan, M.T., Ahmed, A., Shovon, M.S.H., Shin, J., Mridha, M.F.',
    venue:   '3ICT 2024, Sakhir, Bahrain (pp. 520–526)',
    year:    2024,
    type:    'Conference',
    status:  'Published',
    link:    'https://ieeexplore.ieee.org/document/10.1109/3ICT64387.2024',
  },
  {
    num:     4,
    title:   'Surface Irregularities on Hot-Rolled Steel Strip: Detection and Classification',
    authors: 'Borno, N., Mazumder, D., Ghosh, A.',
    venue:   'IEOM Bangladesh Conference',
    year:    2023,
    type:    'Conference',
    status:  'Published',
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
    date:        'Jan 2023 – Mar 2023',
    role:        'Data Analyst & Business Analytics Intern',
    org:         'The Sparks Foundation (Remote, Singapore)',
    description: 'Analyzed business datasets, built interactive dashboards, and delivered actionable insights reports as part of the Graduate Rotational Internship Program.',
  },
  {
    date:        'Jun 2022 – Aug 2022',
    role:        'Engineering Intern',
    org:         'Forbes Marshall (Dhaka, Bangladesh)',
    description: 'Assisted the engineering team with industrial automation systems, process control analysis, and on-site equipment diagnostics.',
  },
];

/* ─── Skills ─────────────────────────────────────────────────── */
export interface SkillBar {
  name:  string;
  level: number;
}

export interface SkillGroup {
  groupTitle: string;
  skills:     SkillBar[];
  tags:       string[];
}

export const skillGroups: SkillGroup[] = [
  {
    groupTitle: 'Core & ML',
    skills: [
      { name: 'Python & Deep Learning', level: 92 },
      { name: 'Computer Vision',        level: 88 },
      { name: 'Generative AI',          level: 85 },
      { name: 'Other Languages',        level: 75 },
    ],
    tags: ['PyTorch', 'TensorFlow', 'Diffusers', 'Transformers', 'OpenCV', 'Stable Diffusion', 'LoRA', 'C++', 'MATLAB'],
  },
  {
    groupTitle: 'Tools & Platforms',
    skills: [
      { name: 'Cloud & MLOps',         level: 80 },
      { name: 'Dev Tools',             level: 85 },
      { name: 'Research Techniques',   level: 82 },
      { name: 'Design & Visualization',level: 72 },
    ],
    tags: ['AWS', 'GCP', 'MLflow', 'FastAPI', 'Git', 'LaTeX', 'Continual Learning', 'Knowledge Distillation', 'Matplotlib'],
  },
];

/* ─── Certifications ─────────────────────────────────────────── */
export interface Certification {
  name:   string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: 'Exploratory Data Analysis for ML',            issuer: 'Coursera / IBM' },
  { name: 'Neural Networks and Deep Learning',           issuer: 'DeepLearning.ai' },
  { name: 'Introduction to TensorFlow',                  issuer: 'Coursera / DeepLearning.ai' },
  { name: 'Convolutional Neural Networks in TensorFlow', issuer: 'DeepLearning.ai' },
  { name: 'Statistics for Data Science with Python',     issuer: 'Coursera / IBM' },
  { name: 'Custom Models, Layers & Loss Functions',      issuer: 'DeepLearning.ai' },
  { name: 'Generative AI',                               issuer: 'Coursera' },
];

/* ─── Awards ─────────────────────────────────────────────────── */
export interface Award {
  icon: string;
  name: string;
  org:  string;
  year: number;
}

export const awards: Award[] = [
  { icon: '🏆', name: 'Face The Case 3.0 — Top 10',            org: 'IEEE CUET',           year: 2023 },
  { icon: '🥈', name: 'Cognizent 2.0 — Top 8',                 org: 'RUET IPE Club',       year: 2023 },
  { icon: '📜', name: 'DS & Business Analytics Certificate',   org: 'The Sparks Foundation',year: 2023 },
  { icon: '📜', name: 'Engineering Internship Certificate',    org: 'Forbes Marshall',      year: 2022 },
];

/* ─── References / Contact ───────────────────────────────────── */
export interface Reference {
  name:        string;
  title:       string;
  institution: string;
  email:       string;
}

export const references: Reference[] = [
  {
    name:        'Dr. Mohammad Ali Moni',
    title:       'Senior Lecturer',
    institution: 'University of Queensland',
    email:       'm.moni@uq.edu.au',
  },
  {
    name:        'Md. Faisal Rahman Badal',
    title:       'Assistant Professor',
    institution: 'RUET',
    email:       'faisalrahman@mte.ruet.ac.bd',
  },
];
