import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Brain, Globe } from 'lucide-react';

const stack = [
  { name: 'Python', group: 'Core' },
  { name: 'PyTorch', group: 'AI' },
  { name: 'scikit-learn', group: 'ML' },
  { name: 'Pandas', group: 'Data' },
  { name: 'FastAPI', group: 'Backend' },
  { name: 'MongoDB', group: 'DB' },
  { name: 'TensorFlow', group: 'AI' },
  { name: 'NumPy', group: 'Data' },
  { name: 'Docker', group: 'DevOps' },
  { name: 'Git', group: 'Tools' },
];

const iconMap = {
  Core: Cpu,
  AI: Brain,
  ML: Brain,
  Data: Database,
  Backend: Globe,
  DB: Database,
  DevOps: Globe,
  Tools: Cpu,
};

const TechStack = () => {
  return (
    <section id="tech" className="relative mx-auto mt-20 max-w-7xl px-6 sm:mt-28 sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Tech Stack</h2>
        <p className="mt-2 text-slate-600">Tools and technologies I enjoy building with.</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((s, i) => {
          const Icon = iconMap[s.group] || Cpu;
          return (
            <motion.div
              key={`${s.name}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/15 to-emerald-500/15 ring-1 ring-slate-200">
                  <Icon className="h-4 w-4 text-emerald-700" />
                </div>
                <span className="font-medium text-slate-800">{s.name}</span>
              </div>
              <span className="text-xs text-slate-500">{s.group}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Subtle tricolor border */}
      <div className="pointer-events-none mx-auto mt-10 h-1 w-full max-w-3xl rounded-full bg-gradient-to-r from-orange-500 via-white to-emerald-600" />
    </section>
  );
};

export default TechStack;
