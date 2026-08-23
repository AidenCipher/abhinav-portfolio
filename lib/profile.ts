export const profile = {
  name: 'Abhinav Rotti',
  role: 'Project Manager & Operations Strategist',
  location: 'Bengaluru, India',
  email: 'abhinav.rotti94@gmail.com',
  phone: '+91 99167 08854',
  linkedin: 'https://linkedin.com/in/abhinavrotti',
  linkedinLabel: 'linkedin.com/in/abhinavrotti',
}

export interface Education {
  institution: string
  qualification: string
  period: string
  result: string
  highlights?: string[]
}

export const education: Education[] = [
  {
    institution: 'Christ University, Bengaluru',
    qualification: 'MBA',
    period: '2025 – 2027',
    result: 'GPA 7.83 / 10',
    highlights: [
      'Class Representative',
      'Ushus 2026 — Head POC',
      "Caesura '26 — Head POC",
      'Ushus 2025 — Logistics, Operations & Events core member',
      'Blossoms 2025 — Literary Events Coordinator',
      'Xenova 2026 — Core committee',
    ],
  },
  {
    institution: 'Don Bosco Institute of Technology (VTU), Bengaluru',
    qualification: 'B.E. Information Science & Engineering',
    period: '2023',
    result: 'CGPA 8.22 — First Class with Distinction',
    highlights: [
      'Led an Innovation Lab team building workflow automation apps, cutting administrative workload by 40%',
    ],
  },
  {
    institution: 'KLE Independent PU College, Bengaluru',
    qualification: 'Pre-University',
    period: '2019',
    result: '74.5%',
  },
  {
    institution: "Holy Angel's High School",
    qualification: '10th Standard',
    period: '2017',
    result: '93.44%',
    highlights: ['Class Representative'],
  },
]

export interface LeadershipItem {
  role: string
  org: string
  description: string
  tags: string[]
}

export const leadership: LeadershipItem[] = [
  {
    role: 'Head Point of Contact',
    org: 'Ushus 2026 Management Fest',
    description:
      "Leading core execution for Christ University's premier management fest — end-to-end planning, strategic operations, and cross-functional team coordination at scale.",
    tags: ['Operations Strategy', 'Event Management', 'Team Leadership'],
  },
  {
    role: 'Head Point of Contact',
    org: 'Caesura ’26',
    description:
      'Second Head POC appointment in the same academic year, coordinating logistics and inter-team communication across the festival.',
    tags: ['Logistics', 'Coordination', 'Stakeholder Management'],
  },
  {
    role: 'App Development Lead',
    org: 'DBIT Innovation Lab',
    description:
      'Directed a 4-member team in an agile environment to design, build, and deploy workflow automation applications, reducing administrative workload by 40%.',
    tags: ['Agile Leadership', 'Product Management', 'Automation'],
  },
  {
    role: 'Workshop Organiser',
    org: 'Kotlin & Flutter',
    description:
      'Organised and delivered mobile development workshops for 50+ students, driving adoption of new technologies across the cohort.',
    tags: ['Public Speaking', 'Mentorship', 'Technical Training'],
  },
  {
    role: 'Project Lead — Capstone',
    org: 'Google Project Management',
    description:
      'Designed a complete end-to-end project plan including charter, milestones, and stakeholder communication reports.',
    tags: ['Strategic Planning', 'Documentation', 'Stakeholder Management'],
  },
  {
    role: 'Core Committee & Coordinator Roles',
    org: 'Ushus 2025 · Blossoms 2025 · Xenova 2026',
    description:
      'Logistics, Operations and Events core member for Ushus 2025; Literary Events Coordinator for Blossoms 2025; core committee for Xenova 2026. Class Representative throughout.',
    tags: ['Operations', 'Events', 'Representation'],
  },
]

export const skills = {
  'Operations & Management': [
    'Process Improvement',
    'Project Management',
    'Agile & Scrum',
    'Stakeholder Engagement',
    'Change Management',
    'Strategic Planning',
    'Business Analysis',
  ],
  'Technical & Analytical': [
    'Data Analysis',
    'Power Platform',
    'AWS Cloud',
    'SQL',
    'Tableau (in progress)',
    'Kotlin',
    'Flutter',
  ],
}

export const certifications = [
  'Google Project Management Professional',
  'Certified Associate Project Manager (PMI)',
  'AWS Certified Cloud Practitioner',
  'Lean Six Sigma Green Belt',
  'Agile & Scrum Master (in progress)',
  'Leadership Retreat, Outbound Training',
  'AI: Constraint Satisfaction (NPTEL – Swayam)',
  'Artificial Intelligence (AI) for Management (NPTEL – Swayam)',
]
