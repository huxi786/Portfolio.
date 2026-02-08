import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter, Phone, MapPin, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const formRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Check if keys are configured
    const serviceId = 'service_YOUR_SERVICE_ID';
    const templateId = 'template_YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const isConfigured = serviceId !== 'service_YOUR_SERVICE_ID' && 
                         templateId !== 'template_YOUR_TEMPLATE_ID' && 
                         publicKey !== 'YOUR_PUBLIC_KEY';

    if (!isConfigured) {
      setTimeout(() => {
        window.location.href = `mailto:ranahuxi@gmail.com?subject=Contact from ${formState.name}&body=${formState.message} (${formState.email})`;
        setStatus({ type: 'success', message: 'Opening your email client...' });
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' });
        setFormState({ name: '', email: '', message: '' });
      }, (error) => {
        console.error("EmailJS Error:", error);
        window.location.href = `mailto:ranahuxi@gmail.com?subject=Contact from ${formState.name}&body=${formState.message} (${formState.email})`;
        setStatus({ type: 'success', message: 'Email service failed. Opening your default email client instead.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950 -z-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss a new opportunity? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                  <div className="space-y-6">
                    <ContactItem 
                      icon={Mail} 
                      label="Email Me" 
                      value="ranahuxi@gmail.com" 
                      className="text-blue-400"
                    />
                    <ContactItem 
                      icon={Phone} 
                      label="Call Me" 
                      value="0321 7079965" 
                      className="text-emerald-400"
                    />
                    <ContactItem 
                      icon={MapPin} 
                      label="Location" 
                      value="Pakistan" 
                      className="text-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Social Profiles</h3>
                  <div className="flex gap-4">
                    <SocialButton icon={Github} href="https://github.com/huxi786" label="Github" />
                    <SocialButton icon={Linkedin} href="https://www.linkedin.com/in/rana-huzaifa786/" label="LinkedIn" />
                    <SocialButton icon={Twitter} href="#" label="Twitter" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Looking for a custom solution? Send me an email and I'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={6}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-600"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center text-sm font-medium ${
                      status.type === 'error' 
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                        : 'bg-green-500/10 text-green-400 border border-green-500/20'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, className }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
      <div className={`p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${className}`}>
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-sm text-gray-400 font-medium mb-1">{label}</h4>
        <p className="text-white font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
}

function SocialButton({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      className="p-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
      aria-label={label}
    >
      <Icon size={22} />
    </a>
  );
}
