export interface FormData {
  trade: string;
  jobTitle: string;
  description: string;
  firstName: string;
  email: string;
  phone: string;
  country: string;
  town: string;
  postcode: string;
  budget: string;
  consent: boolean;
  marketingOptIn: boolean;
  company: string; // honeypot
}

export interface FormErrors {
  trade?: string;
  jobTitle?: string;
  description?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  country?: string;
  town?: string;
  postcode?: string;
  budget?: string;
  consent?: string;
}

export interface Alert {
  type: 'ok' | 'error' | '';
  message: string;
}

export interface CountryOption {
  value: string;
  label: string;
}

export interface BudgetOption {
  value: string;
  label: string;
}

export interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  list?: string;
  autoComplete?: string;
  helperText?: string;
}

export interface FormTextareaProps {
  id: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  showCounter?: boolean;
}

export interface FormSelectProps {
  id: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: CountryOption[] | BudgetOption[];
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export interface FormRadioGroupProps {
  name: string;
  label: string;
  options: BudgetOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export interface FormCheckboxProps {
  id: string;
  name?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export interface PhotoUploadProps {
  photos: File[];
  onPhotosChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemovePhoto: (index: number) => void;
  maxPhotos?: number;
}

export interface AlertProps {
  type: 'ok' | 'error' | '';
  message: string;
}

export interface FormSectionProps {
  formData: FormData;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}
