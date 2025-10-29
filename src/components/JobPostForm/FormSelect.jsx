const FormSelect = ({
  label,
  id,
  value,
  onChange,
  options,
  error,
  required = false,
  placeholder = 'Select...'
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-gray-900 mb-2">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2.5 bg-white border rounded-lg outline-none transition-all cursor-pointer ${
          error
            ? 'border-red-600 focus:ring-2 focus:ring-red-600/20'
            : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20'
        }`}
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
};

export default FormSelect;
