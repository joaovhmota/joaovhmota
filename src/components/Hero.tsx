import { useI18n } from '../i18n/useI18n';
import { site } from '../site';

function getFilename(url: string): string {
  return decodeURIComponent(url.split('/').pop() ?? 'curriculo.pdf');
}

export default function Hero() {
  const { lang, t } = useI18n();

  const downloadResume = async () => {
    try {
      const res = await fetch(site.resume[lang]);
      if (!res.ok) throw new Error('Failed to fetch resume');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = getFilename(site.resume[lang]);
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      window.open(site.resume[lang], '_blank');
    }
  };

  return (
    <section
      id="top"
      style={{
        borderTop: 'none',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(94, 234, 212, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ textAlign: 'center' }}>
        <h1
          className="hero-title"
          style={{
            fontSize: 'clamp(28px, 6vw, 72px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            whiteSpace: 'nowrap',
            margin: '0 auto',
          }}
        >
          {site.name}
        </h1>
        <p
          className="hero-sub"
          style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '24px auto 0', fontSize: 20 }}
        >
          {t.hero.subtitle}
        </p>
        <a
          href={site.resume[lang]}
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            void downloadResume();
          }}
        >
          {t.hero.resume}
        </a>
      </div>
    </section>
  );
}