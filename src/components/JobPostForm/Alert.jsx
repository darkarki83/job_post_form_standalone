const Alert = ({ type, message }) => {
  if (!message) return null;

  const styles = {
    ok: 'text-green-900 bg-green-50 border-green-200',
    error: 'text-red-900 bg-red-50 border-red-200'
  };

  return (
    <div
      className={`mt-4 px-4 py-3 rounded-lg border ${styles[type] || styles.error}`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
