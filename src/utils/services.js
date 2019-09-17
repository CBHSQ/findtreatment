export const services = {
  PAY: {
    name: 'Payment Accepted',
    values: {
      'No payment accepted': 'Free services, no payment needed'
    }
  },
  PYAS: {
    values: {
      'Payment assistance available (check with facility for details)':
        'Payment assistance (check with facility for details)',
      'Sliding fee scale, based on income and other factors':
        'Sliding fee scale (fee is based on income and other factors)'
    }
  },
  TC: {
    values: {
      Detoxification: 'Detoxification/Detox',
      'Treatment for co-occurring serious mental illness and substance use disorders':
        'Treatment for co-occurring serious mental health illness/serious emotional disturbance and substance use disorders'
    }
  },
  SET: {
    name: 'Service Settings',
    values: {
      'Residential detox': 'Residential detoxification',
      'Outpatient detox': 'Outpatient detoxification'
    }
  },
  SMP: {
    values: {
      'No smoking': 'Smoking not permitted',
      'Smoking only in designated areas':
        'Smoking permitted in designated area',
      'Smoking allowed': 'Smoking permitted without restriction'
    }
  },
  OT: {
    values: {
      'Accepts clients on opioid medication, but does not prescribe it':
        'Accepts clients on opioid medication but prescribed elsewhere'
    }
  },
  OM: {
    values: {
      Methadone: 'Methadone used in Treatment',
      Buprenorphine: 'Buprenorphine used in Treatment',
      Naltrexone: 'Naltrexone used in Treatment'
    }
  },
  AUT: {
    values: {
      'Accepts clients using medication for alcohol use disorder, but does not prescribe it':
        'Accepts clients using medication assisted treatment for alcohol use disorder but prescribed elsewhere'
    }
  },
  OTHR: {
    name: 'Treatment for other addictions',
    values: {
      'Non-substance use addiction disorder':
        'Treatment for non-substance use addiction disorder',

      'Gambling disorder': 'Treatment for gambling disorder',
      'Internet use disorder': 'Treatment for internet use disorder'
    }
  },
  DETOX: {
    name: 'Type of Detox',
    values: {
      'Alcohol Detox': 'Alcohol Detoxification',
      'Benzodiazepines Detox': 'Benzodiazepines Detoxification',
      'Cocaine Detox': 'Cocaine Detoxification',
      'Methamphetamines Detox': 'Methamphetamines detoxification',
      'Opioid Detox': 'Opioid Detoxification',
      'Medication used for detox':
        'Routinely uses medication for detoxification'
    }
  },
  SG: {
    name: 'Client services for:',
    values: {
      'Co-occurring mental health and substance-use disorders':
        'Persons with co-occurring mental and substance use disorders',
      'Co-occurring pain and substance use disorders':
        'Persons with co-occurring pain and substance use',
      'HIV or AIDS': 'Persons with HIV or AIDS',
      'Intimate partner violence or domestic violence':
        'Persons who have experienced intimate partner violence, domestic violence',

      'Sexual abuse': 'Persons who have experienced sexual abuse',
      Trauma: 'Persons who have experienced trauma'
    }
  },
  EXCL: {
    name: 'Group-specific services',
    values: {
      'DUI/DWI clients only': 'Serves only DUI/DWI clients',
      'All clients are in an opioid treatment program':
        'All Clients in Opioid Treatment Program',
      'Veterans only': 'Serves Veterans only'
    }
  },
  EDU: {
    values: {
      'Vocational training or educational support (e.g. high school coursework, GED preparation)':
        'Vocational training or educational support (for example, high school coursework, GED preparation, etc.)'
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
