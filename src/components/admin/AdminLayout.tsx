import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
  onNavigate: (page: string) => void;
}

const AdminLayout = ({ children, onNavigate }: AdminLayoutProps) => {
  const currentPath = globalThis.location.hash || '#admin/job-posts';

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <nav className="flex space-x-2">
                <button
                  onClick={() => onNavigate('admin/job-posts')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    currentPath.includes('job-posts')
                      ? 'text-purple-700 bg-purple-100'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Job Posts
                </button>
                <button
                  onClick={() => onNavigate('admin/actions')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    currentPath.includes('actions')
                      ? 'text-purple-700 bg-purple-100'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Actions Log
                </button>
                <button
                  onClick={() => onNavigate('admin/analytics')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    currentPath.includes('analytics')
                      ? 'text-purple-700 bg-purple-100'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Analytics
                </button>
              </nav>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Back to Site
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
