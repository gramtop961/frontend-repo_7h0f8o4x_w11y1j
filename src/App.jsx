import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-white">
      {/* Nav */}
      <header className="mx-auto max-w-7xl px-6 py-6 sm:px-10">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-500" />
            <span className="text-sm font-semibold tracking-tight text-white/90">Your Name • AI/DS</span>
          </div>
          <nav className="hidden gap-5 text-sm text-white/70 sm:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#achievements" className="hover:text-white">Achievements</a>
            <a href="#tech" className="hover:text-white">Tech</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Achievements />
        <TechStack />

        {/* Contact / Footer */}
        <section id="contact" className="mx-auto mt-20 max-w-7xl px-6 sm:mt-28 sm:px-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold">Let’s talk</h3>
            <p className="mt-2 max-w-2xl text-white/70">
              I’m open to internships, research collaborations, and building thoughtful AI products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:youremail@example.com"
                className="rounded-full bg-gradient-to-r from-emerald-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg/30 hover:shadow-xl"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="mx-auto mt-8 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Your Name
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
