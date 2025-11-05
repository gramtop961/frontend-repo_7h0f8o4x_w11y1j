import { motion } from 'framer-motion';

const skills = [
  'React',
  'TypeScript',
  'Tailwind',
  'Framer Motion',
  'Spline',
  'Node.js',
  'Accessibility',
  'Design Systems',
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl font-semibold md:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 max-w-3xl text-white/70"
        >
          I build interfaces that combine performance with personality. My work blends precise interaction design with playful 3D moments, resulting in experiences that feel intuitive, polished, and fun.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          >
            <h3 className="mb-2 text-lg font-semibold">Philosophy</h3>
            <p className="text-sm text-white/70">
              Design for clarity first. Then add motion to guide, not distract. Every detail—from micro-interactions to typography—should support the story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          >
            <h3 className="mb-3 text-lg font-semibold">Tools I enjoy</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
