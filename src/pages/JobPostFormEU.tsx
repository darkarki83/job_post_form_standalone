import { useJobPostForm } from '../hooks/useJobPostForm';
import TradeSection from '../components/JobPostForm/TradeSection';
import DescriptionSection from '../components/JobPostForm/DescriptionSection';
import ContactSection from '../components/JobPostForm/ContactSection';
import PhotoUpload from '../components/JobPostForm/PhotoUpload';
import Alert from '../components/JobPostForm/Alert';
import FormInput from '../components/JobPostForm/FormInput';
import FormSelect from '../components/JobPostForm/FormSelect';
import FormRadioGroup from '../components/JobPostForm/FormRadioGroup';
import FormCheckbox from '../components/JobPostForm/FormCheckbox';
import EmailVerification from '../components/EmailVerification';
import JobPostSuccess from '../components/JobPostSuccess';
import { EU_COUNTRY_OPTIONS, EU_BUDGET_OPTIONS, EU_LEGAL_LINKS } from '../constants/regionConstants';

interface JobPostFormEUProps {
  onNavigate: (page: string) => void;
}

const JobPostFormEU = ({ onNavigate }: JobPostFormEUProps) => {
  const {
    formData,
    errors,
    photoFiles,
    alert,
    showVerification,
    isVerified,
    isRemoteJob,
    handleChange,
    handlePhotoChange,
    removePhoto,
    handleSubmit,
    handleVerified,
    handleCancelVerification,
    resetForm,
    fillMockData
  } = useJobPostForm({
    postcodePattern: /^[0-9]{4,5}$/,
    postcodeErrorMessage: 'Enter a valid postcode',
    requirePostcode: true
  });

  // Mock data for EU form
  const handleFillMockData = () => {
    fillMockData({
      trade: 'Electrician',
      jobTitle: 'Install new ceiling lights',
      description: 'I need an electrician to install three new LED ceiling lights in my living room. Wiring is already in place.',
      firstName: 'Marie',
      email: 'marie.dubois@example.com',
      phone: '+33612345678',
      country: 'France',
      town: 'Paris',
      postcode: '75001',
      budget: '500_1000',
      consent: true,
      marketingOptIn: false
    });
  };

  // Show success screen after verification
  if (isVerified) {
    return (
      <JobPostSuccess
        onPostAnother={resetForm}
        onGoHome={() => onNavigate('home')}
      />
    );
  }

  // Show email verification screen
  if (showVerification) {
    return (
      <EmailVerification
        email={formData.email}
        onVerified={handleVerified}
        onCancel={handleCancelVerification}
      />
    );
  }

  return (
    <div className="max-w-[980px] mx-auto px-5 py-7 pb-16">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg">
        <header className="px-6 py-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🇪🇺</span>
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Post your job – get quotes (Europe)
            </h1>
          </div>
          <p className="text-sm text-gray-600">
            Connect with verified European professionals • GDPR Compliant
          </p>
        </header>

        <form className="p-6" onSubmit={handleSubmit} noValidate>
          {/* Trade & Job Title */}
          <TradeSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Description */}
          <DescriptionSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Contact Info */}
          <ContactSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Location - European specific */}
          <div className={`grid grid-cols-1 ${isRemoteJob ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4`}>
            <FormSelect
              label="Country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              options={EU_COUNTRY_OPTIONS}
              required
            />
            <FormInput
              label="Town / City"
              id="town"
              placeholder={isRemoteJob ? "e.g. Berlin (optional for remote)" : "e.g. Berlin, Paris, Madrid"}
              value={formData.town}
              onChange={handleChange}
              required={!isRemoteJob}
            />
            {!isRemoteJob && (
              <FormInput
                label="Postcode"
                id="postcode"
                placeholder="e.g. 10115, 75001"
                value={formData.postcode}
                onChange={handleChange}
                error={errors.postcode}
                required
                helperText="Enter your local postcode format"
              />
            )}
          </div>

          {/* Budget - EUR */}
          <FormRadioGroup
            label="Budget (rough estimate in EUR)"
            name="budget"
            options={EU_BUDGET_OPTIONS}
            value={formData.budget}
            onChange={handleChange}
            error={errors.budget}
            required
          />

          {/* Photos */}
          <PhotoUpload
            photos={photoFiles}
            onPhotosChange={handlePhotoChange}
            onRemovePhoto={removePhoto}
          />

          {/* GDPR Consent - European specific */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              🔒 Your Data Rights (GDPR)
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              {EU_LEGAL_LINKS.gdprNotice}
            </p>
          </div>

          <FormCheckbox
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            error={errors.consent}
          >
            I agree to the{' '}
            <button
              type="button"
              onClick={() => onNavigate('eu/terms')}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Terms of Service
            </button>{' '}
            and{' '}
            <button
              type="button"
              onClick={() => onNavigate('eu/privacy')}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Privacy Notice (GDPR)
            </button>
            . I understand my data will only be shared with relevant professionals in my region.
          </FormCheckbox>

          <FormCheckbox
            id="marketingOptIn"
            checked={formData.marketingOptIn}
            onChange={handleChange}
          >
            Send me tips, offers, and updates by email/SMS (optional).
          </FormCheckbox>

          {/* Honeypot */}
          <div className="absolute left-[-9999px]">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Submit */}
          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4 flex-wrap">
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all active:translate-y-px shadow-md"
              >
                Post your job – get quotes
              </button>
              <button
                type="button"
                onClick={handleFillMockData}
                className="px-5 py-3 bg-gradient-to-b from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all active:translate-y-px shadow-md"
              >
                🧪 Fill Test Data
              </button>
              <p className="text-sm text-gray-600">
                You'll receive up to 3 quotes from verified professionals within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Alert */}
          <Alert type={alert.type} message={alert.message} />

          {/* Footer - GDPR info */}
          <p className="text-[11px] text-gray-500 mt-4 leading-relaxed">
            {EU_LEGAL_LINKS.footerText}
          </p>
        </form>
      </div>
    </div>
  );
};

export default JobPostFormEU;
