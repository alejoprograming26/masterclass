import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  tone?: 'light' | 'dark';
}

export function Eyebrow({ children, tone = 'light' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] ${
        tone === 'dark'
          ? 'border-white/15 bg-white/5 text-cream-100'
          : 'border-forest-100 bg-forest-50 text-forest-700'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-lime-brand" aria-hidden="true" />
      {children}
    </span>
  );
}
