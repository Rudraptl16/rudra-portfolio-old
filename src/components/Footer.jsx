import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-8">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <ScrollLink to="home" smooth={true} duration={600} className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition-colors">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={600} className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition-colors">About</ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={600} className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition-colors">Skills</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={600} className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition-colors">Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={600} className="cursor-pointer hover:text-light-primary dark:hover:text-dark-primary transition-colors">Contact</ScrollLink>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 my-4">
          <a href="https://www.facebook.com/profile.php?id=100082469136911" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#1877F2] transition-colors" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/rudraa_ptll/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#E4405F] transition-colors" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://github.com/Rudraptl16/Rudraptl16" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#333] dark:hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.youtube.com/@rudrapatel4172" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#FF0000] transition-colors" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/in/rudra-patel-265258313/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Watermark */}
        <div className="text-center text-sm text-light-textMuted dark:text-dark-textMuted">
          <p>&copy; {currentYear} <strong>Rudra Patel</strong> | rudrapatel.me</p>
        </div>
      </div>
    </footer>
  );
}
