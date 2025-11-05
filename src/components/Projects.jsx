import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Code } from 'lucide-react';

const projects = [
  {
    title: 'SanskritiVision: Cultural Landmark Classifier',
    icon: <Brain className="h-5 w-5 text-emerald-600" />,
    desc: 'CNN-based model to classify Indian monuments (Taj Mahal, Hampi, Qutub Minar) with Grad-CAM visualizations.',
    tags: ['PyTorch', 'FastAPI', 'Grad-CAM', 'MLOps'],
  },
  {
    title: 'RagaRec: Indian Classical Music Recommender',
    icon: <Rocket className="h-5 w-5 text-orange-600" />,
    desc: 'Hybrid system using MF + spectral features to suggest ragas based on mood and time of day.',
    tags: ['Python', 'Pandas', 'Signal Processing', 'Recsys'],
  },
  {
    title: 'AyurInsight: NLP on Ayurvedic Texts',
    icon: <Code className="h-5 w-5 text-rose-600" />,
    desc: 'NER and Q&A pipeline over digitized texts to retrieve remedies and ingredients with confidence scores.',
    tags: ['Transformers', 'spaCy', 'Vector DB', 'QA'],
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
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-2 text-slate-600">
          A curated set of works blending AI, data science, and Indian cultural context.
        </p>
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
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Tricolor accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-white to-emerald-600" />

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-200">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="absolute -right-10 -top-10 h-36 w-36 rotate-12 rounded-full bg-gradient-to-br from-orange-500/10 via-rose-400/10 to-emerald-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
