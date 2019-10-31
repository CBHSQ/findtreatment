import { METERS_PER_MILE } from '../utils/constants';

export const age = [
  { value: '', label: 'All ages' },
  { value: 'ADLT', label: 'Adults (18 and older)' },
  { value: 'CHLD', label: 'Youth (under 18)' }
];

export const distance = [
  { value: METERS_PER_MILE * 5, label: '5 miles' },
  { value: METERS_PER_MILE * 10, label: '10 miles' },
  { value: METERS_PER_MILE * 25, label: '25 miles' },
  { value: METERS_PER_MILE * 50, label: '50 miles' },
  { value: METERS_PER_MILE * 100, label: '100 miles' },
  { value: '', label: '100+ miles' }
];

export const languages = [
  {
    value: 'SP-Spanish',
    label: 'Spanish'
  },
  {
    value: 'F4-Arabic',
    label: 'Arabic'
  },
  {
    value: 'F17-Any Chinese Language',
    label: 'Any Chinese Language'
  },
  {
    value: 'F19-Creole',
    label: 'Creole'
  },
  {
    value: 'F25-Farsi',
    label: 'Farsi'
  },
  {
    value: 'F28-French',
    label: 'French'
  },
  {
    value: 'F30-German',
    label: 'German'
  },
  {
    value: 'F31-Greek',
    label: 'Greek'
  },
  {
    value: 'F35-Hebrew',
    label: 'Hebrew'
  },
  {
    value: 'F36-Hindi',
    label: 'Hindi'
  },
  {
    value: 'F37-Hmong',
    label: 'Hmong'
  },
  {
    value: 'N13-Hopi',
    label: 'Hopi'
  },
  {
    value: 'F42-Italian',
    label: 'Italian'
  },
  {
    value: 'F43-Japanese',
    label: 'Japanese'
  },
  {
    value: 'F47-Korean',
    label: 'Korean'
  },
  {
    value: 'N18-Lakota',
    label: 'Lakota'
  },
  {
    value: 'N23-Navajo',
    label: 'Navajo'
  },
  {
    value: 'N24-Ojibwa',
    label: 'Ojibwa'
  },
  {
    value: 'F66-Polish',
    label: 'Polish'
  },
  {
    value: 'F67-Portuguese',
    label: 'Portuguese'
  },
  {
    value: 'F70-Russian',
    label: 'Russian'
  },
  {
    value: 'F81-Tagalog',
    label: 'Tagalog'
  },
  {
    value: 'F92-Vietnamese',
    label: 'Vietnamese'
  },
  {
    value: 'N40-Yupik',
    label: 'Yupik'
  }
];

export const mat = [
  {
    value: '',
    label: 'Show all facilities',
    description:
      'Includes facilities that do not offer medication-assisted treatment'
  },
  {
    value: 'METH',
    label: 'Methadone',
    description:
      'Controls withdrawl symptoms and blocks cravings. Given in person at a clinic, usually every day.'
  },
  {
    value: 'BU',
    label: 'Buprenorphine',
    description:
      'Works similar to methadone, and can be prescribed to take at home.'
  },
  {
    value: 'NU',
    label: 'Naltrexone',
    description: 'Blocks the effects of opioids and alcohol completely.'
  }
];

export const payment = [
  {
    value: '',
    label: 'All payment options'
  },
  {
    value: 'PI',
    label: 'Private health insurance',
    description:
      'Those with private insurance typically get it through an employer or insurance exchange. For example: PPO or HMO coverage.'
  },
  {
    value: 'MD',
    label: 'Medicaid',
    description:
      'Government program providing health coverage for people with very low income.'
  },
  {
    value: 'NP',
    label: 'Free or no-cost care',
    description: 'Free services; no payment needed.'
  },
  {
    value: 'MC',
    label: 'Medicare',
    description:
      'Federal health insurance for adults 65 and older, or younger people with certain disabilities.'
  },
  {
    value: 'PA',
    label: 'Payment assistance available',
    description:
      'Facilities that may offer help paying for services. Check with the facility for details.'
  },
  {
    value: 'SS',
    label: 'Sliding fee scale',
    description: 'Adjustable fees based on income.'
  },
  {
    value: 'SF',
    label: 'Cash or self-payment',
    description: 'Accepts direct payment for treatment.'
  },
  {
    value: 'MI',
    label: 'Military insurance (e.g. TRICARE)'
  },
  {
    value: 'ITU',
    label: 'IHS/Tribal/Urban (ITU) funds'
  }
];

export const special = [
  {
    value: 'VET',
    label: 'Veterans'
  },
  {
    value: 'GL',
    label: 'LGBT (Lesbian, gay, bisexual, transgender)'
  },
  {
    value: 'AH',
    label: 'Services for the deaf and hard of hearing'
  }
];

export const type = [
  {
    value: '',
    label: 'All types of treatment'
  },
  {
    value: 'ISC',
    label: 'Interim care',
    description: 'When immediate admission to other care isn’t available.'
  },
  {
    value: 'DT',
    label: 'Detox',
    description: 'Supervised withdrawal from substance use.'
  },
  {
    value: 'OP',
    label: 'Outpatient',
    description:
      'Treatment at a program site while a patient lives on their own.'
  },
  {
    value: 'HI',
    label: 'Hospital inpatient',
    description: '24/7 care connected to a hospital, lasting days or weeks.'
  },
  {
    value: 'RES',
    label: 'Residential',
    description: 'Live-in care, lasting for one month to one year.'
  },
  {
    value: 'HH',
    label: 'Transitional housing',
    description:
      'Temporary space to stay while transitioning from an intensive treatment setting. Sometimes called a halfway house or sober living.'
  },
  {
    value: 'CO',
    label: 'Co-occurring mental health and substance use treatment',
    description:
      'Integrated care that addresses substance use and mental illness.'
  },
  {
    value: 'TELE',
    label: 'Telemedicine (including internet and mobile programs)',
    description:
      'Care given over the phone or online to support treatment and recovery.'
  }
];
