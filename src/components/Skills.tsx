import { useI18n } from '../i18n/useI18n';
import { SECTION_ID } from '../sections';
import Section from './Section';

export default function Skills() {
  const { t } = useI18n();
  return (
    <Section id={SECTION_ID.skills} index="02" label={t.skills.label} title={t.skills.title}>
      <div className="card-grid">
        {t.skills.groups.map((group, index) => (
          <article key={group.title} className="card skill">
            <span className="skill__index mono">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="card-title">{group.title}</h3>
            <ul className="card-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
