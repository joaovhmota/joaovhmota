import { useI18n } from '../i18n/useI18n';
import { SECTION_ID } from '../sections';
import Section from './Section';

export default function Experience() {
  const { t } = useI18n();
  return (
    <Section id={SECTION_ID.experience} label={t.experience.label} title={t.experience.title}>
      <div style={{ display: 'grid', gap: 24 }}>
        {t.experience.roles.map((r, i) => (
          <article
            key={i}
            className={`card card--spacious${r.highlight ? ' card--highlight' : ''}`}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 16,
              }}
            >
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600 }}>{r.role}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>{r.company}</p>
              </div>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{r.period}</span>
            </div>
            <ul style={{ paddingLeft: 20, display: 'grid', gap: 6 }}>
              {r.bullets.map((b) => (
                <li key={b} style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}