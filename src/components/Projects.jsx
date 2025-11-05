import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Vision Studio',
    icon: <Rocket className="h-5 w-5 text-emerald-400" />,
    desc: 'Realtime image understanding playground with custom CNN backends and WebGPU shaders.',
    tags: ['PyTorch', 'WebGPU', 'FastAPI', 'Sockets'],
  },
  {
    title: 'Insight Dash',
    icon: <Code className="h-5 w-5 text-cyan-400" />,
    desc: 'Self-serve analytics with a semantic layer and natural-language query interface.',
    tags: ['LangChain', 'MongoDB', 'React', 'D3'],
  },
  {
    title: 'LiteML',
    icon: <Cpu className="h-5 w-5 text-indigo-400" />,
    desc: 'Tiny ML toolkit focused on deployability—quantization, pruning, and on-device inference.',
    tags: ['ONNX', 'TensorRT', 'C++', 'Python'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
};

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto mt-16 max-w-7xl px-6 sm:mt-24 sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
        <p className="mt-2 text-white/60">Selected work that balances research depth with product polish.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            custom={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rotate-12 rounded-full bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
