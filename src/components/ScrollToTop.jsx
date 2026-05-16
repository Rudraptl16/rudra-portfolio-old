import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 w-14 h-14 glass bg-dark-primary/10 border-dark-primary/20 text-dark-primary rounded-2xl flex items-center justify-center text-xl z-[40] hover:bg-dark-primary hover:text-gray-950 transition-all shadow-2xl shadow-primary/20 group"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaChevronUp />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
