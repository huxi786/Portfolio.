import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Network, Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    year: '2023 - Present',
    title: 'Full Stack Developer',
    company: 'Freelance & Contract',
    description: 'Developing high-performance web applications for diverse clients. Focused on scalable architectures and modern UI/UX.',
    type: 'Work',
    icon: Network,
    tags: ['Laravel', 'PHP', 'React', 'MySQL'],
    badge: '🏆 Latest',
  },
  {
    year: 'Dec 2025 - Feb 2026',
    title: 'Laravel PHP Intern',
    company: 'Provelpers',
    description: 'Completed a 3-month internship + 10-months proffessional experienc, focused on backend development using Laravel and PHP.',
    type: 'Internship',
    icon: Briefcase,
    tags: ['Laravel', 'PHP', 'Blade', 'MySQL'],
  },
  {
    year: '2021 - 2025',
    title: 'BS Computer Science',
    company: 'GCUF — Government College University Faisalabad',
    description: 'Graduated with honors. Specialized in Software Engineering & Database Systems.',
    type: 'Education',
    icon: GraduationCap,
    tags: ['DSA', 'OOP', 'DBMS', 'SE'],
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 80%', 'end 30%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 relative bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 w-full relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">My Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Experience &amp; Education</h2>
        </motion.div>

        {/* Timeline wrapper — line is a sibling of the items list, not inside */}
        <div className="relative" ref={containerRef}>

          {/* Vertical line — sits on the left, behind everything */}
          <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-white/5 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          {/* Items */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ experience, index }) {
  const Icon = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      className="relative flex items-start gap-6 pl-14"
    >
      {/* Icon dot — positioned over the line */}
      <div className="absolute left-0 top-5 flex items-center justify-center w-10 h-10 bg-slate-950 border-2 border-blue-500 rounded-full z-10 shadow-lg shadow-blue-500/30 shrink-0">
        <Icon size={17} className="text-blue-400" />
      </div>

      {/* Card — always to the right of the line */}
      <div className="flex-1 group">
        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/8 hover:border-blue-500/30 transition-all duration-300">

          {/* Top row */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-blue-400 font-mono text-sm">{experience.year}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span className="text-gray-400 text-xs uppercase tracking-wide">{experience.type}</span>
            {experience.badge && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/30">
                {experience.badge}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {experience.title}
          </h3>
          <p className="text-blue-400 font-medium text-sm mb-3">{experience.company}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{experience.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {experience.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
