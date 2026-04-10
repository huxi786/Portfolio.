import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal, Download } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';
import resumePdf from '../assets/resume.pdf';

const navItems = [
  { name: 'Home',     href: '#home'       },
  { name: 'About',    href: '#about'      },
  { name: 'Skills',   href: '#skills'     },
  { name: 'Projects', href: '#projects'   },
  { name: 'Contact',  href: '#contact'    },
];

const SECTION_IDS = navItems.map(i => i.href.replace('#', ''));

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const { playClick, playHover } = useSoundEffects();

  // Scroll bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver — track active section
  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-950/80 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Huzaifa Ajmal
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const id = item.href.replace('#', '');
              const isActive = active === id;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    />
                  )}
                </motion.a>
              );
            })}

            <motion.a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="ml-4 px-4 py-2 rounded-full bg-blue-500/20 hover:bg-blue-500/40 text-white text-sm font-medium transition-colors border border-blue-500/30 flex items-center gap-2"
            >
              Resume <Download size={14} />
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10 flex items-center gap-1"
            >
              Resume <Download size={12} />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-950/90 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => {
              const id = item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                    active === id ? 'text-blue-400 bg-blue-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
