export interface Metric {
  value: number
  prefix?: string
  suffix?: string
  label: string
  context: string
  org: string
}

/** Headline outcomes, strongest and most recent first. */
export const metrics: Metric[] = [
  {
    value: 80,
    suffix: '%',
    label: 'Faster error logging',
    context:
      'Power Apps solution with built-in error-proofing cut logging from 60 seconds to 12, for a team handling 1,500+ errors a month.',
    org: 'BNY',
  },
  {
    value: 250,
    suffix: '+',
    label: 'Services rationalised',
    context:
      'Portfolio-wide data review that improved pricing accuracy by 25%.',
    org: 'Centilytics',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Redundant data eliminated',
    context:
      'Database cleanup and access control across a full data lifecycle project.',
    org: 'Centilytics',
  },
  {
    value: 15,
    suffix: '%',
    label: 'Faster project delivery',
    context: 'CI/CD deployment optimisation across a 7-project portfolio.',
    org: 'Centilytics',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Less administrative workload',
    context:
      'Workflow automation apps built by a 4-member Innovation Lab team.',
    org: 'DBIT',
  },
]
