import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Star } from 'lucide-react';

const projects = [
  {
    title: 'Neon UI Kit',
    description: 'A component library with motion-first patterns and dark, neon accents.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    icon: <Star className="h-5 w-5 text-yellow-400" />,
    link: '#',
  },
  {
    title: '3D Product Teaser',
    description: 'Interactive landing hero powered by Spline & WebGL transitions.',
    tags: ['Spline', 'Three-ish', 'DX'],
    icon: <Cpu className="h-5 w-5 text-cyan-400" />,
    link: '#',
  },
  {
    title: 'Dev Dashboard',
    description: 'Analytics dashboard with snappy charts and keyboard-driven UX.',
    tags: ['Vite', 'React', 'API'],
    icon: <Code2 className="h-5 w-5 text-fuchsia-400" />,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A selection of interfaces and experiments focused on interactivity and craft.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10 md:inline-flex"
          >
            Get a demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 shadow-[0_6px_40px_-10px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-1 text-sm text-fuchsia-300 opacity-0 transition-opacity group-hover:opacity-100">
                Explore <ArrowRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
