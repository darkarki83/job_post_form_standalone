interface RegionSelectionProps {
  onNavigate: (page: string) => void;
}

const RegionSelection = ({ onNavigate }: RegionSelectionProps) => {

  const regions = [
    {
      code: 'UK',
      flag: '🇬🇧',
      name: 'United Kingdom',
      description: 'Post jobs in England, Scotland, Wales, or Northern Ireland',
      path: 'customer/uk/post-job'
    },
    {
      code: 'EU',
      flag: '🇪🇺',
      name: 'European Union',
      description: 'Post jobs in EU countries (GDPR compliant)',
      path: 'customer/eu/post-job'
    },
    {
      code: 'US',
      flag: '🇺🇸',
      name: 'United States',
      description: 'Post jobs in the USA and internationally',
      path: 'customer/us/post-job'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-5 py-12">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="mb-8 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Select Your Region
          </h1>
          <p className="text-lg text-gray-600">
            Choose your location to post a job and get matched with local professionals
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div
              key={region.code}
              onClick={() => onNavigate(region.path)}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {region.flag}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {region.name}
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  {region.description}
                </p>
                <button
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(region.path);
                  }}
                >
                  Select {region.code}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What happens next?
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>Fill out the job post form (takes 2-3 minutes)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>Verify your email address</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>Get matched with up to 3 verified professionals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span>Receive quotes and choose your preferred professional</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegionSelection;
