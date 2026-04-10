import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu } from 'lucide-react';

const FACTS = [
  '☕ Coffee-fueled coder',
  '🧹 Clean Code Fanatic',
  '🚀 Performance Obsessed',
  '🌍 Open Source Enthusiast',
  '📚 Always Learning',
];

function RotatingBadge() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % FACTS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.4 }}
      className="inline-block py-1 px-3 rounded-full bg-purple-500/15 text-purple-300 text-sm border border-purple-500/30"
    >
      {FACTS[idx]}
    </motion.span>
  );
}

const SKILLS_PREVIEW = [
  { name: 'PHP / Laravel', pct: 97, color: '#c084fc' },
  { name: 'JavaScript',    pct: 78, color: '#facc15' },
  { name: 'Vue',         pct: 60, color: '#4ade80' },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-slate-950 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left — Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-40 scale-110" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img src="/Portfolio./huzaifa.jpg" alt="Huzaifa Ajmal" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Fun-fact ticker */}
            <RotatingBadge />

            {/* Quick mini skill bars */}
            <div className="w-full max-w-xs space-y-3">
              {SKILLS_PREVIEW.map(s => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>{s.name}</span><span>{s.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: s.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Text + cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-400">Transforming Ideas into Digital Reality</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with deep expertise in{' '}
              <span className="text-white font-bold">Laravel (PHP)</span>. I build high-performance web applications
              that are not only visually stunning but also robust and scalable.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in backend architecture and modern frontend frameworks,
              I bridge the gap between complex logic and intuitive user experiences.
            </p>

            <div className="grid gap-4">
              <FeatureCard icon={Code2} title="Clean Code" desc="Maintainable, scalable, and efficient code is my priority." />
              <FeatureCard icon={Globe} title="Modern Web" desc="Responsive applications built with the latest technologies." />
              <FeatureCard icon={Cpu}   title="Performance" desc="Optimizing every layer for maximum speed and reliability." />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group flex items-start gap-4">
      <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
        <Icon size={22} />
      </div>
      <div>
        <h4 className="text-base font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
