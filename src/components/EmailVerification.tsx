import { useState } from 'react';
import Button from './Button';

interface EmailVerificationProps {
  email: string;
  onVerified: () => void;
  onCancel: () => void;
}

const EmailVerification = ({ email, onVerified, onCancel }: EmailVerificationProps) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);

  // Mock verification code (in production, this would be sent via email)
  const MOCK_CODE = '123456';

  const handleVerify = () => {
    if (verificationCode === MOCK_CODE) {
      onVerified();
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  const handleResend = () => {
    setIsResending(true);
    // Simulate sending email
    setTimeout(() => {
      setIsResending(false);
      alert(`Verification code resent to ${email}\n\nFor testing, use code: ${MOCK_CODE}`);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Verify Your Email</h2>

      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
        <p className="text-sm text-blue-900">
          We've sent a verification code to:
        </p>
        <p className="font-semibold text-blue-900 mt-1">{email}</p>
      </div>

      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-xs text-yellow-900">
          <strong>TEST MODE:</strong> Use code: <code className="font-mono bg-yellow-100 px-1">{MOCK_CODE}</code>
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="verification-code" className="block text-sm font-medium text-gray-700 mb-2">
          Enter verification code
        </label>
        <input
          id="verification-code"
          type="text"
          value={verificationCode}
          onChange={(e) => {
            setVerificationCode(e.target.value);
            setError('');
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter 6-digit code"
          maxLength={6}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>

      <div className="flex gap-3 mb-4">
        <Button onClick={handleVerify} disabled={verificationCode.length !== 6}>
          Verify Email
        </Button>
        <Button variant="secondary" onClick={handleResend} disabled={isResending}>
          {isResending ? 'Sending...' : 'Resend Code'}
        </Button>
      </div>

      <button
        type="button"
        onClick={onCancel}
        className="text-sm text-gray-600 hover:text-gray-900 underline"
      >
        Cancel and go back
      </button>
    </div>
  );
};

export default EmailVerification;
