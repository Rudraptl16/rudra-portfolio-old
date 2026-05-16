  import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      navigate(`/#${to}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={600}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => isHomePage ? null : navigate('/')}
        >
          <span className="text-2xl font-black text-white tracking-tighter transition-all duration-300">
            RUDRA <span className="text-dark-primary">/&gt;</span>
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              spy={true}
              activeClass="text-dark-primary"
              className="text-sm font-semibold text-dark-textMuted hover:text-white cursor-pointer transition-colors duration-300"
              onClick={() => handleNavClick(link.to)}
            >
              {link.name}
            </ScrollLink>
          ))}
          
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            className="btn-primary py-3 px-6 text-xs shadow-none cursor-pointer"
          >
            Hire Me
          </ScrollLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-2xl z-[200] lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-4xl text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiX />
            </button>
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                className="text-2xl font-black tracking-widest uppercase text-white hover:text-dark-primary transition-colors"
                onClick={() => handleNavClick(link.to)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              className="btn-primary w-2/3 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </ScrollLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
