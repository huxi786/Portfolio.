import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layout, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';

const BASE = '/';

const projects = [
  {
    title: 'Mystic Mall E-Commerce',
    desc: 'A fully responsive e-commerce platform with user auth, payment integration, admin dashboard, and real-time inventory.',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Tailwind'],
    category: 'PHP/Laravel',
    thumbnail: `${BASE}thumbnails/mystic-thumb.png`,
    link: 'https://github.com/huxi786/My-first-project-Mystic-mall',
    featured: true,
    slides: [`${BASE}mystic/mm1.png`, `${BASE}mystic/mm2.png`, `${BASE}mystic/mm3.png`, `${BASE}mystic/mm4.png`, `${BASE}mystic/mm5.png`],
  },
  {
    title: 'Library Management System',
    desc: 'Complete Library CRUD with Admin & User panels, book management, borrowing tracking, and notifications.',
    tags: ['Laravel', 'Blade', 'PHP', 'MySQL'],
    category: 'PHP/Laravel',
    thumbnail: `${BASE}thumbnails/library-thumb.png`,
    link: 'https://github.com/huxi786/Libraby-System-',
    featured: true,
    slides: [`${BASE}library/lib1.png`, `${BASE}library/lib2.png`, `${BASE}library/lib3.png`, `${BASE}library/lib4.png`, `${BASE}library/lib5.png`],
  },
  {
    title: 'Interactive Weather App',
    desc: 'Real-time weather dashboard with location search, humidity & wind details via OpenWeather API.',
    tags: ['HTML', 'JavaScript', 'CSS', 'OpenWeatherAPI'],
    category: 'JavaScript',
    thumbnail: `${BASE}thumbnails/weather-thumb.png`,
    link: 'https://github.com/huxi786/weather-app',
    demo: 'https://huxi786.github.io/weather-app/',
    slides: [`${BASE}weather/weather1.png`],
  },
  {
    title: 'GMass Bulk Emailer',
    desc: 'Powerful bulk email dispatch tool with Laravel — email queuing, contact management, and automated mass mailing.',
    tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Email Dispatching'],
    category: 'PHP/Laravel',
    thumbnail: `${BASE}thumbnails/gmass-thumb.png`,
    link: 'https://github.com/huxi786/gmass-app',
  },
  {
    title: 'EDU-CORE School Management',
    desc: 'A comprehensive school management system with student enrollment, attendance tracking, grade management, and admin/teacher/student panels.',
    tags: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Tailwind'],
    category: 'PHP/Laravel',
    thumbnail: `${BASE}thumbnails/educore-thumb.png`,
    link: 'https://github.com/huxi786/EDU-CORE-School-Management-System-',
  },
  {
    title: 'Smart Calculator',
    desc: 'Pure JavaScript calculator with modern UI, standard arithmetic operations, error handling, and keyboard support.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
    thumbnail: `${BASE}thumbnails/calc-thumb.png`,
    link: 'https://github.com/huxi786/Calculator',
    demo: 'https://huxi786.github.io/Calculator/',
    slides: [`${BASE}calculator/calc1.png`],
  },
];

const TABS = ['All', 'PHP/Laravel', 'JavaScript'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [modal, setModal] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === tab
                  ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onOpen={() => project.slides ? setModal(project) : window.open(project.link, '_blank')}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const { playClick, playHover } = useSoundEffects();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={playHover}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 text-xs font-medium">
          <Star size={10} fill="currentColor" /> Featured
        </div>
      )}

      {/* Thumbnail */}
      <div className="h-48 w-full overflow-hidden bg-white relative">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-800">
            <Layout className="w-12 h-12 text-white/20" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white hover:bg-white/20 transition-colors"
          >
            <Github size={16} /> View Code
          </a>
          {(project.demo || project.slides) && (
            <button
              onClick={(e) => { playClick(); project.demo ? window.open(project.demo, '_blank') : onOpen(); }}
              className="flex items-center gap-2 px-5 py-2 bg-purple-500/80 rounded-full text-sm text-white hover:bg-purple-500 transition-colors"
            >
              <ExternalLink size={16} /> {project.demo ? 'Live Demo' : 'View Screenshots'}
            </button>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 border-t border-white/10">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);
  const slides = project.slides || [];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl"
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current]}
              alt={`Slide ${current + 1}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.25 }}
              className="max-h-full max-w-full object-contain"
            />
          </AnimatePresence>
          {slides.length > 1 && (
            <>
              <button onClick={e => { e.stopPropagation(); setCurrent(c => (c === 0 ? slides.length - 1 : c - 1)); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-blue-500 rounded-full text-white transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={e => { e.stopPropagation(); setCurrent(c => (c === slides.length - 1 ? 0 : c + 1)); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-blue-500 rounded-full text-white transition-all">
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrent(idx)} className={`h-2 rounded-full transition-all ${current === idx ? 'bg-blue-500 w-6' : 'bg-white/50 w-2 hover:bg-white'}`} />
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
