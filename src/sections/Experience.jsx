import React from 'react';
import { motion } from 'framer-motion';
import { Network, Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance & Contract',
      description: 'Developing high-performance web applications for diverse clients using the Html & CSS. Focused on scalable architectures and modern UI/UX design.',
      type: 'work',
      icon: Network
    },
    {
      year: 'Dec 2025 - Feb 2026',
      title: 'Laravel PHP Intern',
      company: 'Provelpers',
      description: 'Completed a 3-month internship focused on backend development using Laravel and PHP.',
      type: 'internship',
      icon: Briefcase
    },
    {
      year: '2021 - 2025',
      title: 'BS Computer Science',
      company: '(GCUF) Government College University Faisalabad',
      description: 'Graduated with honors. specialized in Software Engineering and Database Systems. Completed capstone project on distributed systems.',
      type: 'education',
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 relative bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">My Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Experience & Education</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform -translate-x-1/2 md:translate-x-0 ml-8 md:ml-0" />

          <div className="space-y-12">
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
  // Zig-Zag Layout: 
  // Even index (0, 2): Right Card (md:flex-row)
  // Odd index (1): Left Card (md:flex-row-reverse)
  const isLeft = index % 2 !== 0; // 2nd card (index 1) will be Left
  const Icon = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      // Use md:flex-row for Right alignment, md:flex-row-reverse for Left alignment
      className={`relative flex items-center justify-between md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-5/12" />

      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 w-10 h-10 -ml-5 md:-ml-5 bg-slate-950 border-4 border-blue-500 rounded-full z-10 flex items-center justify-center">
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
          <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <span className="text-blue-400 font-mono text-sm">{experience.year}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span className="text-gray-400 text-sm uppercase tracking-wide">{experience.type}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
          <p className="text-blue-500 font-medium mb-4">{experience.company}</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
