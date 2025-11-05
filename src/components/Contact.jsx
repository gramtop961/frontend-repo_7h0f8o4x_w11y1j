import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0d12] pb-16 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl font-semibold md:text-4xl"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          Have a project in mind or want to collaborate? I’m always open to new opportunities.
        </motion.p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:hello@yourdomain.dev"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            hello@yourdomain.dev
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourhandle/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <div className="pointer-events-none mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Crafted with care and a hint of neon.</p>
      </div>
    </section>
  );
}
