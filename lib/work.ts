// lib/work.ts
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
  projects: Project[]
}

export const workExperience: WorkExperience[] = [
  {
    company: 'BNY (Bank of New York)',
    role: 'Summer Intern - IT Operations Optimization',
    period: 'Summer 2026',
    description: 'Worked with the KYC MRA QC Team in Chennai focusing on IT Operations Optimisation. Secured a Pre-Placement Offer (PPO) for the Trainee Analyst Programme, 2027.',
    projects: [
      {
        title: 'KYC MRA QC Process Optimization',
        description: 'Analyzed and streamlined quality control workflows and IT operations for the Know Your Customer (KYC) process.',
        outcome: 'Improved operational efficiency and successfully secured a Trainee Analyst PPO for 2027.',
      },
    ],
  },
  {
    company: 'Centilytics Pvt. Ltd.',
    role: 'Associate Project Manager',
    period: 'Nov 2023 - Nov 2024',
    description: 'Cloud Management Service Provider. Managed cross-functional projects collaborating with C-Suite executives and international clients.',
    projects: [
      {
        title: 'Cross-Functional Project Portfolio',
        description: 'Managed and delivered 7+ cross-functional projects by collaborating with C-Suite executives and international clients to manage assets and business operations.',
        outcome: 'Successfully delivered all projects on time, establishing repeatable project management frameworks that became organizational standards.',
      },
      {
        title: 'CI/CD Pipeline Optimization',
        description: 'Optimized CI/CD deployment processes to enhance operational efficiency and reduce project delivery time.',
        outcome: 'Reduced project delivery time by 15% through faster deployment cycles and improved deployment reliability.',
      },
      {
        title: 'Data Lifecycle Management',
        description: 'Directed a data lifecycle project involving database cleanup and access control, eliminating redundant data to improve data integrity.',
        outcome: 'Eliminated 100% of redundant data, improving data integrity and reducing operational risk.',
      },
      {
        title: 'Service Portfolio Analysis',
        description: 'Analysed and rationalized a portfolio of over 250 services, conducting data reviews to improve pricing accuracy.',
        outcome: 'Improved pricing accuracy by 25% and supported process improvement initiatives.',
      },
    ],
  },
  {
    company: 'MetricDust',
    role: 'Front-End Development Intern',
    period: 'Nov 2021 - Jun 2022',
    description: 'Developed and supported client-facing web and mobile solutions, resolving UI bugs and implementing new features.',
    projects: [
      {
        title: 'Web & Mobile Development',
        description: 'Developed and supported client-facing web and mobile solutions, resolving UI bugs and implementing new features.',
        outcome: 'Enhanced client service experience through improved UI/UX and feature implementations.',
      },
    ],
  },
]