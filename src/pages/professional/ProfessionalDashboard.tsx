interface ProfessionalDashboardProps {
  onNavigate: (page: string) => void;
}

const ProfessionalDashboard = ({ onNavigate }: ProfessionalDashboardProps) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Professional Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's your activity overview.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-gray-600 text-sm mb-1">Available Jobs</p>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-gray-600 text-sm mb-1">Quotes Sent</p>
            <p className="text-3xl font-bold text-blue-600">5</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-gray-600 text-sm mb-1">Active Jobs</p>
            <p className="text-3xl font-bold text-green-600">2</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-gray-600 text-sm mb-1">Total Earnings</p>
            <p className="text-3xl font-bold text-purple-600">£2,450</p>
          </div>
        </div>

        {/* Available Jobs */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Available Jobs Near You
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              🚧 Job matching system coming soon. This will show jobs that match your skills and location.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => onNavigate('home')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            View All Jobs
          </button>
          <button
            onClick={() => onNavigate('professional/profile')}
            className="bg-white border border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all"
          >
            Edit Profile
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="bg-white border border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
