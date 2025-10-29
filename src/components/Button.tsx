import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, variant = 'primary', disabled = false, type = 'button' }: ButtonProps) => {
  const variants = {
    primary: 'bg-gradient-to-b from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg',
    danger: 'bg-red-600 text-white hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg'
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium cursor-pointer transition-all active:translate-y-px disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
