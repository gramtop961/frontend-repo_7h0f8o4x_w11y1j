import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { useEffect } from 'react';

export default function App() {
  // Smooth scroll behavior for in-page links
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return;
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0b0d12] antialiased">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 mx-auto max-w-7xl px-6">
        <nav className="mt-5 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <a href="#home" className="font-display text-sm font-semibold text-white">
            neon.dev
          </a>
          <div className="flex items-center gap-1">
            <a
              href="#about"
              className="rounded-full px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
            >
              About
            </a>
            <a
              href="#projects"
              className="rounded-full px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
