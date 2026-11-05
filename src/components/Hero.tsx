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
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow mono"># {t.hero.eyebrow}</p>
          <p className="hero__prompt mono">
            <span aria-hidden>$</span> whoami
            <span className="cursor" aria-hidden />
          </p>
          <h1 className="hero__title">{site.name}</h1>
          <p className="hero__sub">{t.hero.subtitle}</p>
          <a
            href={site.resume[lang]}
            className="btn"
            onClick={(event) => {
              event.preventDefault();
              void downloadResume();
            }}
          >
            {t.hero.resume}
          </a>
          <ul className="hero__meta mono">
            {t.hero.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
