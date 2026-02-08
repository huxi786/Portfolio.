import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and pixel-perfect user interfaces using React, Tailwind CSS, and modern JavaScript.',
      tags: ['React', 'Tailwind', 'Framer Motion' , 'Html', 'CSS' , 'JavaScript','vue'],
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Designing robust and scalable server-side architectures, RESTful APIs, and efficient database schemas with Laravel.',
      tags: ['Laravel', 'PHP', 'MySQL'],
      color: 'text-red-400',
      bg: 'bg-red-500/10'
    },
    {
      icon: Layout,
      title: 'Full Stack Solutions',
      description: 'Delivering complete web applications from concept to deployment, ensuring seamless integration between frontend and backend.',
      tags: ['Architecture', 'Deployment', 'Security'],
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">What I Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I combine technical expertise with design sensibilities to build comprehensive digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors">
        <div className={`w-14 h-14 rounded-lg ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={32} className={service.color} />
        </div>
        
        <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium px-2 py-1 bg-white/5 rounded text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
