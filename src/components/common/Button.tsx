import type { ComponentPropsWithoutRef, ElementType } from 'react';

interface ButtonProps<T extends ElementType> {
  as?: T;
  variant?: 'solid' | 'outline';
  className?: string;
}

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'solid',
  className = '',
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Tag = as || 'button';

  const base =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200';
  const variants = {
    solid: 'bg-brand-red text-brand-white hover:bg-brand-red/90',
    outline:
      'border border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black',
  };

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
