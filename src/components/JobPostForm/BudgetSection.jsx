import FormRadioGroup from './FormRadioGroup';
import { BUDGET_OPTIONS } from './formConstants';

const BudgetSection = ({ formData, errors, handleChange }) => {
  return (
    <FormRadioGroup
      label="Budget (rough)"
      name="budget"
      options={BUDGET_OPTIONS}
      value={formData.budget}
      onChange={handleChange}
      error={errors.budget}
      required
    />
  );
};

export default BudgetSection;
