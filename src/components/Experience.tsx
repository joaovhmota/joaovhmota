import { useI18n } from '../i18n/useI18n';
import { SECTION_ID } from '../sections';
import Section from './Section';

export default function Experience() {
  const { t } = useI18n();
  return (
    <Section id={SECTION_ID.experience} index="03" label={t.experience.label} title={t.experience.title}>
      <div className="timeline">
        {t.experience.roles.map((role) => (
          <article
            key={`${role.role}-${role.period}`}
            className={`card card--spacious timeline__item${role.highlight ? ' is-current' : ''}`}
          >
            <header className="role__head">
              <div>
                <h3 className="role__title">{role.role}</h3>
                <p className="role__company">{role.company}</p>
              </div>
              <span className="role__period mono">{role.period}</span>
            </header>
            <ul className="role__bullets">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
