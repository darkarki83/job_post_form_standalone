import { useState, ChangeEvent, FormEvent } from 'react';
import { E164, MAX_PHOTOS } from '../components/JobPostForm/formConstants';
import { FormData, FormErrors, Alert } from '../types';

type ValidationConfig = {
  postcodePattern?: RegExp;
  postcodeErrorMessage?: string;
  requirePostcode?: boolean;
};

const initialFormData: FormData = {
  trade: '',
  jobTitle: '',
  description: '',
  firstName: '',
  email: '',
  phone: '',
  country: '',
  town: '',
  postcode: '',
  budget: '',
  consent: false,
  marketingOptIn: false,
  isRemoteJob: false,
  company: '' // honeypot
};

export const useJobPostForm = (validationConfig?: ValidationConfig) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [alert, setAlert] = useState<Alert>({ type: '', message: '' });
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const existing = new Set(photoFiles.map(f => `${f.name}|${f.size}|${f.lastModified}`));
    const newFiles: File[] = [];

    for (const file of files) {
      if (photoFiles.length + newFiles.length >= MAX_PHOTOS) break;
      const key = `${file.name}|${file.size}|${file.lastModified}`;
      if (!existing.has(key)) {
        newFiles.push(file);
      }
    }

    setPhotoFiles(prev => [...prev, ...newFiles]);
  };

  const removePhoto = (index: number) => {
    setPhotoFiles(prev => prev.filter((_, idx) => idx !== index));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.trade.trim()) {
      newErrors.trade = 'Please choose or type a trade';
    }
    if (!formData.jobTitle.trim() || formData.jobTitle.trim().length < 5) {
      newErrors.jobTitle = 'Enter a short job title (≥ 5 chars)';
    }

    // Validate postcode based on config (if not remote job)
    if (!formData.isRemoteJob && (validationConfig?.requirePostcode !== false)) {
      if (!formData.postcode.trim()) {
        newErrors.postcode = validationConfig?.postcodeErrorMessage || 'Postcode is required';
      } else if (validationConfig?.postcodePattern && !validationConfig.postcodePattern.test(formData.postcode.trim().toUpperCase())) {
        newErrors.postcode = validationConfig.postcodeErrorMessage || 'Enter a valid postcode';
      }
    }

    if (!formData.description.trim() || formData.description.trim().length < 30) {
      newErrors.description = 'Please describe the job (at least 30 characters)';
    }
    if (!formData.budget) {
      newErrors.budget = 'Select a budget band';
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.email.trim() || !/.+@.+\..+/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.phone.trim() || !E164.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone (e.g. +447700900123)';
    }
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the Terms & Privacy';
    }

    // Honeypot check
    if (formData.company?.length) {
      setAlert({ type: 'error', message: 'Spam detected.' });
      return false;
    }

    if (photoFiles.length > MAX_PHOTOS) {
      setAlert({ type: 'error', message: `Max ${MAX_PHOTOS} photos.` });
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert({ type: '', message: '' });

    if (!validate()) return;

    // Show email verification screen
    setShowVerification(true);
  };

  const handleVerified = () => {
    setIsVerified(true);
    setShowVerification(false);

    // Log submission data
    console.log('Submitting payload… (demo)');
    console.log('Form Data:', formData);
    console.log('Photos:', photoFiles);
  };

  const handleCancelVerification = () => {
    setShowVerification(false);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setPhotoFiles([]);
    setErrors({});
    setAlert({ type: '', message: '' });
    setShowVerification(false);
    setIsVerified(false);
  };

  const fillMockData = (mockData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...mockData }));
    setErrors({});
    setAlert({ type: '', message: '' });
  };

  return {
    formData,
    errors,
    photoFiles,
    alert,
    showVerification,
    isVerified,
    isRemoteJob: formData.isRemoteJob,
    handleChange,
    handlePhotoChange,
    removePhoto,
    handleSubmit,
    handleVerified,
    handleCancelVerification,
    resetForm,
    fillMockData
  };
};
