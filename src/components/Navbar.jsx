import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Services', to: 'services' },
  { name: 'Experience', to: 'experience' },
  { name: 'Blog', to: '/blog', isRoute: true }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to, isRoute) => {
    setIsMobileMenuOpen(false);
    if (isRoute) {
      if (to === window.location.pathname) return;
      window.scrollTo(0, 0);
    } else if (!isHomePage) {
      navigate(`/#${to}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-light-border dark:border-dark-border py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <RouterLink
          to="/"
          onClick={() => { window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}
          className="text-2xl font-display font-bold text-light-textMain dark:text-dark-textMain flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-full bg-light-primary text-white flex items-center justify-center text-sm">R</span>
          Rudra.
        </RouterLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isRoute ? (
                  <RouterLink
                    to={link.to}
                    onClick={() => handleNavClick(link.to, true)}
                    className={`text-sm font-medium transition-colors hover:text-light-primary dark:hover:text-dark-primary ${
                      location.pathname === link.to
                        ? 'text-light-primary dark:text-dark-primary'
                        : 'text-light-textMain dark:text-dark-textMain'
                    }`}
                  >
                    {link.name}
                  </RouterLink>
                ) : isHomePage ? (
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    className="cursor-pointer text-sm font-medium text-light-textMain dark:text-dark-textMain hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                    activeClass="!text-light-primary dark:!text-dark-primary"
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.to, false)}
                    className="text-sm font-medium text-light-textMain dark:text-dark-textMain hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={600}
                className="cursor-pointer px-5 py-2 rounded-full bg-light-primary hover:bg-light-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white dark:text-gray-900 font-medium transition-colors"
              >
                Hire Me
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#contact"
                className="px-5 py-2 rounded-full bg-light-primary hover:bg-light-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white dark:text-gray-900 font-medium transition-colors"
              >
                Hire Me
              </RouterLink>
            )}
          </div>
        </nav>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-light-textMain dark:text-dark-textMain focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isRoute ? (
                    <RouterLink
                      to={link.to}
                      onClick={() => handleNavClick(link.to, true)}
                      className="block text-lg font-medium text-light-textMain dark:text-dark-textMain"
                    >
                      {link.name}
                    </RouterLink>
                  ) : isHomePage ? (
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      offset={-80}
                      duration={600}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium text-light-textMain dark:text-dark-textMain"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.to, false)}
                      className="block text-lg font-medium text-light-textMain dark:text-dark-textMain text-left w-full"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-light-border dark:border-dark-border">
                {isHomePage ? (
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-80}
                    duration={600}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center w-full py-3 rounded-full bg-light-primary dark:bg-dark-primary text-white dark:text-gray-900 font-medium"
                  >
                    Hire Me
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center w-full py-3 rounded-full bg-light-primary dark:bg-dark-primary text-white dark:text-gray-900 font-medium"
                  >
                    Hire Me
                  </RouterLink>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
