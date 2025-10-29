import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobPostForm from './pages/JobPostForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigateToJobPost={() => handleNavigate('job-post')} />;
      case 'job-post':
        return <JobPostForm />;
      default:
        return <Home onNavigateToJobPost={() => handleNavigate('job-post')} />;
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
