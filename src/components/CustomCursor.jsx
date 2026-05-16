import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer ring
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] mix-blend-difference hidden lg:block">
      {/* Outer Ring
      <motion.div
        className="absolute w-10 h-10 rounded-full border border-white"
        style={{
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 2.2 : 1,
        }}
        transition={{ 
          scale: { type: 'spring', damping: 15, stiffness: 300 },
          opacity: { duration: 0.3 }
        }}
      />*/}

      {/* Inner Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-white rounded-full"
        style={{
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicking ? 4 : isHovering ? 0 : 1,
        }}
        transition={{ 
          scale: { duration: 0.2 },
          opacity: { duration: 0.3 }
        }}
      />
      
      {/* Hover Label */}
      <AnimatePresence>
         {isHovering && (
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.5 }}
               className="absolute text-[9px] font-black text-white uppercase tracking-[0.2em]"
               style={{
                  left: 0,
                  top: 0,
                  x: mouseX,
                  y: mouseY,
                  translateX: 25,
                  translateY: -25,
               }}
            >
               View
            </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
