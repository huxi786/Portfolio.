import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { usePortfolioData } from './hooks/usePortfolioData';

function App() {
  const { data, loading, error } = usePortfolioData();

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 overflow-x-hidden w-full" style={{ cursor: 'none' }}>
      <CustomCursor />
      <Navbar settings={data.settings} />
      
      <main className="relative z-10">
        <Hero settings={data.settings} />
        <About settings={data.settings} />
        <Services />
        <Experience experiences={data.experiences} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
      
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
    </div>
  );
}

export default App;
