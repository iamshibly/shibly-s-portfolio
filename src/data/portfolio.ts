/* ─── Portfolio Content Data ─────────────────────────────────────
   All content lives here. Swap values to update the site.
   ──────────────────────────────────────────────────────────────── */

export const personalInfo = {
  nameFirst:  'Md. Zubayer Ahmad',
  nameLast:   'Shibly',
  tagline:    'AI Researcher',
  description:
    'Specializing in generative models, continual learning, and artificial intelligence.',
  email:      'zubayer.shibly@example.com',
  phone:      '+880 1XXXXXXXXX',
  location:   'Bangladesh',
  cvUrl:      '/portfolio-assets/pdf/CV.pdf',
  /* ── Video config ────────────────────────────────────────────── */
  videoUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
  videoLabel:  'Introduction Video',
  videoPoster: '',   /* e.g. '/portfolio-assets/posters/hero-poster.jpg' */
  statusTag:  'Open for Graduate RA Positions & PhD Opportunities — 2026',
  socials: {
    scholar:  'https://scholar.google.com/',
    github:   'https://github.com/shibly',
    linkedin: 'https://linkedin.com/in/shibly',
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
  "I'm an AI Researcher currently exploring the boundaries of generative models and continual learning.",
  "My research lives at the intersection of deep learning and real-world applicability — designing frameworks that are robust and scalable.",
  "Previously, I have worked extensively on optimizing large-scale vision transformers for resource-constrained environments.",
  "I am deeply fascinated by how machines can learn continuously without catastrophic forgetting, paving the way for true lifelong learning systems.",
  "Beyond the lab, I am passionate about open-source collaboration and making state-of-the-art AI accessible to the broader community.",
  "I believe the next major leap in artificial intelligence will emerge from models that not only generate content but inherently reason about their environments.",
  "I'm actively seeking PhD opportunities to push this work further and tackle these foundational challenges."
];

export const researchInterests: string[] = [
  'Diffusion Models',
  'Image Editing',
  'Vision Transformers',
  'Medical Image Gen.',
  'Continual Learning',
  'Knowledge Distillation',
  'Federated Learning',
  'Representation Learning',
  'Multimodal AI',
  'Efficient Inference',
  'AI Safety',
];

export const hobbies: string[] = [
  'Traveling', 'Movies', 'Reading', 'Photography'
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
    year:        'Graduated — 2024',
    degree:      'Bachelor of Science in Computer Science',
    institution: 'University of Dhaka',
    cgpa:        '3.94 / 4.00',
    cgpaRecent:  'Valedictorian — Ranked 1st in Batch',
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
    date:       'Jan 2024 – Present',
    status:     'Current',
    title:      'Research Assistant',
    org:        'MILA - Quebec AI Institute',
    supervisor: 'Supervised by Dr. Yoshua Bengio',
    faculty:    'Department of Computer Science',
    variant:    'cyan',
    topics: [
      'Investigated causality-driven representation learning inspired by the "Causal Discovery from Non-stationary Data" framework.',
      'Developed novel graph neural network architectures for out-of-distribution generalization in generative models.',
    ],
  },
  {
    date:       'May 2023 – Dec 2023',
    status:     'Completed',
    title:      'Machine Learning Intern',
    org:        'Vector Institute',
    supervisor: 'Supervised by Dr. Geoffrey Hinton',
    faculty:    'Deep Learning Group',
    variant:    'gold',
    topics: [
      'Contributed to the implementation of the "Forward-Forward Algorithm" for replacing backpropagation in resource-constrained environments.',
      'Optimized training pipelines for energy-efficient vision transformers.',
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
    title:   'Generative Models for Zero-Shot Medical Image Translation using Conditional Diffusion',
    authors: 'Md. Zubayer Ahmad Shibly, Yoshua Bengio',
    venue:   'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) — CORE A*',
    year:    2024,
    type:    'International Conference',
    status:  'Published',
    link:    '/portfolio-assets/pdf/demo-paper.pdf',
  },
  {
    num:     2,
    title:   'A Novel Framework for Knowledge Distillation in Transformer-Based Vision Architectures',
    authors: 'Geoffrey Hinton, Md. Zubayer Ahmad Shibly',
    venue:   'Journal of Machine Learning Research (JMLR) — CORE A*',
    year:    2024,
    type:    'Journal',
    status:  'Published',
    link:    '/portfolio-assets/pdf/demo-paper.pdf',
  },
  {
    num:     3,
    title:   'Mitigating Catastrophic Forgetting in Federated Learning using Graph Attention Networks',
    authors: 'Md. Zubayer Ahmad Shibly, Alex Smola',
    venue:   'International Conference on Learning Representations (ICLR) — CORE A*',
    year:    2023,
    type:    'International Conference',
    status:  'Published',
    link:    '/portfolio-assets/pdf/demo-paper.pdf',
  },
  {
    num:     4,
    title:   'Efficient Inference Mechanisms for Large Language Models on Edge Devices',
    authors: 'Md. Zubayer Ahmad Shibly, Yann LeCun',
    venue:   'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) — CORE A*',
    year:    2025,
    type:    'Under Review',
    status:  'Under Review',
    link:    '/portfolio-assets/pdf/demo-paper.pdf',
  },
  {
    num:     5,
    title:   'Scalable Data Augmentation via Implicit Semantic Regularization in Deep Learning',
    authors: 'Md. Zubayer Ahmad Shibly, Andrew Ng',
    venue:   'Information Systems Journal (ISJ) — CORE B',
    year:    2023,
    type:    'Journal',
    status:  'Published',
    link:    '/portfolio-assets/pdf/demo-paper.pdf',
  },
  {
    num:     6,
    title:   'Domestic Perspectives on AI Infrastructure Scaling in South Asia',
    authors: 'Md. Zubayer Ahmad Shibly',
    venue:   'Bangladesh Artificial Intelligence Symposium (BAIS)',
    year:    2022,
    type:    'Domestic Conference',
    status:  'Published',
    link:    '/portfolio-assets/pdf/demo-paper.pdf',
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
    title: 'DiffuMed — Medical Image Translation via Diffusion',
    description: 'A conditional diffusion model pipeline for zero-shot MRI-to-CT translation. Trained on public medical datasets and benchmarked against SOTA GAN-based methods with significant FID improvements.',
    tags: ['Python', 'PyTorch', 'Diffusers', 'MONAI', 'CUDA'],
    link: 'https://github.com/shibly',
    demo: '#',
  },
  {
    title: 'ContinualVision — Federated Continual Learning Toolkit',
    description: 'A modular research toolkit for federated continual learning experiments. Supports multiple forgetting mitigation strategies (EWC, GEM, DERPP) with pluggable client simulators.',
    tags: ['Python', 'PySyft', 'PyTorch', 'Flower', 'NumPy'],
    link: 'https://github.com/shibly',
  },
  {
    title: 'NeuralDistill — Knowledge Distillation Framework',
    description: 'End-to-end framework for compressing large vision transformers into lightweight student models. Achieves competitive accuracy with 70% fewer parameters on ImageNet benchmarks.',
    tags: ['Python', 'Transformers', 'HuggingFace', 'ONNX'],
    link: 'https://github.com/shibly',
    demo: '#',
  },
  {
    title: 'AI Research Dashboard',
    description: 'An interactive web dashboard to visualize and explore ML experiment logs, confusion matrices, training curves, and model comparison metrics in real-time.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Recharts', 'PostgreSQL'],
    link: 'https://github.com/shibly',
    demo: '#',
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
    name: 'Dr. Yoshua Bengio',
    title: 'Full Professor',
    institution: 'MILA – Université de Montréal',
    image: 'https://picsum.photos/seed/collab1/400/500',
  },
  {
    name: 'Dr. Geoffrey Hinton',
    title: 'Emeritus Professor',
    institution: 'University of Toronto',
    image: 'https://picsum.photos/seed/collab2/400/500',
  },
  {
    name: 'Dr. Fei-Fei Li',
    title: 'Professor & Co-Director',
    institution: 'Stanford HAI',
    image: 'https://picsum.photos/seed/collab3/400/500',
  },
  {
    name: 'Dr. Alex Smola',
    title: 'VP of Engineering',
    institution: 'Amazon Web Services AI',
    image: 'https://picsum.photos/seed/collab4/400/500',
  },
  {
    name: 'Dr. Pieter Abbeel',
    title: 'Professor & Co-Founder',
    institution: 'UC Berkeley / Covariant AI',
    image: 'https://picsum.photos/seed/collab5/400/500',
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
    date:        'Jun 2024 – Present',
    role:        'Graduate Research Assistant (RA)',
    org:         'MILA – Quebec AI Institute',
    description: 'Conducting research on causality-aware generative models under the supervision of Dr. Yoshua Bengio. Contributing to open-source diffusion model libraries and leading weekly reading group sessions on emerging deep learning architectures.',
  },
  {
    date:        'Jan 2024 – May 2024',
    role:        'Machine Learning Engineer Intern',
    org:         'Samsung R&D Institute Bangladesh',
    description: 'Developed and optimized on-device neural network inference pipelines for low-power IoT hardware. Achieved a 35% latency reduction using TensorRT and INT8 quantization on embedded GPU targets.',
  },
  {
    date:        'Jul 2023 – Dec 2023',
    role:        'Junior AI Researcher',
    org:         'Vector Institute, Toronto',
    description: 'Collaborated with senior researchers on the Forward-Forward Algorithm implementation. Conducted ablation studies and maintained reproducibility reports for deep learning experiments.',
  },
  {
    date:        'Jan 2023 – Jun 2023',
    role:        'Data Science Intern',
    org:         'Grameenphone AI Lab',
    description: 'Built end-to-end ML pipelines for customer churn prediction and network anomaly detection. Delivered dashboards using FastAPI and Streamlit that were adopted by the product analytics team.',
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
    groupTitle: 'Core & ML',
    skills: [
      { name: 'Python & Deep Learning', level: 92, tags: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas'] },
      { name: 'Computer Vision',        level: 88, tags: ['Diffusers', 'Transformers', 'OpenCV', 'PIL'] },
      { name: 'Generative AI',          level: 85, tags: ['Stable Diffusion', 'LoRA', 'DDPM', 'GANs'] },
      { name: 'Other Languages',        level: 75, tags: ['C++', 'Java', 'MATLAB'] },
    ],
  },
  {
    groupTitle: 'Tools & Platforms',
    skills: [
      { name: 'Cloud & MLOps',          level: 80, tags: ['AWS', 'GCP', 'Azure', 'MLflow', 'FastAPI', 'Streamlit'] },
      { name: 'Dev Tools',              level: 85, tags: ['Git', 'GitHub', 'LaTeX', 'VS Code'] },
      { name: 'Research Techniques',    level: 82, tags: ['Continual Learning', 'Knowledge Distillation', 'Federated Learning'] },
      { name: 'Design & Visualization', level: 72, tags: ['Adobe Illustrator', 'Matplotlib', 'Seaborn'] },
    ],
  },
];

/* ─── Certifications ─────────────────────────────────────────── */
export interface Certification {
  name:   string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: 'Deep Learning Specialization',          issuer: 'Coursera / DeepLearning.AI' },
  { name: 'Machine Learning Engineering for Production (MLOps)', issuer: 'Coursera / DeepLearning.AI' },
  { name: 'Natural Language Processing Specialization', issuer: 'Coursera / DeepLearning.AI' },
  { name: 'AWS Certified Machine Learning – Specialty', issuer: 'Amazon Web Services' },
  { name: 'Introduction to Federated Learning',    issuer: 'Flower Labs' },
];

