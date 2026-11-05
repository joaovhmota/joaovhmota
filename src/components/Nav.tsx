import { useI18n } from '../i18n/useI18n';
import { SECTION_ID } from '../sections';
import { site } from '../site';

const NAV_ITEMS = [
  SECTION_ID.about,
  SECTION_ID.skills,
  SECTION_ID.experience,
  SECTION_ID.project,
  SECTION_ID.contact,
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Nav() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <button
          className="nav__brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={site.name}
        >
          joao@dev:~
        </button>

        <nav className="nav__links">
          {NAV_ITEMS.map((id) => (
            <button key={id} className="nav__link" onClick={() => scrollTo(id)}>
              {t.nav[id]}
            </button>
          ))}
        </nav>

        <div className="nav__lang" role="group" aria-label={t.footer.switcher}>
          {(['pt-BR', 'en-US'] as const).map((value) => (
            <button
              key={value}
              className={value === lang ? 'is-active' : undefined}
              aria-pressed={value === lang}
              onClick={() => setLang(value)}
            >
              {value === 'pt-BR' ? 'PT' : 'EN'}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
