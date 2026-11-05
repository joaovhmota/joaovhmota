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
    <Section id={SECTION_ID.contact} index="05" label={t.contact.label} title={t.contact.title}>
      <div className="contact">
        <p className="contact__note">{t.contact.note}</p>
        <div className="contact__links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="card card--row contact__link"
            >
              <span>{link.label}</span>
              <span className="contact__value">
                {link.value}
                <span aria-hidden>-&gt;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
