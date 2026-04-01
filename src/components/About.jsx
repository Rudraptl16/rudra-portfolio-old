import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaDownload } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Image & Badge */}
          <motion.div variants={leftVariants} className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Availability Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-white dark:bg-dark-bg p-3 px-5 rounded-full shadow-lg border border-light-border dark:border-dark-border flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-green-500 rounded-full relative z-10" />
                <span className="text-sm font-semibold text-light-textMain dark:text-dark-textMain">
                  Available for work
                </span>
              </div>
              
              {/* Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg">
                <img
                  src="/images/main-pic.jpg"
                  alt="Rudra working"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Decorative block */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-light-primary dark:border-dark-primary rounded-3xl -z-10" />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={rightVariants}>
            <div className="flex items-center gap-3 mb-4 text-light-primary dark:text-dark-primary">
              <FaUserGraduate className="text-xl" />
              <span className="font-bold tracking-widest uppercase text-sm">About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-light-textMain dark:text-dark-textMain">
              I build things for the web & mobile
            </h2>

            <div className="space-y-4 text-light-textMuted dark:text-dark-textMuted text-base md:text-lg mb-8">
              <p>
                I'm a passionate Full-Stack and Mobile App Developer based in Gujarat, India. 
                Currently pursuing my Bachelor's in Computer Science Engineering at Parul University, 
                I specialize in creating unique, modern, and highly responsive digital experiences.
              </p>
              <p>
                My journey into programming started with a love for problem-solving. Over time, I've
                transitioned from basic HTML/CSS layouts into building robust, scalable applications
                with tools like React, Node.js, and Flutter.
              </p>
              <p>
                I believe in writing clean, maintainable code and prioritizing user experience above
                everything else. Whether it's a sleek landing page or a complex full-stack web app, 
                I treat every project as an opportunity to build something exceptional.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-light-bg dark:bg-dark-bg rounded-2xl border border-light-border dark:border-dark-border text-center">
                <h4 className="text-3xl font-display font-bold text-light-primary dark:text-dark-primary mb-1">1+</h4>
                <p className="text-xs uppercase tracking-wider font-semibold text-light-textMuted dark:text-dark-textMuted">Years Exp</p>
              </div>
              <div className="p-4 bg-light-bg dark:bg-dark-bg rounded-2xl border border-light-border dark:border-dark-border text-center">
                <h4 className="text-3xl font-display font-bold text-light-primary dark:text-dark-primary mb-1">2+</h4>
                <p className="text-xs uppercase tracking-wider font-semibold text-light-textMuted dark:text-dark-textMuted">Projects</p>
              </div>
              <div className="p-4 bg-light-bg dark:bg-dark-bg rounded-2xl border border-light-border dark:border-dark-border text-center">
                <h4 className="text-3xl font-display font-bold text-light-primary dark:text-dark-primary mb-1">5+</h4>
                <p className="text-xs uppercase tracking-wider font-semibold text-light-textMuted dark:text-dark-textMuted">Certs</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Rudra patel (1).pdf"
                download="Rudra_Patel_Resume.pdf"
                className="px-6 py-3 rounded-full bg-light-primary dark:bg-dark-primary text-white dark:text-gray-900 font-medium hover:scale-105 transition-transform flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-80}
                duration={600}
                className="cursor-pointer px-6 py-3 rounded-full bg-transparent border border-light-border dark:border-dark-border text-light-textMain dark:text-dark-textMain font-medium hover:bg-light-bg dark:hover:bg-dark-bg transition-colors"
              >
                View Projects
              </ScrollLink>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
