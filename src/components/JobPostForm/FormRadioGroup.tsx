import { FormRadioGroupProps } from '../../types';

const FormRadioGroup = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false
}: FormRadioGroupProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2.5 px-3 py-3 border rounded-lg bg-white cursor-pointer transition-all hover:border-blue-600 hover:bg-blue-50/50 ${
              value === option.value ? 'border-blue-600 bg-blue-50/50' : 'border-gray-300'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="cursor-pointer text-blue-600"
            />
            <span className={value === option.value ? 'font-semibold' : ''}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
};

export default FormRadioGroup;
