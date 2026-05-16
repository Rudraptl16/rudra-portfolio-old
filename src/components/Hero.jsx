import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaChevronRight } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import ThreeHero from './ThreeHero';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const socials = [
    { icon: <FaGithub />, link: 'https://github.com/Rudraptl16' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/rudra-patel-23/' },
    { icon: <FaTwitter />, link: 'https://twitter.com/rudrapatel' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/rudraa_ptll/' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ThreeHero />
      </div>

      {/* Social Sidebar (Fixed-like appearance) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-20">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + idx * 0.1 }}
            className="text-2xl text-dark-textMuted hover:text-dark-primary transition-all duration-300 hover:scale-120"
          >
            {social.icon}
          </motion.a>
        ))}
        <div className="w-[1px] h-24 bg-gradient-to-b from-dark-primary to-transparent mx-auto mt-4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        
        {/* Left Column: Text (8 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-dark-primary font-black tracking-[0.3em] uppercase text-sm">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-8 text-white leading-[1.1] tracking-tight">
              Hi, I'm <br />
              <span className="text-gradient-purple">Rudra Patel</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed text-dark-textMuted font-medium">
              I am a <span className="text-white font-bold">Full Stack Developer</span> and 
              <span className="text-white font-bold"> Creative Problem Solver</span>. 
              I build high-fidelity web applications and immersive digital experiences that 
              balance technical excellence with professional design.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              className="btn-primary flex items-center gap-3 group cursor-pointer"
            >
              Contact Me <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
            
            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              className="btn-glass flex items-center gap-3 cursor-pointer"
            >
              View Work
            </ScrollLink>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual (4 cols) - Mobile Hidden */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:col-span-4 hidden lg:flex flex-col justify-center items-center"
        >
           <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-dark-primary to-dark-secondary rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card p-1">
                 <img 
                    src="/images/RP Logo.png" 
                    alt="Rudra Patel" 
                    className="w-80 h-96 object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
              </div>
           </div>
        </motion.div>

      </div>
      
      {/* Scroll Down Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
      >
        <ScrollLink to="about" smooth={true} duration={800} className="flex flex-col items-center gap-3">
          <div className="text-[9px] font-black tracking-[0.5em] text-white/20 uppercase">Scroll</div>
          <div className="w-[1px] h-16 bg-gradient-to-b from-dark-primary to-transparent" />
        </ScrollLink>
      </motion.div>

    </section>
  );
}
