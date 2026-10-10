import { useI18n } from '../i18n/useI18n';
import { site } from '../site';

export default function Footer() {
  const { lang, setLang, t } = useI18n();
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 0',
        color: 'var(--text-muted)',
        fontSize: 13,
        textAlign: 'center',
        display: 'grid',
        gap: 12,
        justifyItems: 'center',
      }}
    >
      <span>© 2026 {site.name} · {site.location}</span>
      <span role="group" aria-label={t.footer.switcher} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {(['pt-BR', 'en-US'] as const).map((l, i) => (
          <span key={l} style={{ display: 'flex', gap: 8 }}>
            {i > 0 && <span>·</span>}
            <button
              onClick={() => setLang(l)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                font: 'inherit',
                padding: 0,
                color: lang === l ? 'var(--accent)' : 'var(--text-muted)',
                fontWeight: lang === l ? 600 : 400,
              }}
            >
              {l}
            </button>
          </span>
        ))}
      </span>
    </footer>
  );
}