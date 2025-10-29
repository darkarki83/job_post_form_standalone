const FormTextarea = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  maxLength,
  showCounter = false
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        {label && (
          <label htmlFor={id} className="block text-sm font-semibold text-gray-900">
            {label}
            {required && <span className="text-red-600 ml-1">*</span>}
          </label>
        )}
        {showCounter && maxLength && (
          <span className="text-xs text-gray-500">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={`w-full px-3 py-2.5 bg-white border rounded-lg outline-none transition-all min-h-[120px] resize-y ${
          error
            ? 'border-red-600 focus:ring-2 focus:ring-red-600/20'
            : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20'
        }`}
        required={required}
      />
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
};

export default FormTextarea;
