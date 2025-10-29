import FormTextarea from './FormTextarea';
import { FormSectionProps } from '../../types';

const DescriptionSection = ({ formData, errors, handleChange }: FormSectionProps) => {
  return (
    <FormTextarea
      label="Describe the job"
      id="description"
      placeholder="What needs doing? Include sizes, access, timings, materials, photos…"
      value={formData.description}
      onChange={handleChange}
      error={errors.description}
      required
      maxLength={2000}
      showCounter
    />
  );
};

export default DescriptionSection;
