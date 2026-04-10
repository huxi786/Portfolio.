import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const skills = [
  { name: 'Laravel',        level: 90, category: 'Backend',  color: '#f87171', label: 'Expert' },
  { name: 'PHP',            level: 88, category: 'Backend',  color: '#c084fc', label: 'Expert' },
  { name: 'MySQL',          level: 80, category: 'Database', color: '#fb923c', label: 'Advanced' },
  { name: 'phpMyAdmin',     level: 85, category: 'Database', color: '#f59e0b', label: 'Advanced' },
  { name: 'JavaScript',     level: 78, category: 'Frontend', color: '#facc15', label: 'Advanced' },
  { name: 'React',          level: 70, category: 'Frontend', color: '#60a5fa', label: 'Intermediate' },
  { name: 'Tailwind CSS',   level: 85, category: 'Frontend', color: '#22d3ee', label: 'Advanced' },
  { name: 'HTML & CSS',     level: 92, category: 'Frontend', color: '#f97316', label: 'Expert' },
  { name: 'API Design',     level: 72, category: 'Backend',  color: '#4ade80', label: 'Intermediate' },
  { name: 'Blade',          level: 85, category: 'Backend',  color: '#e879f9', label: 'Advanced' },
  { name: 'Git',            level: 82, category: 'Tools',    color: '#f97316', label: 'Advanced' },
  { name: 'GitHub',         level: 82, category: 'Tools',    color: '#94a3b8', label: 'Advanced' },
  { name: 'Postman',        level: 78, category: 'Tools',    color: '#ef8c3c', label: 'Advanced' },
  { name: 'VS Code',        level: 90, category: 'Tools',    color: '#3b82f6', label: 'Expert' },
  { name: 'Laragon',        level: 85, category: 'Tools',    color: '#38bdf8', label: 'Advanced' },
  { name: 'Docker',         level: 50, category: 'Tools',    color: '#60a5fa', label: 'Learning 🚀' },
];

const TABS = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

function SkillBar({ skill }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="p-5 rounded-2xl bg-white/5 border border-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-white">{skill.name}</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300">{skill.label}</span>
      </div>
      {/* Bar track */}
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
      <div className="text-right text-xs text-gray-500 mt-1">{skill.level}%</div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-slate-950 py-20 relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Specialized in <span className="text-red-400 font-semibold">Laravel Ecosystem</span> — from database to deployment.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === tab
                  ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {filtered.map(skill => <SkillBar key={skill.name} skill={skill} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
