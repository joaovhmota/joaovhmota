import { useI18n } from '../i18n/useI18n';
import { SECTION_ID } from '../sections';
import Section from './Section';

export default function About() {
  const { t } = useI18n();
  return (
    <Section id={SECTION_ID.about} label={t.about.label} title={t.about.title}>
      <p style={{ color: 'var(--text-muted)', maxWidth: 720, fontSize: 17 }}>
        {t.about.text}
      </p>
    </Section>
  );
}