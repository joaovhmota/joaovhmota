import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, index, label, title, children }: SectionProps) {
  return (
    <section id={id}>
      <div className="container reveal">
        <p className="section-label mono">
          <span aria-hidden>$</span> cd ~/{id}
          <span className="section-label__note">
            # {label} [{index}]
          </span>
        </p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
