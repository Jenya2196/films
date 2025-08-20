import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'danger' | 'success' | 'default';

type Props = {
  className?: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = `
  px-4 py-2 rounded-md font-medium 
  transition-all duration-300 
  focus:outline-none focus:ring-0
`;

const variants: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
  default: 'bg-gray-300 text-black hover:bg-gray-400',
};

export default function Button({
  className,
  variant = 'primary',
  children,
  ...rest
}: Props) {
  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
