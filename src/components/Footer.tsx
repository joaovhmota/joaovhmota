import { site } from '../site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner mono">
        <span>
          <span className="footer__ok">[ ok ]</span> {new Date().getFullYear()} {site.name} / {site.location}
        </span>
        <span>exit 0</span>
      </div>
    </footer>
  );
}
