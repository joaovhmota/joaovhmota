import { useI18n } from '../i18n/useI18n';
import { SECTION_ID } from '../sections';
import { site } from '../site';
import Section from './Section';

export default function Project() {
  const { t } = useI18n();
  return (
    <Section id={SECTION_ID.project} index="04" label={t.project.label} title={t.project.title}>
      <article className="card card--spacious project">
        <div className="project__head">
          <span className="project__index mono">01</span>
          <div>
            <h3 className="project__name">{t.project.name}</h3>
            <p className="role__company">{t.project.lead}</p>
          </div>
        </div>
        <p className="project__text">{t.project.description}</p>
        <ul className="chips">
          {t.project.stack.map((item) => (
            <li key={item} className="chip mono">
              {item}
            </li>
          ))}
        </ul>
        <a className="project__link mono" href={site.projectUrl} target="_blank" rel="noreferrer">
          {t.project.link}
          <span aria-hidden>-&gt;</span>
        </a>
      </article>
    </Section>
  );
}
