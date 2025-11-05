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
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Tech Stack</h2>
        <p className="mt-2 text-white/60">Tools I use to build reliable, scalable products.</p>
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
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-4 w-4 text-emerald-300" />
                </div>
                <span className="font-medium text-white/90">{s.name}</span>
              </div>
              <span className="text-xs text-white/50">{s.group}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
