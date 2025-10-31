interface TutorialProps {
  onNavigate: (page: string) => void;
}

const Tutorial = ({ onNavigate }: TutorialProps) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-5xl mx-auto px-5 py-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome Tutorial
          </h1>
          <p className="text-blue-200 text-lg mb-8">
            Learn how to get the most out of our platform in 2 minutes.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Browse Jobs</h3>
              <p className="text-blue-200 text-sm">
                View job requests in your area that match your skills and expertise.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Send Quotes</h3>
              <p className="text-blue-200 text-sm">
                Submit your quote with details about your services and pricing.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Get Hired</h3>
              <p className="text-blue-200 text-sm">
                Customer reviews quotes and selects their preferred professional.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-white mb-2">4. Get Paid</h3>
              <p className="text-blue-200 text-sm">
                Complete the job and receive payment through our secure platform.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('professional/dashboard')}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
