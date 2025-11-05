import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Smart India Hackathon (College Round) Winner',
    icon: Trophy,
    desc: 'Led a 4-member team to design an AI-powered grievance triage system; topped with precision and latency metrics.',
    year: '2024',
  },
  {
    title: 'Paper Shortlisted at Student Research Symposium',
    icon: Award,
    desc: 'Proposed a lightweight CNN for on-device document OCR tailored for Indian scripts.',
    year: '2023',
  },
  {
    title: 'Open Source Contributor',
    icon: Star,
    desc: 'Merged fixes and docs improvements in ML tooling repositories used in academia.',
    year: '2023-24',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative mx-auto mt-20 max-w-7xl px-6 sm:mt-28 sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Achievements</h2>
        <p className="mt-2 text-slate-600">Moments of pride along the journey.</p>
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
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/15 to-emerald-500/15 ring-1 ring-slate-200">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{a.desc}</p>
                  <span className="mt-2 inline-block rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">
                    {a.year}
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-500 via-white to-emerald-600" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
