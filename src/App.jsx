import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(255,111,0,0.08),transparent),radial-gradient(1200px_600px_at_110%_110%,rgba(16,185,129,0.08),transparent)]">
      <header className="mx-auto max-w-7xl px-6 py-6 sm:px-10">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-emerald-600" />
            <span className="text-sm font-semibold tracking-tight text-slate-800">Your Name • AI-DS</span>
          </div>
          <nav className="hidden gap-4 text-sm text-slate-700 sm:flex">
            <a href="#projects" className="hover:text-emerald-700">Projects</a>
            <a href="#achievements" className="hover:text-emerald-700">Achievements</a>
            <a href="#tech" className="hover:text-emerald-700">Tech</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
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
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Let’s build something amazing</h3>
            <p className="mt-2 max-w-2xl text-slate-600">
              Open to internships, research collaborations, and projects in AI & Data Science.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:youremail@example.com"
                className="rounded-full bg-gradient-to-r from-orange-600 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 hover:shadow-emerald-600/20"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="mx-auto mt-8 text-center text-xs text-slate-500">
            Designed with an Indian tricolor aesthetic • © {new Date().getFullYear()} Your Name
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
