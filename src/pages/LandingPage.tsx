interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

const LandingPage = ({ onNavigate }: LandingPageProps) => {
  const navigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-5 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Job Connect Platform
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Connect customers with verified professionals. Choose your role to get started.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Customer Card */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all cursor-pointer group"
            onClick={() => navigate('customer/select-region')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-5xl">📝</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Need a Job Done?
              </h2>
              <p className="text-blue-200 mb-6">
                Post your job and receive quotes from verified professionals in your area.
              </p>
              <ul className="text-left text-blue-100 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Free to post job requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Get up to 3 quotes within 24-48 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Verified professionals only
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  No upfront payment required
                </li>
              </ul>
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg group-hover:shadow-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('customer/select-region');
                }}
              >
                Post a Job →
              </button>
            </div>
          </div>

          {/* Professional Card */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all cursor-pointer group"
            onClick={() => navigate('professional/register')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-5xl">👨‍🔧</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Are You a Professional?
              </h2>
              <p className="text-blue-200 mb-6">
                Register as a service provider and start receiving job requests from customers.
              </p>
              <ul className="text-left text-blue-100 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Get matched with local jobs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Build your professional profile
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Quick KYC verification process
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Flexible payment options
                </li>
              </ul>
              <button
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg group-hover:shadow-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('professional/register');
                }}
              >
                Register as Professional →
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="text-lg font-semibold text-white mb-2">Secure & Verified</h4>
              <p className="text-blue-200 text-sm">
                All professionals undergo KYC verification and background checks
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-2">Fast Matching</h4>
              <p className="text-blue-200 text-sm">
                Get matched with qualified professionals within 24-48 hours
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="text-lg font-semibold text-white mb-2">Fair Pricing</h4>
              <p className="text-blue-200 text-sm">
                Compare multiple quotes and choose the best option for you
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-blue-300 text-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigate('login')}
              className="text-blue-400 hover:text-blue-300 underline font-medium"
            >
              Sign In
            </button>
            {' '}|{' '}
            <button
              onClick={() => navigate('admin')}
              className="text-purple-400 hover:text-purple-300 underline font-medium"
            >
              Admin Access
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
