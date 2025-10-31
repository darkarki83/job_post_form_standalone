import { useEffect } from 'react';
import { useJobPostForm } from '../../hooks/useJobPostForm';
import { useAnalyticsTracking } from '../../hooks/useAnalyticsTracking';
import TradeSection from '../../components/JobPostForm/TradeSection';
import DescriptionSection from '../../components/JobPostForm/DescriptionSection';
import ContactSection from '../../components/JobPostForm/ContactSection';
import PhotoUpload from '../../components/JobPostForm/PhotoUpload';
import Alert from '../../components/JobPostForm/Alert';
import FormInput from '../../components/JobPostForm/FormInput';
import FormSelect from '../../components/JobPostForm/FormSelect';
import FormRadioGroup from '../../components/JobPostForm/FormRadioGroup';
import FormCheckbox from '../../components/JobPostForm/FormCheckbox';
import EmailVerification from '../../components/EmailVerification';
import JobPostSuccess from '../../components/JobPostSuccess';
import { US_COUNTRY_OPTIONS, US_BUDGET_OPTIONS, US_LEGAL_LINKS } from '../../constants/regionConstants';

interface JobPostFormUSProps {
  onNavigate: (page: string) => void;
}

const JobPostFormUS = ({ onNavigate }: JobPostFormUSProps) => {
  const { trackFormView, trackFormSubmit, trackEmailVerified } = useAnalyticsTracking();

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
    handleVerified: originalHandleVerified,
    handleCancelVerification,
    resetForm,
    fillMockData
  } = useJobPostForm({
    postcodePattern: /^\d{5}(-\d{4})?$/,
    postcodeErrorMessage: 'Enter a valid ZIP code (e.g. 12345 or 12345-6789)',
    requirePostcode: true
  });

  // Track form view when component mounts
  useEffect(() => {
    trackFormView('US');
  }, [trackFormView]);

  // Wrap handleVerified to add analytics tracking
  const handleVerified = () => {
    // Generate a post ID (in real app, this would come from backend)
    const postId = `job-us-${Date.now()}`;

    // Track form submission
    trackFormSubmit(postId, 'US');

    // Track email verification
    trackEmailVerified(postId);

    // Call original handler
    originalHandleVerified();
  };

  // Mock data for US form
  const handleFillMockData = () => {
    fillMockData({
      trade: 'HVAC Technician',
      jobTitle: 'AC unit maintenance and repair',
      description: 'My air conditioning unit is not cooling properly and needs maintenance. The unit is about 5 years old and located on the roof.',
      firstName: 'Sarah',
      email: 'sarah.johnson@example.com',
      phone: '+14155551234',
      country: 'California',
      town: 'San Francisco',
      postcode: '94102',
      budget: '1000_2500',
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
        <header className="px-6 py-6 border-b border-gray-200 bg-gradient-to-r from-red-50 via-white to-blue-50">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🇺🇸</span>
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Post your job – get quotes (USA & International)
            </h1>
          </div>
          <p className="text-sm text-gray-600">
            Connect with trusted professionals across the USA and internationally
          </p>
        </header>

        <form className="p-6" onSubmit={handleSubmit} noValidate>
          {/* Trade & Job Title */}
          <TradeSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Description */}
          <DescriptionSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Contact Info */}
          <ContactSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Location - US specific */}
          <div className={`grid grid-cols-1 ${isRemoteJob ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4`}>
            <FormSelect
              label="Country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              options={US_COUNTRY_OPTIONS}
              required
            />
            <FormInput
              label="City"
              id="town"
              placeholder={isRemoteJob ? "e.g. New York (optional for remote)" : "e.g. New York, Los Angeles"}
              value={formData.town}
              onChange={handleChange}
              required={!isRemoteJob}
            />
            {!isRemoteJob && (
              <FormInput
                label="ZIP Code"
                id="postcode"
                placeholder="e.g. 10001"
                value={formData.postcode}
                onChange={handleChange}
                error={errors.postcode}
                required
                helperText="5-digit ZIP code"
              />
            )}
          </div>

          {/* Budget - USD */}
          <FormRadioGroup
            label="Budget (rough estimate in USD)"
            name="budget"
            options={US_BUDGET_OPTIONS}
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

          {/* Privacy Notice - US specific */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              🔒 Your Privacy
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              {US_LEGAL_LINKS.privacyNotice}
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
              onClick={() => onNavigate('us/terms')}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Terms of Service
            </button>{' '}
            and{' '}
            <button
              type="button"
              onClick={() => onNavigate('us/privacy')}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Privacy Policy
            </button>
            . My information will be shared with qualified professionals to provide quotes.
          </FormCheckbox>

          <FormCheckbox
            id="marketingOptIn"
            checked={formData.marketingOptIn}
            onChange={handleChange}
          >
            Yes, send me helpful tips and special offers via email/SMS (optional).
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
                Get up to 3 free quotes, usually within 24 hours on business days.
              </p>
            </div>
          </div>

          {/* Alert */}
          <Alert type={alert.type} message={alert.message} />

          {/* Footer - US legal info */}
          <p className="text-[11px] text-gray-500 mt-4 leading-relaxed">
            {US_LEGAL_LINKS.footerText}
          </p>
        </form>
      </div>
    </div>
  );
};

export default JobPostFormUS;
