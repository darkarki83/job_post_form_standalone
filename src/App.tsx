import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobPostForm from './pages/JobPostForm';
import JobPostFormEU from './pages/JobPostFormEU';
import JobPostFormUS from './pages/JobPostFormUS';

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
      case 'job-post-eu':
        return <JobPostFormEU />;
      case 'job-post-us':
        return <JobPostFormUS />;
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
