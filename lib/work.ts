// lib/work.ts — sourced from Abhinav Rotti's resume (Aug 2026)
export interface Project {
  title: string
  description: string
  outcome: string
}

export interface WorkExperience {
  company: string
  role: string
  period: string
  description: string
  /** Headline result of the engagement, shown above the project list. */
  highlight?: string
  projects: Project[]
}

export const workExperience: WorkExperience[] = [
  {
    company: 'BNY',
    role: 'Summer Intern',
    period: 'Apr 2026 – Jun 2026',
    description:
      'Process improvement within KYC quality control operations, combining Lean Six Sigma method with Power Platform delivery.',
    highlight:
      'Received a Pre-Placement Offer for the Trainee Analyst Programme, 2027.',
    projects: [
      {
        title: 'QC Error-Logging Redesign',
        description:
          'Designed a Power Apps + Power Automate solution with built-in error-proofing (Poka-Yoke) for a 20-member team processing 1,500+ errors per month.',
        outcome: 'Cut error-logging time by 80% — from 60 seconds to 12.',
      },
      {
        title: 'Error Taxonomy Standardisation',
        description:
          'Applied the Lean Six Sigma DMAIC framework to restructure the error taxonomy and eliminate duplicate and misclassified entries across QC operations.',
        outcome: 'Reduced 23 error categories to 13, removing classification ambiguity.',
      },
      {
        title: 'Real-Time Reporting Platform',
        description:
          'Built an end-to-end Power Platform solution across Power Apps, Power Automate, and Power BI, replacing manual weekly reporting.',
        outcome: 'Live dashboards serving 25+ users in place of weekly manual reports.',
      },
      {
        title: 'Executive Sponsorship',
        description:
          'Presented the process improvement solution to global VPs and SVPs across four demonstrations.',
        outcome: 'Approved for expansion into Investment Banking QC.',
      },
    ],
  },
  {
    company: 'Centilytics Pvt. Ltd.',
    role: 'Associate Project Manager',
    period: 'Nov 2023 – Nov 2024',
    description:
      'Cloud management service provider. Managed cross-functional delivery with C-suite executives and international clients.',
    projects: [
      {
        title: 'Cross-Functional Project Portfolio',
        description:
          'Managed and delivered 7+ cross-functional projects, collaborating with C-suite executives and international clients to manage assets and business operations across the project lifecycle.',
        outcome: 'Consistent delivery across a multi-client portfolio.',
      },
      {
        title: 'CI/CD Pipeline Optimisation',
        description:
          'Optimised CI/CD deployment processes to enhance operational efficiency.',
        outcome: 'Reduced project delivery time by 15%.',
      },
      {
        title: 'Data Lifecycle Management',
        description:
          'Directed a data lifecycle project covering database cleanup and access control.',
        outcome:
          'Eliminated 100% of redundant data, improving integrity and reducing operational risk.',
      },
      {
        title: 'Service Portfolio Rationalisation',
        description:
          'Analysed and rationalised a portfolio of over 250 services, conducting data reviews to support process improvement initiatives.',
        outcome: 'Improved pricing accuracy by 25%.',
      },
    ],
  },
  {
    company: 'MetricDust',
    role: 'Front-End Development Intern',
    period: 'Nov 2021 – Jun 2022',
    description:
      'Developed and supported client-facing web and mobile solutions.',
    projects: [
      {
        title: 'Client-Facing Web & Mobile Work',
        description:
          'Resolved UI bugs and implemented new features across client web and mobile products.',
        outcome: 'Improved the client service experience.',
      },
    ],
  },
]
