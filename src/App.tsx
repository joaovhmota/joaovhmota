import { useReveal } from './hooks/useReveal';
import { I18nProvider } from './i18n';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useReveal();
  return (
    <I18nProvider>
      <main>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh' }}>
          <Hero />
          <Nav />
        </div>
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}