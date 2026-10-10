import { useI18n } from '../i18n/useI18n';
import { site } from '../site';
import { SECTION_ID } from '../sections';
import Section from './Section';

export default function Contact() {
  const { t } = useI18n();
  const links = [
    { label: t.contact.email, value: site.email, href: `mailto:${site.email}` },
    { label: t.contact.linkedin, value: site.linkedin, href: site.linkedinUrl },
  ];
  return (
    <Section id={SECTION_ID.contact} label={t.contact.label} title={t.contact.title}>
      <div style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="card card--row">
            <span style={{ color: 'var(--text-muted)' }}>{l.label}</span>
            <span style={{ color: 'var(--accent)' }}>{l.value} →</span>
          </a>
        ))}
      </div>
    </Section>
  );
}