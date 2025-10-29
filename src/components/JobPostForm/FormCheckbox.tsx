import { FormCheckboxProps } from '../../types';

const FormCheckbox = ({ id, name, checked, onChange, children, error }: FormCheckboxProps) => {
  return (
    <div className="mb-3">
      <div className="flex gap-2.5 items-start">
        <input
          type="checkbox"
          id={id}
          name={name || id}
          checked={checked}
          onChange={onChange}
          className="mt-1 cursor-pointer w-4 h-4 text-blue-600 flex-shrink-0"
        />
        <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed">
          {children}
        </label>
      </div>
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
};

export default FormCheckbox;
