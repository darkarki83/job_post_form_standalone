import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
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

      <div className="mb-4 -mt-2">
        <FormCheckbox
          id="isRemoteJob"
          checked={formData.isRemoteJob}
          onChange={handleChange}
        >
          Remove physical location
        </FormCheckbox>
      </div>

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
