import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-slate-950 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a passionate Full Stack Developer with deep expertise in 
              <span className="text-white font-bold"> Laravel (PHP)</span>
              <span className="text-white font-bold"></span>. 
              My journey involves building high-performance web applications that are not only visually stunning but also robust and scalable.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in backend architecture and modern frontend frameworks, 
              I bridge the gap between complex logic and intuitive user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            <FeatureCard 
              icon={Code2} 
              title="Clean Code" 
              desc="Writing maintainable, scalable, and efficient code is my priority." 
            />
            <FeatureCard 
              icon={Globe} 
              title="Modern Web" 
              desc="Building responsive applications with the latest technologies." 
            />
            <FeatureCard 
              icon={Cpu} 
              title="Performance" 
              desc="Optimizing every layer for maximum speed and reliability." 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
      </div>
    </div>
  );
}
