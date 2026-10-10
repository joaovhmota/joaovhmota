import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n/useI18n';
import { SECTION_ID } from '../sections';

const NAV_ITEMS = [SECTION_ID.about, SECTION_ID.skills, SECTION_ID.experience, SECTION_ID.contact] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Nav() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        setStuck(window.scrollY > window.innerHeight - 64);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {stuck && <div style={{ height: 64 }} />}
      <header
        ref={ref}
        style={{
          position: stuck ? 'fixed' : 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backdropFilter: 'blur(12px)',
          background: 'rgba(10, 10, 11, 0.72)',
          borderBottom: '1px solid var(--border)',
        }}
      >
      <nav
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 32,
          height: 64,
          fontSize: 14,
          color: 'var(--text-muted)',
        }}
      >
        {NAV_ITEMS.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: 'inherit',
              font: 'inherit',
              padding: 0,
            }}
          >
            {t.nav[id]}
          </button>
        ))}
      </nav>
      </header>
    </>
  );
}