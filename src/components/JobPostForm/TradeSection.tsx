import FormInput from './FormInput';
import { TRADE_OPTIONS } from './formConstants';
import { FormSectionProps } from '../../types';

const TradeSection = ({ formData, errors, handleChange }: FormSectionProps) => {
  return (
    <>
      <FormInput
        label="Trade"
        id="trade"
        placeholder="Choose or type a trade…"
        value={formData.trade}
        onChange={handleChange}
        error={errors.trade}
        required
        list="tradeOptions"
      />
      <datalist id="tradeOptions">
        {TRADE_OPTIONS.map(trade => (
          <option key={trade} value={trade} />
        ))}
      </datalist>

      <FormInput
        label="Job title"
        id="jobTitle"
        placeholder="e.g. Paint 2 rooms in a condo"
        value={formData.jobTitle}
        onChange={handleChange}
        error={errors.jobTitle}
        required
      />
    </>
  );
};

export default TradeSection;
