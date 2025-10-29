import { useState } from 'react';
import { UK_POSTCODE, E164, MAX_PHOTOS } from '../components/JobPostForm/formConstants';

const initialFormData = {
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
  company: '' // honeypot
};

export const useJobPostForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [photoFiles, setPhotoFiles] = useState([]);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files || []);
    const existing = new Set(photoFiles.map(f => `${f.name}|${f.size}|${f.lastModified}`));
    const newFiles = [];

    for (const file of files) {
      if (photoFiles.length + newFiles.length >= MAX_PHOTOS) break;
      const key = `${file.name}|${file.size}|${file.lastModified}`;
      if (!existing.has(key)) {
        newFiles.push(file);
      }
    }

    setPhotoFiles(prev => [...prev, ...newFiles]);
  };

  const removePhoto = (index) => {
    setPhotoFiles(prev => prev.filter((_, idx) => idx !== index));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.trade.trim()) {
      newErrors.trade = 'Please choose or type a trade';
    }
    if (!formData.jobTitle.trim() || formData.jobTitle.trim().length < 5) {
      newErrors.jobTitle = 'Enter a short job title (≥ 5 chars)';
    }
    if (!formData.postcode.trim() || !UK_POSTCODE.test(formData.postcode.trim().toUpperCase())) {
      newErrors.postcode = 'Enter a valid UK postcode';
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
    if (formData.company && formData.company.length) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ type: '', message: '' });

    if (!validate()) return;

    try {
      // Demo: log the data instead of sending
      console.log('Submitting payload… (demo)');
      console.log('Form Data:', formData);
      console.log('Photos:', photoFiles);

      setAlert({
        type: 'ok',
        message: 'Thanks! Your job has been posted. We\'ve notified local professionals.'
      });

      // Reset form
      setFormData(initialFormData);
      setPhotoFiles([]);
      setErrors({});
    } catch (err) {
      setAlert({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return {
    formData,
    errors,
    photoFiles,
    alert,
    handleChange,
    handlePhotoChange,
    removePhoto,
    handleSubmit
  };
};
