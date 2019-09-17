export const services = {
  PAY: {
    name: 'Payment Accepted',
    values: {
      'No payment accepted': 'Free services, no payment needed'
    }
  },
  PYAS: {
    values: {
      'Payment assistance (check with facility for details)':
        'Payment assistance available (check with facility for details)',
      'Sliding fee scale (fee is based on income and other factors)':
        'Sliding fee scale, based on income and other factors'
    }
  },
  TC: {
    values: {
      Detoxification: 'Detoxification/Detox',
      'Treatment for co-occurring serious mental health illness/serious emotional disturbance and substance use disorders':
        'Treatment for co-occurring serious mental illness and substance use disorders'
    }
  },
  SET: {
    name: 'Service Settings',
    values: {
      'Residential detoxification': 'Residential detox',
      'Outpatient detoxification': 'Outpatient detox'
    }
  },
  SMP: {
    values: {
      'Smoking not permitted': 'No smoking',
      'Smoking permitted in designated area':
        'Smoking only in designated areas',
      'Smoking permitted without restriction': 'Smoking allowed'
    }
  },
  OT: {
    values: {
      'Accepts clients on opioid medication but prescribed elsewhere':
        'Accepts clients on opioid medication, but does not prescribe it'
    }
  },
  OM: {
    values: {
      'Methadone used in Treatment': 'Methadone',
      'Buprenorphine used in Treatment': 'Buprenorphine',
      'Naltrexone used in Treatment': 'Naltrexone'
    }
  },
  AUT: {
    values: {
      'Accepts clients using medication assisted treatment for alcohol use disorder but prescribed elsewhere':
        'Accepts clients using medication for alcohol use disorder, but does not prescribe it'
    }
  },
  OTHR: {
    name: 'Treatment for other addictions',
    values: {
      'Treatment for non-substance use addiction disorder':
        'Non-substance use addiction disorder',
      'Treatment for gambling disorder': 'Gambling disorder',
      'Treatment for internet use disorder': 'Internet use disorder'
    }
  },
  DETOX: {
    name: 'Type of Detox',
    values: {
      'Alcohol Detoxification': 'Alcohol Detox',
      'Benzodiazepines Detoxification': 'Benzodiazepines Detox',
      'Cocaine Detoxification': 'Cocaine Detox',
      'Methamphetamines detoxification': 'Methamphetamines Detox',
      'Opioid Detoxification': 'Opioid Detox',
      'Routinely uses medication for detoxification':
        'Medication used for detox'
    }
  },
  SG: {
    name: 'Client services for:',
    values: {
      'Persons with co-occurring mental and substance use disorders':
        'Co-occurring mental health and substance-use disorders',
      'Persons with co-occurring pain and substance use':
        'Co-occurring pain and substance use disorders',
      'Persons with HIV or AIDS': 'HIV or AIDS',
      'Persons who have experienced intimate partner violence, domestic violence':
        'Intimate partner violence or domestic violence',
      'Persons who have experienced sexual abuse': 'Sexual abuse',
      'Persons who have experienced trauma': 'Trauma'
    }
  },
  EXCL: {
    name: 'Group-specific services',
    values: {
      'Serves only DUI/DWI clients': 'DUI/DWI clients only',
      'All Clients in Opioid Treatment Program':
        'All clients are in an opioid treatment program',
      'Serves Veterans only': 'Veterans only'
    }
  },
  EDU: {
    values: {
      'Vocational training or educational support (for example, high school coursework, GED preparation, etc.)':
        'Vocational training or educational support (e.g. high school coursework, GED preparation)'
    }
  },
  AS: {
    name: 'Additional Client Services'
  }
};

export const servicesOrder = [
  'PAY',
  'PYAS',
  'TC',
  'SET',
  'FOP',
  'HOSP',
  'SMP',
  'ASSES',
  'TAP',
  'OT',
  'OM',
  'AUT',
  'OTHR',
  'DETOX',
  'PHR',
  'AGE',
  'GN',
  'SG',
  'EXCL',
  'EDU',
  'TRSRV',
  'AS',
  'SL',
  'OL',
  'AIL'
];
