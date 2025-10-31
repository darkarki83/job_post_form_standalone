import { useState, FormEvent } from 'react';
import { TRADE_OPTIONS } from '../../components/JobPostForm/formConstants';

interface ProfessionalRegistrationProps {
  onNavigate: (page: string) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  profession: string;
  experience: string;
  services: string;
  website: string;
  linkedin: string;
  qualifications: string;
  ref1: string;
  ref2: string;
}

const ProfessionalRegistration = ({ onNavigate }: ProfessionalRegistrationProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    experience: '',
    services: '',
    website: '',
    linkedin: '',
    qualifications: '',
    ref1: '',
    ref2: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCustomProfession, setShowCustomProfession] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Handle profession dropdown
    if (name === 'profession') {
      if (value === 'Other…') {
        setShowCustomProfession(true);
        setFormData(prev => ({ ...prev, [name]: '' }));
      } else {
        setShowCustomProfession(false);
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFillDemo = () => {
    setFormData({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+44 7123 456789',
      city: 'Manchester',
      profession: 'Electrician',
      experience: '5-9',
      services: 'Domestic wiring, EV charger installs, fuse board upgrades.',
      website: 'https://example.com',
      linkedin: 'https://linkedin.com/in/janedoe',
      qualifications: 'NICEIC Certified, City & Guilds 2391.',
      ref1: 'Alex Smith – alex@example.com',
      ref2: 'Priya Patel – priya@example.com'
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const required = ['fullName', 'email', 'phone', 'city', 'profession', 'experience', 'services', 'qualifications', 'ref1', 'ref2'];

    required.forEach(field => {
      if (!formData[field as keyof FormData].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please complete all required fields correctly.');
      return;
    }

    // In production: POST to API
    console.log('Professional Registration Data:', formData);

    // Show success screen
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      profession: '',
      experience: '',
      services: '',
      website: '',
      linkedin: '',
      qualifications: '',
      ref1: '',
      ref2: ''
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-3xl mx-auto px-5 py-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-200 rounded-full px-4 py-2 text-sm mb-6">
              <span>✓</span>
              <span>Registration received</span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">
              You're nearly set!
            </h1>
            <p className="text-blue-200 text-lg mb-8">
              Next, complete identity verification and watch a 2-minute tutorial. Once KYC is approved, you can apply for jobs.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => onNavigate('professional/kyc')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                Start KYC Verification
              </button>
              <button
                onClick={() => onNavigate('professional/tutorial')}
                className="w-full bg-white/10 border border-white/20 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/15 transition-all"
              >
                View New-User Tutorial
              </button>
              <button
                onClick={() => onNavigate('professional/payouts')}
                className="w-full bg-transparent border border-dashed border-white/30 text-blue-200 font-semibold py-4 px-6 rounded-xl hover:border-white/50 transition-all"
              >
                Complete Payout Setup (optional)
              </button>
            </div>

            <p className="text-blue-300 text-sm mt-8">
              Having trouble?{' '}
              <a href="/help" className="text-blue-200 underline hover:text-white">
                Visit Help Centre
              </a>
              {' '}or{' '}
              <a href="mailto:support@example.com" className="text-blue-200 underline hover:text-white">
                contact support
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-5xl mx-auto px-5 py-12">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="mb-8 text-blue-200 hover:text-white flex items-center gap-2"
        >
          ← Back to Home
        </button>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Professional Registration
          </h1>
          <p className="text-blue-200 mb-8">
            Register as a service provider. After submitting, you'll be prompted to complete KYC and view a short tutorial.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-blue-100 mb-2">
                  Full Legal Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.fullName ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400`}
                  placeholder="Jane Doe"
                  required
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400`}
                  placeholder="jane@example.com"
                  required
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">
                  Phone *
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.phone ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400`}
                  placeholder="+44 7xxx xxxxxx"
                  required
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-blue-100 mb-2">
                  City/Town *
                </label>
                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.city ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400`}
                  placeholder="Manchester"
                  required
                />
                {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
              </div>
            </div>

            {/* Professional Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-blue-100 mb-2">
                  Primary Profession/Category *
                </label>
                {!showCustomProfession ? (
                  <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.profession ? 'border-red-400' : 'border-white/20'} rounded-xl text-white focus:outline-none focus:border-blue-400`}
                    required
                  >
                    <option value="">Select your profession…</option>
                    {TRADE_OPTIONS.map((trade) => (
                      <option key={trade} value={trade}>
                        {trade}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="space-y-2">
                    <input
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.profession ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400`}
                      placeholder="Enter your profession"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setShowCustomProfession(false);
                        setFormData(prev => ({ ...prev, profession: '' }));
                      }}
                      className="text-sm text-blue-300 hover:text-blue-200 underline"
                    >
                      ← Choose from list
                    </button>
                  </div>
                )}
                {errors.profession && <p className="text-red-400 text-xs mt-1">{errors.profession}</p>}
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-blue-100 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.experience ? 'border-red-400' : 'border-white/20'} rounded-xl text-white focus:outline-none focus:border-blue-400`}
                  required
                >
                  <option value="">Select…</option>
                  <option value="0-1">0-1</option>
                  <option value="2-4">2-4</option>
                  <option value="5-9">5-9</option>
                  <option value="10+">10+</option>
                </select>
                {errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience}</p>}
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <label htmlFor="services" className="block text-sm font-medium text-blue-100 mb-2">
                Services Offered *
              </label>
              <textarea
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.services ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 resize-vertical`}
                placeholder="Briefly list what you do"
                required
              />
              {errors.services && <p className="text-red-400 text-xs mt-1">{errors.services}</p>}
            </div>

            {/* Links */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-blue-100 mb-2">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  placeholder="https://yourdomain.com"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-blue-100 mb-2">
                  LinkedIn / Social
                </label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>

            {/* Qualifications */}
            <div className="mb-6">
              <label htmlFor="qualifications" className="block text-sm font-medium text-blue-100 mb-2">
                Key Qualifications & Certifications *
              </label>
              <textarea
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.qualifications ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 resize-vertical`}
                placeholder="e.g. BEng (Hons), NICEIC Certified, Gas Safe #..."
                required
              />
              {errors.qualifications && <p className="text-red-400 text-xs mt-1">{errors.qualifications}</p>}
            </div>

            {/* References */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="ref1" className="block text-sm font-medium text-blue-100 mb-2">
                  Reference 1 (Name & Email) *
                </label>
                <input
                  id="ref1"
                  name="ref1"
                  value={formData.ref1}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.ref1 ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400`}
                  placeholder="Alex Smith – alex@example.com"
                  required
                />
                {errors.ref1 && <p className="text-red-400 text-xs mt-1">{errors.ref1}</p>}
              </div>

              <div>
                <label htmlFor="ref2" className="block text-sm font-medium text-blue-100 mb-2">
                  Reference 2 (Name & Email) *
                </label>
                <input
                  id="ref2"
                  name="ref2"
                  value={formData.ref2}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.ref2 ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400`}
                  placeholder="Priya Patel – priya@example.com"
                  required
                />
                {errors.ref2 && <p className="text-red-400 text-xs mt-1">{errors.ref2}</p>}
              </div>
            </div>

            {/* Terms */}
            <div className="border-t border-white/10 my-6 pt-6">
              <p className="text-blue-200 text-sm mb-6">
                By submitting, you agree to our onboarding terms and privacy policy. KYC is required before you can apply for jobs.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg"
                >
                  Submit Registration
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-transparent border border-dashed border-white/30 text-blue-200 font-semibold py-3 px-8 rounded-xl hover:border-white/50 transition-all"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="bg-white/10 border border-white/20 text-blue-100 font-semibold py-3 px-8 rounded-xl hover:bg-white/15 transition-all"
                >
                  Run Demo (auto-fill)
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalRegistration;
