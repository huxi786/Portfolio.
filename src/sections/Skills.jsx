import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Laravel', level: 'Expert', category: 'Backend', color: 'text-red-500', bg: 'bg-red-500/10' },
  { name: 'PHP', level: 'Expert', category: 'Backend', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { name: 'React', level: 'Intermediate', category: 'Frontend', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'MySQL', level: 'Advanced', category: 'Database', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { name: 'JavaScript', level: 'Advanced', category: 'Language', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { name: 'Tailwind CSS', level: 'Advanced', category: 'Styling', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { name: 'Git', level: 'Advanced', category: 'DevOps', color: 'text-gray-400', bg: 'bg-gray-500/10' },
  { name: 'API Design', level: 'Intermediate', category: 'Architecture', color: 'text-green-400', bg: 'bg-green-500/10' },
  { name: 'GitHub', level: 'Advanced', category: 'Version Control', color: 'text-blue-400', bg: 'bg-blue-500/10' },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-slate-950 py-20 relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset for building robust, scalable applications.
            <br />
            Specialized in <span className="text-red-400 font-semibold">Laravel Ecosystem</span>.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all cursor-default ${skill.bg}`}
            >
              <h3 className={`text-xl font-bold mb-2 ${skill.color}`}>{skill.name}</h3>
              <div className="flex justify-between items-end">
                <span className="text-sm text-gray-400">{skill.category}</span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-white">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
