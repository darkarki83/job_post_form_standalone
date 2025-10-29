import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobPostForm from './pages/JobPostForm';
import JobPostFormUK from './pages/JobPostFormUK';
import JobPostFormEU from './pages/JobPostFormEU';
import JobPostFormUS from './pages/JobPostFormUS';
// Legal pages
import UKTerms from './pages/legal/UKTerms';
import UKPrivacy from './pages/legal/UKPrivacy';
import EUTerms from './pages/legal/EUTerms';
import EUPrivacy from './pages/legal/EUPrivacy';
import USTerms from './pages/legal/USTerms';
import USPrivacy from './pages/legal/USPrivacy';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigateToJobPost={handleNavigate} />;
      case 'job-post':
        return <JobPostForm />;
      case 'job-post-uk':
        return <JobPostFormUK onNavigate={handleNavigate} />;
      case 'job-post-eu':
        return <JobPostFormEU onNavigate={handleNavigate} />;
      case 'job-post-us':
        return <JobPostFormUS onNavigate={handleNavigate} />;
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
      default:
        return <Home onNavigateToJobPost={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
