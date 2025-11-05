import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden rounded-3xl bg-[#0b0f14]">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_20%,rgba(99,102,241,0.25),transparent),radial-gradient(50%_35%_at_80%_80%,rgba(34,197,94,0.22),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl backdrop-blur-[2px]"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Portfolio • AI + Design
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            I craft intelligent interfaces and data-driven products—blending machine learning, delightful UX, and clean engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#projects"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg/30 hover:shadow-xl"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#contact"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md hover:bg-white/15"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
