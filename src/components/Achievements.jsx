import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'Hackathon Winner',
    icon: Trophy,
    desc: 'Built a realtime ML pipeline and shipped a working demo in under 24 hours.',
    year: '2024',
  },
  {
    title: 'Research Showcase',
    icon: Award,
    desc: 'Presented model compression work focused on mobile deployment.',
    year: '2023',
  },
  {
    title: 'Open Source Contributor',
    icon: Star,
    desc: 'Contributed features and docs to ML and data tooling projects.',
    year: '2023-24',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative mx-auto mt-20 max-w-7xl px-6 sm:mt-28 sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Achievements</h2>
        <p className="mt-2 text-white/60">Highlights that shaped my craft.</p>
      </div>

      <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{a.desc}</p>
                  <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60">
                    {a.year}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
