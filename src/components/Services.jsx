import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-light-textMain dark:text-dark-textMain">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-light-textMuted dark:text-dark-textMuted max-w-2xl mx-auto text-lg">
            Comprehensive development services to bring your digital ideas to life.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:-translate-y-2 hover:border-light-primary dark:hover:border-dark-primary shadow-sm hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-light-primary/10 dark:bg-dark-primary/10 flex items-center justify-center text-3xl text-light-primary dark:text-dark-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>
              <h3 className="text-xl font-display font-bold text-light-textMain dark:text-dark-textMain mb-3">
                {service.title}
              </h3>
              <p className="text-light-textMuted dark:text-dark-textMuted text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