/* ─── Awards ─────────────────────────────────────────────────── */
export interface Award {
  icon: 'trophy' | 'medal' | 'graduation' | 'star' | 'sparkles';
  name: string;
  org:  string;
  year: number;
}

export const awards: Award[] = [
  { icon: 'trophy',     name: 'Best Paper Award',                        org: 'CVPR 2024',                    year: 2024 },
  { icon: 'medal',      name: 'Valedictorian — Ranked 1st in Batch',     org: 'University of Dhaka',          year: 2024 },
  { icon: 'graduation', name: "Dean's List – Academic Excellence",        org: 'University of Dhaka',          year: 2023 },
  { icon: 'star',       name: 'National AI Innovation Challenge – 1st Place', org: 'ICT Division, Bangladesh', year: 2022 },
  { icon: 'sparkles',   name: 'MILA Excellence Fellowship',               org: 'MILA – Quebec AI Institute',   year: 2024 },
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
    date: 'March 2025',
    title: 'Paper Accepted at CVPR 2025',
    summary: 'Excited to share that our work on zero-shot medical image translation using conditional diffusion was accepted at CVPR 2025 — a CORE A* venue and a major milestone in our research journey.',
    image: 'https://picsum.photos/seed/news1/800/450',
    featured: true,
  },
  {
    id: '2',
    date: 'January 2026',
    title: 'Presenting Research at ICLR 2026',
    summary: 'Will be presenting our latest work on federated continual learning at ICLR 2026 in Vienna, Austria. Looking forward to connecting with the global AI research community.',
    image: 'https://picsum.photos/seed/news7/800/450',
    featured: false,
  },
  {
    id: '3',
    date: 'February 2026',
    title: 'New Preprint Released on arXiv',
    summary: 'Released a new preprint on efficient inference mechanisms for large language models on edge devices. Available on arXiv — feedback from the community is welcome!',
    image: 'https://picsum.photos/seed/news8/800/450',
    featured: false,
  },
  {
    id: '4',
    date: 'January 2025',
    title: 'Joined MILA as Graduate Research Assistant',
    summary: 'Officially started as a Graduate RA at MILA – Quebec AI Institute under the supervision of Dr. Yoshua Bengio. Looking forward to contributing to cutting-edge generative model research.',
    image: 'https://picsum.photos/seed/news2/800/450',
    featured: false,
  },
  {
    id: '5',
    date: 'November 2024',
    title: 'Presented at International AI Symposium',
    summary: 'Delivered a talk on "Mitigating Catastrophic Forgetting in Federated Learning" at the International AI Symposium, Dhaka. Great conversations with researchers from across South Asia.',
    image: 'https://picsum.photos/seed/news3/800/450',
    featured: false,
  },
  {
    id: '6',
    date: 'September 2024',
    title: 'Completed AWS Machine Learning Specialty Certification',
    summary: 'Successfully obtained the AWS Certified Machine Learning – Specialty certification, strengthening production ML deployment capabilities and cloud infrastructure knowledge.',
    image: 'https://picsum.photos/seed/news4/800/450',
    featured: false,
  },
  {
    id: '7',
    date: 'July 2024',
    title: 'Won National AI Innovation Challenge',
    summary: 'Our team won 1st place at the National AI Innovation Challenge organized by the ICT Division of Bangladesh, for our real-time medical diagnosis assistance tool.',
    image: 'https://picsum.photos/seed/news5/800/450',
    featured: false,
  },
  {
    id: '8',
    date: 'April 2024',
    title: 'Graduated Valedictorian from University of Dhaka',
    summary: 'Completed BSc in Computer Science from the University of Dhaka with a CGPA of 3.94/4.00, graduating as the top student in the cohort.',
    image: 'https://picsum.photos/seed/news6/800/450',
    featured: false,
  },
  {
    id: '9',
    date: 'June 2025',
    title: 'Awarded MILA Excellence Fellowship',
    summary: 'Honored to receive the MILA Excellence Fellowship for outstanding research contributions in generative AI and continual learning during the 2024–2025 academic year.',
    image: 'https://picsum.photos/seed/news9/800/450',
    featured: false,
  },
  {
    id: '10',
    date: 'August 2025',
    title: 'Co-Organized International Workshop on Continual Learning',
    summary: 'Co-organized the 3rd International Workshop on Continual Learning at ICML 2025, bringing together over 200 researchers working on lifelong and incremental machine learning systems.',
    image: 'https://picsum.photos/seed/news10/800/450',
    featured: false,
  },
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
    name:        'Dr. Yoshua Bengio',
    title:       'Full Professor & Scientific Director',
    institution: 'MILA – Université de Montréal',
    email:       'bengio@mila.quebec',
  },
  {
    name:        'Dr. Geoffrey Hinton',
    title:       'Emeritus Professor',
    institution: 'University of Toronto',
    email:       'hinton@cs.toronto.edu',
  },
];
