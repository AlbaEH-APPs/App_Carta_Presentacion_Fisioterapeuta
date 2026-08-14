import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { CvDownload } from './sections/CvDownload';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Interests } from './sections/Interests';
import { Videos } from './sections/Videos';

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function App() {
  useRevealOnScroll();

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Interests />
        <Videos />
        <CvDownload />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
