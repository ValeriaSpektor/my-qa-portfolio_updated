import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export function Section({ id, className = '', children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${dark ? 'bg-dark-900 text-white' : 'bg-white text-dark-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, dark = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${dark ? 'text-white' : 'text-dark-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 mt-6 ${centered ? 'mx-auto' : ''} bg-primary-500 rounded-full`}></div>
    </div>
  );
}
