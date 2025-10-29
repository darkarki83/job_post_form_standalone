import { CountryOption, BudgetOption } from '../types';

// European Region Configuration
export const EU_COUNTRY_OPTIONS: CountryOption[] = [
  { value: 'GB', label: 'United Kingdom' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'BE', label: 'Belgium' },
  { value: 'AT', label: 'Austria' },
  { value: 'PL', label: 'Poland' },
  { value: 'SE', label: 'Sweden' },
  { value: 'NO', label: 'Norway' },
  { value: 'DK', label: 'Denmark' },
  { value: 'FI', label: 'Finland' },
  { value: 'IE', label: 'Ireland' },
  { value: 'PT', label: 'Portugal' },
  { value: 'Other', label: 'Other EU Country' }
];

export const EU_BUDGET_OPTIONS: BudgetOption[] = [
  { value: 'not_sure', label: 'Not sure' },
  { value: '0_200', label: '€0–€200' },
  { value: '200_500', label: '€200–€500' },
  { value: '500_1000', label: '€500–€1,000' },
  { value: '1000_2500', label: '€1,000–€2,500' },
  { value: '2500_plus', label: '€2,500+' }
];

// USA/International Region Configuration
export const US_COUNTRY_OPTIONS: CountryOption[] = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'MX', label: 'Mexico' },
  { value: 'AU', label: 'Australia' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'IL', label: 'Israel' },
  { value: 'SG', label: 'Singapore' },
  { value: 'JP', label: 'Japan' },
  { value: 'IN', label: 'India' },
  { value: 'Other', label: 'Other Country' }
];

export const US_BUDGET_OPTIONS: BudgetOption[] = [
  { value: 'not_sure', label: 'Not sure' },
  { value: '0_250', label: '$0–$250' },
  { value: '250_500', label: '$250–$500' },
  { value: '500_1500', label: '$500–$1,500' },
  { value: '1500_3000', label: '$1,500–$3,000' },
  { value: '3000_plus', label: '$3,000+' }
];

// Regional Links and Legal Info
export const EU_LEGAL_LINKS = {
  terms: '/eu/terms',
  privacy: '/eu/privacy',
  gdprNotice: 'We process your data in accordance with GDPR. Your data will only be shared with verified professionals in your region.',
  footerText: 'Protected by reCAPTCHA. GDPR compliant. You can request data deletion at any time.'
};

export const US_LEGAL_LINKS = {
  terms: '/us/terms',
  privacy: '/us/privacy',
  privacyNotice: 'Your privacy is important to us. We only share your information with qualified professionals.',
  footerText: 'Protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.'
};

// Validation patterns by region
export const VALIDATION_PATTERNS = {
  EU: {
    postcode: /^[A-Z0-9\s-]{3,10}$/i, // Generic EU postcode pattern
    phone: /^\+?[1-9]\d{7,14}$/ // E.164 international format
  },
  US: {
    zipcode: /^\d{5}(-\d{4})?$/, // US ZIP code
    phone: /^\+?1?\d{10}$/ // US phone format
  }
};
