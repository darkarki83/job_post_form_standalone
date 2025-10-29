import FormInput from './FormInput';
import { FormSectionProps } from '../../types';

const ContactSection = ({ formData, errors, handleChange }: FormSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <FormInput
        label="First name"
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        required
        autoComplete="given-name"
      />
      <FormInput
        label="Email"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        autoComplete="email"
      />
      <FormInput
        label="Phone"
        id="phone"
        type="tel"
        placeholder="+447700900123"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        required
        autoComplete="tel"
      />
    </div>
  );
};

export default ContactSection;
