import { useJobPostForm } from '../hooks/useJobPostForm';
import TradeSection from '../components/JobPostForm/TradeSection';
import DescriptionSection from '../components/JobPostForm/DescriptionSection';
import ContactSection from '../components/JobPostForm/ContactSection';
import LocationSection from '../components/JobPostForm/LocationSection';
import BudgetSection from '../components/JobPostForm/BudgetSection';
import PhotoUpload from '../components/JobPostForm/PhotoUpload';
import ConsentSection from '../components/JobPostForm/ConsentSection';
import Alert from '../components/JobPostForm/Alert';

const JobPostForm = () => {
  const {
    formData,
    errors,
    photoFiles,
    alert,
    handleChange,
    handlePhotoChange,
    removePhoto,
    handleSubmit
  } = useJobPostForm();

  return (
    <div className="max-w-[980px] mx-auto px-5 py-7 pb-16">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg">
        <header className="px-6 py-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Post your job – get quotes
          </h1>
        </header>

        <form className="p-6" onSubmit={handleSubmit} noValidate>
          {/* Trade & Job Title */}
          <TradeSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Description */}
          <DescriptionSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Contact Info */}
          <ContactSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Location */}
          <LocationSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Budget */}
          <BudgetSection formData={formData} errors={errors} handleChange={handleChange} />

          {/* Photos */}
          <PhotoUpload
            photos={photoFiles}
            onPhotosChange={handlePhotoChange}
            onRemovePhoto={removePhoto}
          />

          {/* Consent */}
          <ConsentSection formData={formData} errors={errors} handleChange={handleChange} />

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
          <div className="flex items-center gap-4 flex-wrap mt-6">
            <button
              type="submit"
              className="px-5 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all active:translate-y-px shadow-md"
            >
              Post your job – get quotes
            </button>
            <p className="text-sm text-gray-600">
              You'll get up to 3 quotes (usually within 24h on business days).
            </p>
          </div>

          {/* Alert */}
          <Alert type={alert.type} message={alert.message} />

          {/* Footer */}
          <p className="text-[11px] text-gray-500 mt-4 leading-relaxed">
            We respect your privacy. You can opt out of marketing at any time. Protected by
            reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
