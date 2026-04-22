import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Code, Database, Server, Download } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';
import resumePdf from '../assets/resume.pdf';

// --- Typewriter Hook ---
function useTypewriter(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
      }, isDeleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIdx, words, speed, pause]);

  return displayed;
}

// --- Animated Counter ---
function Counter({ end, suffix = '+', duration = 2000 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const ROLES = ['Full Stack Developer', 'Laravel Expert', 'Backend Developer', 'PHP Specialist'];

const STATS = [
  { label: 'Years Experience', end: 3 },
  { label: 'Projects Built', end: 10 },
  { label: 'Happy Clients', end: 8 },
  { label: 'GitHub Repos', end: 15 },
];

export default function Hero() {
  const { playClick, playHover } = useSoundEffects();
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <FloatingIcon icon={Code} className="top-20 right-[20%] text-blue-500/20" delay={0} />
        <FloatingIcon icon={Database} className="bottom-40 left-[10%] text-purple-500/20" delay={1} />
        <FloatingIcon icon={Server} className="top-40 left-[15%] text-indigo-500/20" delay={2} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20 backdrop-blur-sm">
              Available for Freelance &amp; Full-time
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
              <span className="text-white block mb-2">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                Huzaifa Ajmal
              </span>
            </h1>

            {/* Typewriter Role */}
            <div className="h-10 mb-6 flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl text-gray-300 font-medium">{role}</span>
              <span className="w-0.5 h-6 bg-blue-400 animate-pulse rounded-full" />
            </div>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Building scalable, efficient, and interactive web solutions with{' '}
              <span className="text-white font-semibold">PHP</span> &amp;{' '}
              <span className="text-white font-semibold">Laravel</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={playHover}
                onClick={playClick}
                className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-full overflow-hidden flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">View Work</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm w-full sm:w-auto justify-center flex"
              >
                Contact Me
              </motion.a>

              <motion.a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/5 text-white rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center"
                title="Download Resume"
              >
                <Download size={20} />
              </motion.a>
            </div>

            {/* Stats Counter Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {STATS.map(({ label, end }) => (
                <div key={label} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400">
                    <Counter end={end} />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-[300px] lg:max-w-none mx-auto"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full rounded-full border-4 border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden flex items-center justify-center">
                <img src="/huzaifa.jpg" alt="Huzaifa Ajmal" className="w-full h-full object-cover" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-2 top-0 sm:-right-4 sm:top-10 p-3 sm:p-4 bg-slate-900 rounded-2xl border border-white/10 shadow-xl"
              >
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-2 bottom-8 sm:-left-4 sm:bottom-20 p-3 sm:p-4 bg-slate-900 rounded-2xl border border-white/10 shadow-xl"
              >
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

function FloatingIcon({ icon: Icon, className, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={`absolute ${className}`}
    >
      <Icon size={48} />
    </motion.div>
  );
}
