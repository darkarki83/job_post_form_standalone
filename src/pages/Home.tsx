import { useState } from 'react';
import Button from '../components/Button';

interface HomeProps {
  onNavigateToJobPost: (region: string) => void;
}

const Home = ({ onNavigateToJobPost }: HomeProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className="px-8 py-12 max-w-7xl mx-auto">
      <section className="text-center py-12 mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to Job Post Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with professionals and get quotes for your projects
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Button onClick={() => onNavigateToJobPost('job-post-eu')}>
            🇪🇺 Post a Job (Europe)
          </Button>
          <Button onClick={() => onNavigateToJobPost('job-post-us')}>
            🇺🇸 Post a Job (USA)
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Job Posting</h3>
          <p className="text-gray-600">Create detailed job posts in minutes with our intuitive form</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Get Multiple Quotes</h3>
          <p className="text-gray-600">Receive up to 3 quotes from qualified professionals within 24 hours</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Trusted Professionals</h3>
          <p className="text-gray-600">Connect with verified tradespeople and service providers</p>
        </div>
      </section>

      <section className="text-center py-12 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Interactive Demo</h2>
        <p className="text-2xl mb-6 text-gray-900">Click count: {count}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
          <Button variant="secondary" onClick={() => setCount(count - 1)}>Decrement</Button>
          <Button variant="danger" onClick={() => setCount(0)}>Reset</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
