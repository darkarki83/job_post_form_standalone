import Button from './Button';

interface JobPostSuccessProps {
  onPostAnother: () => void;
  onGoHome: () => void;
}

const JobPostSuccess = ({ onPostAnother, onGoHome }: JobPostSuccessProps) => {
  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg text-center">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Your Job Post is Live!
        </h2>
        <p className="text-lg text-gray-600">
          We've successfully verified your email and posted your job.
        </p>
      </div>

      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
        <ul className="text-left text-sm text-blue-800 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>Local professionals have been notified about your job</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>You'll receive up to 3 quotes within 24 hours</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            <span>We've sent a confirmation email with your job details</span>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        <Button onClick={onPostAnother}>
          Post Another Job
        </Button>
        <Button variant="secondary" onClick={onGoHome}>
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default JobPostSuccess;
