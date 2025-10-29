import FormSelect from './FormSelect';
import FormInput from './FormInput';
import { COUNTRY_OPTIONS } from './formConstants';
import { FormSectionProps } from '../../types';

const LocationSection = ({ formData, errors, handleChange }: FormSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <FormSelect
        label="Country"
        id="country"
        value={formData.country}
        onChange={handleChange}
        options={COUNTRY_OPTIONS}
      />
      <FormInput
        label="Town / City"
        id="town"
        placeholder="e.g. Winnipeg"
        value={formData.town}
        onChange={handleChange}
      />
      <FormInput
        label="Postcode / ZIP"
        id="postcode"
        placeholder="e.g. SW1A 1AA"
        value={formData.postcode}
        onChange={handleChange}
        error={errors.postcode}
        required
      />
    </div>
  );
};

export default LocationSection;
