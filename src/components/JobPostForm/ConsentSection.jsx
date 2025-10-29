import FormCheckbox from './FormCheckbox';

const ConsentSection = ({ formData, errors, handleChange }) => {
  return (
    <>
      <FormCheckbox
        id="consent"
        checked={formData.consent}
        onChange={handleChange}
        error={errors.consent}
      >
        I agree to the{' '}
        <a href="/terms" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          Terms
        </a>{' '}
        and{' '}
        <a href="/privacy" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          Privacy Notice
        </a>
        . We'll share your details only with relevant professionals so they can quote.
      </FormCheckbox>

      <FormCheckbox
        id="marketingOptIn"
        checked={formData.marketingOptIn}
        onChange={handleChange}
      >
        Send me tips & offers by email/SMS.
      </FormCheckbox>
    </>
  );
};

export default ConsentSection;
