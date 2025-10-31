import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// Main pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import JobPostForm from './pages/JobPostForm';
// Customer pages
import RegionSelection from './pages/customer/RegionSelection';
import JobPostFormUK from './pages/customer/JobPostFormUK';
import JobPostFormEU from './pages/customer/JobPostFormEU';
import JobPostFormUS from './pages/customer/JobPostFormUS';
// Professional pages
import ProfessionalRegistration from './pages/professional/ProfessionalRegistration';
import KYCVerification from './pages/professional/KYCVerification';
import Tutorial from './pages/professional/Tutorial';
import PayoutSetup from './pages/professional/PayoutSetup';
import ProfessionalDashboard from './pages/professional/ProfessionalDashboard';
// Legal pages
import UKTerms from './pages/legal/UKTerms';
import UKPrivacy from './pages/legal/UKPrivacy';
import EUTerms from './pages/legal/EUTerms';
import EUPrivacy from './pages/legal/EUPrivacy';
import USTerms from './pages/legal/USTerms';
import USPrivacy from './pages/legal/USPrivacy';
// Admin pages
import AdminJobPosts from './pages/admin/AdminJobPosts';
import AdminActionsLog from './pages/admin/AdminActionsLog';
import AdminAnalytics from './pages/admin/AdminAnalytics';
// Context providers
import { JobPostProvider } from './contexts/JobPostContext';
import { AdminActionsProvider } from './contexts/AdminActionsContext';
import { AnalyticsProvider } from './contexts/AnalyticsContext';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      // Main landing page
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'old-home':
        return <Home onNavigateToJobPost={handleNavigate} />;
      case 'job-post':
        return <JobPostForm />;

      // Customer pages
      case 'customer/select-region':
        return <RegionSelection onNavigate={handleNavigate} />;
      case 'customer/uk/post-job':
      case 'job-post-uk':
        return <JobPostFormUK onNavigate={handleNavigate} />;
      case 'customer/eu/post-job':
      case 'job-post-eu':
        return <JobPostFormEU onNavigate={handleNavigate} />;
      case 'customer/us/post-job':
      case 'job-post-us':
        return <JobPostFormUS onNavigate={handleNavigate} />;

      // Professional pages
      case 'professional/register':
        return <ProfessionalRegistration onNavigate={handleNavigate} />;
      case 'professional/kyc':
        return <KYCVerification onNavigate={handleNavigate} />;
      case 'professional/tutorial':
        return <Tutorial onNavigate={handleNavigate} />;
      case 'professional/payouts':
        return <PayoutSetup onNavigate={handleNavigate} />;
      case 'professional/dashboard':
        return <ProfessionalDashboard onNavigate={handleNavigate} />;

      // UK Legal pages
      case 'uk/terms':
        return <UKTerms onNavigate={handleNavigate} />;
      case 'uk/privacy':
        return <UKPrivacy onNavigate={handleNavigate} />;
      // EU Legal pages
      case 'eu/terms':
        return <EUTerms onNavigate={handleNavigate} />;
      case 'eu/privacy':
        return <EUPrivacy onNavigate={handleNavigate} />;
      // US Legal pages
      case 'us/terms':
        return <USTerms onNavigate={handleNavigate} />;
      case 'us/privacy':
        return <USPrivacy onNavigate={handleNavigate} />;

      // Admin pages
      case 'admin':
      case 'admin/job-posts':
        return <AdminJobPosts onNavigate={handleNavigate} />;
      case 'admin/actions':
        return <AdminActionsLog onNavigate={handleNavigate} />;
      case 'admin/analytics':
        return <AdminAnalytics onNavigate={handleNavigate} />;

      default:
        return <LandingPage />;
    }
  };

  return (
    <AnalyticsProvider>
      <AdminActionsProvider>
        <JobPostProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <main className="flex-1">
              {renderPage()}
            </main>
            <Footer />
          </div>
        </JobPostProvider>
      </AdminActionsProvider>
    </AnalyticsProvider>
  );
}

export default App;
