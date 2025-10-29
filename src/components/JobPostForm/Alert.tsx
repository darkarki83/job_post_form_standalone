import { AlertProps } from '../../types';

const Alert = ({ type, message }: AlertProps) => {
  if (!message) return null;

  const styles: Record<'ok' | 'error', string> = {
    ok: 'text-green-900 bg-green-50 border-green-200',
    error: 'text-red-900 bg-red-50 border-red-200'
  };

  const styleClass = type ? styles[type as 'ok' | 'error'] : styles.error;

  return (
    <div
      className={`mt-4 px-4 py-3 rounded-lg border ${styleClass}`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
