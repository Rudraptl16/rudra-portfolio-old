import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

export default function Modal({ isOpen, onClose, title, children, icon }) {
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark-bg/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] glass-card overflow-hidden flex flex-col shadow-2xl shadow-primary/20 border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                {icon && <div className="text-3xl text-dark-primary">{icon}</div>}
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-2xl text-white hover:bg-dark-primary hover:text-white transition-all duration-300"
              >
                <HiX />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar">
              {children}
            </div>
            
            {/* Footer / Glow Decor */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-dark-primary via-dark-secondary to-dark-accent opacity-50" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
