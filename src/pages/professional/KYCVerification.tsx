interface KYCVerificationProps {
  onNavigate: (page: string) => void;
}

const KYCVerification = ({ onNavigate }: KYCVerificationProps) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-5 py-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            KYC Verification
          </h1>
          <p className="text-blue-200 text-lg mb-8">
            Complete your identity verification to start receiving job requests.
          </p>

          {/* Why KYC is needed */}
          <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span>🔒</span> Why do we need this?
            </h3>
            <div className="text-blue-200 space-y-2">
              <p className="leading-relaxed">
                <strong className="text-white">Your safety and our customers' trust matter.</strong> KYC (Know Your Customer) verification helps us:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Build trust:</strong> Customers feel safer hiring verified professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Prevent fraud:</strong> Protect both you and customers from scammers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Secure payments:</strong> Enable safe transactions and timely payouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Legal compliance:</strong> Meet regulatory requirements in your region</span>
                </li>
              </ul>
              <p className="text-sm mt-3 text-blue-300">
                🔐 Your information is encrypted and stored securely. We never share your personal details with customers.
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">📄 Documents Required</h3>
              <ul className="text-blue-200 space-y-2">
                <li>• <strong className="text-white">Government-issued ID</strong> (Passport, Driver's License)</li>
                <li>• <strong className="text-white">Phone with camera</strong> (for selfie verification)</li>
              </ul>
              <p className="text-sm text-blue-300 mt-3">
                Optional but recommended: Professional certifications or licenses
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">⏱️ Processing Time</h3>
              <p className="text-blue-200">
                Verification typically takes 24-48 hours. You'll receive an email once approved.
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-6 mb-8">
            <p className="text-yellow-200 text-sm">
              🚧 This page is under construction. KYC verification will be integrated with a third-party service.
            </p>
          </div>

          <button
            onClick={() => onNavigate('professional/tutorial')}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            Continue to Tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCVerification;
