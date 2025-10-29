export const UK_POSTCODE = /^(GIR 0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2}|[A-PR-UWYZ][A-HK-Y][0-9]{1,2}|[A-PR-UWYZ][0-9][A-HJKPSTUW]|[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY])\s?[0-9][ABD-HJLNP-UW-Z]{2}))$/i;
export const E164 = /^\+?[1-9]\d{7,14}$/;
export const MAX_PHOTOS = 5;

export const TRADE_OPTIONS = [
  'Painters', 'Carpenters', 'Plumbers', 'Electricians', 'Builders', 'Roofers',
  'HVAC', 'Flooring', 'Tiling', 'Landscaping', 'Handyman',
  'Frontend Developer', 'Backend Developer', 'Full-Stack Developer',
  'Mobile Developer (iOS/Android/Flutter/React Native)', 'DevOps / SRE',
  'QA Engineer / Tester', 'Data Analyst', 'Data Engineer', 'Data Scientist',
  'ML Engineer', 'UI/UX Designer', 'Product Manager', 'Project Manager',
  'System Administrator', 'Network Engineer', 'Security / InfoSec',
  'DBA (Database Administrator)', 'WordPress Developer', 'Shopify Developer',
  'Web Designer', 'SEO Specialist', 'Copywriter (Tech)',
  'Salesforce Admin / Developer', 'Business Analyst', 'Tech Support (L1/L2)',
  'Game Developer', 'Blockchain Developer', 'Embedded Engineer', 'Other…'
];

export const COUNTRY_OPTIONS = [
  { value: 'GB', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'US', label: 'United States' },
  { value: 'IL', label: 'Israel' },
  { value: 'EU', label: 'European Union' },
  { value: 'Other', label: 'Other' }
];

export const BUDGET_OPTIONS = [
  { value: 'not_sure', label: 'Not sure' },
  { value: '0_250', label: '£0–£250' },
  { value: '250_1000', label: '£250–£1,000' },
  { value: '1000_plus', label: '£1,000+' }
];
