interface PayoutSetupProps {
  onNavigate: (page: string) => void;
}

const PayoutSetup = ({ onNavigate }: PayoutSetupProps) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-5 py-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Payout Setup
          </h1>
          <p className="text-blue-200 text-lg mb-8">
            Configure how you want to receive payments for completed jobs.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">💳 Payment Methods</h3>
              <ul className="text-blue-200 space-y-2">
                <li>• Direct Bank Transfer (ACH/SEPA)</li>
                <li>• PayPal</li>
                <li>• Stripe Connect</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">📅 Payout Schedule</h3>
              <p className="text-blue-200">
                Payments are processed weekly every Friday after job completion and customer approval.
              </p>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-6 mb-8">
            <p className="text-yellow-200 text-sm">
              🚧 Payment integration coming soon. You can skip this step for now.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => onNavigate('professional/dashboard')}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => onNavigate('professional/tutorial')}
              className="flex-1 bg-white/10 border border-white/20 text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/15 transition-all"
            >
              Back to Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutSetup;
