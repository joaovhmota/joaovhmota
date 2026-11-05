import { useI18n } from '../i18n/useI18n';
import { SECTION_ID } from '../sections';
import Section from './Section';

export default function About() {
  const { t } = useI18n();
  return (
    <Section id={SECTION_ID.about} index="01" label={t.about.label} title={t.about.title}>
      <div className="about">
        <p className="about__text">{t.about.text}</p>
        <dl className="about__facts">
          {t.about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="mono">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
