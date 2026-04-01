import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background Mesh/Gradient (Subtle) */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-primary/5 via-transparent to-light-secondary/5 dark:from-dark-primary/5 dark:via-transparent dark:to-dark-secondary/5 -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Column: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-primary/20 dark:border-dark-primary/20 text-light-primary dark:text-dark-primary text-sm font-semibold">
              Hello, I'm
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 text-light-textMain dark:text-dark-textMain">
              RUDRA PATEL
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl font-medium mb-6 h-[40px] text-light-textMuted dark:text-dark-textMuted">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer', 2000,
                'Mobile App Developer', 2000,
                'React Developer', 2000,
                'Problem Solver', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base md:text-lg mb-8 max-w-lg leading-relaxed text-light-textMuted dark:text-dark-textMuted">
              Building powerful web & mobile experiences, end to end. Passionate about UI/UX, clean coding, and crafting digital solutions that drive impact.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-80}
              duration={600}
              className="cursor-pointer px-6 py-3 rounded-full bg-light-primary dark:bg-dark-primary text-white dark:text-gray-900 font-medium hover:scale-105 transition-transform shadow-lg shadow-light-primary/30 dark:shadow-dark-primary/20"
            >
              View My Work
            </ScrollLink>
            <a
              href="/Rudra patel (1).pdf"
              download="Rudra_Patel_Resume.pdf"
              className="px-6 py-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-textMain dark:text-dark-textMain font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Download Resume
            </a>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-80}
              duration={600}
              className="cursor-pointer px-6 py-3 rounded-full bg-transparent border border-transparent text-light-primary dark:text-dark-primary font-medium hover:underline flex items-center gap-2"
            >
              Contact Me
            </ScrollLink>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full sm:rounded-2xl overflow-visible hidden md:flex items-center justify-center">
             
             {/* Decorative Background Blob */}
             <div className="absolute inset-0 bg-light-primary/20 dark:bg-dark-primary/20 blur-3xl rounded-full" />
             
             {/* Profile Image container */}
             <div className="absolute inset-4 z-10 border-2 border-light-border dark:border-dark-border rounded-full sm:rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface shadow-xl">
               <img
                 src="/images/RP-1.jpg"
                 alt="Rudra Patel Profile"
                 className="w-full h-full object-cover animate-pulse-slow"
                 style={{ animation: 'float 6s ease-in-out infinite' }}
               />
             </div>

             {/* Floating Badges */}
             <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-6 z-20 bg-white dark:bg-dark-surface p-3 rounded-full shadow-lg border border-light-border dark:border-dark-border"
             >
                <FaReact className="text-4xl text-[#61DAFB]" />
             </motion.div>
             <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-20 -right-6 z-20 bg-white dark:bg-dark-surface p-3 rounded-full shadow-lg border border-light-border dark:border-dark-border"
             >
                <SiFlutter className="text-4xl text-[#02569B]" />
             </motion.div>
             <motion.div 
                animate={{ y: [-5, 15, -5] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -bottom-6 left-20 z-20 bg-white dark:bg-dark-surface p-3 rounded-full shadow-lg border border-light-border dark:border-dark-border"
             >
                <FaNodeJs className="text-4xl text-[#339933]" />
             </motion.div>
          </div>

          {/* Mobile simple image fallback */}
          <div className="md:hidden w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-light-primary/30 dark:border-dark-primary/30 z-10">
              <img
                 src="/images/RP-1.jpg"
                 alt="Rudra Patel Profile"
                 className="w-full h-full object-cover"
               />
          </div>
        </motion.div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
      >
        <ScrollLink to="about" smooth={true} offset={-80} duration={600}>
          <span className="text-light-textMuted dark:text-dark-textMuted text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-light-textMuted dark:border-dark-textMuted rounded-full flex justify-center mt-1">
            <div className="w-1 h-2 bg-light-primary dark:bg-dark-primary rounded-full mt-1 animate-bounce" />
          </div>
        </ScrollLink>
      </motion.div>

    </section>
  );
}
