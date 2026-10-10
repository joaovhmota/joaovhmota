import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id}>
      <div className="container reveal">
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}