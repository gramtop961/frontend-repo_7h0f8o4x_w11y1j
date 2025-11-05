import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 via-white to-emerald-500/10">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft tricolor glow overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_40%_at_20%_20%,rgba(255,111,0,0.25),transparent),radial-gradient(60%_40%_at_80%_80%,rgba(16,185,129,0.25),transparent)]" />

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="backdrop-blur-[2px]"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-white/70 px-3 py-1 text-xs font-medium text-orange-600 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            Indian Theme • B.E AI-DS • 3rd Year
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm sm:text-6xl">
            Namaste, I’m <span className="bg-gradient-to-r from-orange-600 via-rose-500 to-emerald-600 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            An aspiring AI & Data Science engineer crafting intelligent systems, immersive visuals, and delightful user experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#projects"
              className="rounded-full bg-gradient-to-r from-orange-600 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 hover:shadow-emerald-600/20"
            >
              Explore Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#contact"
              className="rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 backdrop-blur hover:bg-white"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
