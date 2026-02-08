import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layout, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';

const BASE_PATH = '/Portfolio./';

const projects = [
  {
    title: 'Mystic Mall E-Commerce',
    desc: 'A fully responsive e-commerce platform built with PHP, HTML, CSS, and JavaScript. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Tailwind'],
    thumbnail: `${BASE_PATH}thumbnails/mystic-thumb.png`,
    image: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
    link: 'https://github.com/huxi786/My-first-project-Mystic-mall',
    slides: [
      `${BASE_PATH}mystic/mm1.png`,
      `${BASE_PATH}mystic/mm2.png`,
      `${BASE_PATH}mystic/mm3.png`,
      `${BASE_PATH}mystic/mm4.png`,
      `${BASE_PATH}mystic/mm5.png`
    ]
  },
  {
    title: 'Library Management System',
    desc: 'A complete Library CRUD system offering Admin and User panels. Features book management, borrowing tracking, and system notifications.',
    tags: ['Laravel', 'Blade', 'PHP', 'MySQL'],
    thumbnail: `${BASE_PATH}thumbnails/library-thumb.png`,
    image: 'bg-gradient-to-br from-indigo-500/20 to-pink-500/20',
    link: 'https://github.com/huxi786/Libraby-System-',
    slides: [
      `${BASE_PATH}library/lib1.png`,
      `${BASE_PATH}library/lib2.png`,
      `${BASE_PATH}library/lib3.png`,
      `${BASE_PATH}library/lib4.png`,
      `${BASE_PATH}library/lib5.png`
    ]
  },
  {
    title: 'Interactive Weather App',
    desc: 'Real-time weather dashboard fetching live data via API. Features location search, humidity/wind details, and error handling for invalid inputs.',
    tags: ['HTML', 'JavaScript', 'CSS', 'OpenWeatherAPI'],
    thumbnail: `${BASE_PATH}thumbnails/weather-thumb.png`,
    image: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
    link: 'https://github.com/huxi786/weather-app',
    demo: 'https://huxi786.github.io/weather-app/',
    slides: [
      `${BASE_PATH}weather/weather1.png`
    ]
  },
  {
    title: 'GMass Bulk Emailer',
    desc: 'A powerful bulk email dispatch tool built with Laravel. Features efficient email queuing, contact management, and automated mass mailing capabilities.',
    tags: ['Laravel', 'PHP', 'Blade', 'MySQL','API Integration','Email Dispatching'],
    thumbnail: `${BASE_PATH}thumbnails/gmass-thumb.png`,
    image: 'bg-gradient-to-br from-red-500/20 to-blue-500/20',
    link: 'https://github.com/huxi786/gmass-app'
  },
  {
    title: 'Smart Calculator',
    desc: 'A pure JavaScript calculator featuring a modern UI. Capable of handling standard arithmetic operations with error handling and keyboard support.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: `${BASE_PATH}thumbnails/calc-thumb.png`,
    image: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    link: 'https://github.com/huxi786/Calculator',
    demo: 'https://huxi786.github.io/Calculator/',
    slides: [
      `${BASE_PATH}calculator/calc1.png`
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">  
          {projects.map((project, index) => (  
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              onOpen={() => { 
                if(project.slides) setSelectedProject(project);  
                else window.open(project.link, '_blank');
              }}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
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
      transition={{ delay: index * 0.2 }}
      onMouseEnter={playHover}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all"
    >
      <div className={`h-48 w-full group-hover:scale-105 transition-transform duration-500 flex items-center justify-center bg-white overflow-hidden`}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-contain p-8" />
        ) : (
          <div className={`w-full h-full ${project.image} flex items-center justify-center`}>
            <Layout className="w-12 h-12 text-white/20" />
          </div>
        )}
      </div>
      
      <div className="p-6 relative z-10 bg-slate-950/50 backdrop-blur-sm -mt-0 border-t border-white/10">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
          >
            <Github size={16} /> Code
          </a>
          <button 
            onClick={(e) => {
              playClick();
              if (project.demo) {
                window.open(project.demo, '_blank');
              } else {
                onOpen();
              }
            }}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={16} /> Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrent(current === project.slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrent(current === 0 ? project.slides.length - 1 : current - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-900/50">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="relative aspect-video bg-black flex items-center justify-center">
          <AnimatePresence mode='wait'>
            <motion.img
              key={current}
              src={project.slides[current]}
              alt={`Slide ${current + 1}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="max-h-full max-w-full object-contain"
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          {project.slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-blue-500 rounded-full text-white transition-all backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-blue-500 rounded-full text-white transition-all backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === idx ? 'bg-blue-500 w-6' : 'bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
