import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const baseStyles = `
    w-full
    px-4 py-2 rounded-md font-medium 
    transition-all duration-300 
    border border-white/80 
    focus:outline-none focus:ring-0
`;

export default function Input({
  className,
  ...rest
}: Props) {
  return (
    <input
      className={clsx(baseStyles, className)}
      {...rest}
    />
  );
}
