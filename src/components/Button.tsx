import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
}) => {
  const baseStyles = 'inline-block rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-purple-300 hover:bg-purple-400 text-white shadow-sm px-8 py-3 focus:ring-purple-300',
    secondary: 'bg-amber-100 hover:bg-amber-200 text-gray-700 shadow-sm px-8 py-3 focus:ring-amber-100',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;