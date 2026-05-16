import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand Area */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-black text-white tracking-tighter">
              Rudra<span className="text-dark-primary">.</span>Patel
            </h2>
            <p className="text-dark-textMuted text-sm font-medium">
              Building digital experiences with precision and passion.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 text-xs font-black tracking-widest uppercase">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={600}
                className="cursor-pointer text-dark-textMuted hover:text-dark-primary transition-colors duration-300"
              >
                {item}
              </ScrollLink>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=100082469136911' },
              { icon: FaInstagram, url: 'https://www.instagram.com/rudraa_ptll/' },
              { icon: FaGithub, url: 'https://github.com/Rudraptl16' },
              { icon: FaYoutube, url: 'https://www.youtube.com/@rudrapatel4172' },
              { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/rudra-patel-23/' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass flex items-center justify-center rounded-xl text-white hover:text-dark-primary hover:border-dark-primary/50 transition-all duration-300"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-textMuted text-xs font-bold">
            &copy; {currentYear} Rudra Patel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-dark-textMuted text-[10px] font-black tracking-widest uppercase cursor-help hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-dark-textMuted text-[10px] font-black tracking-widest uppercase cursor-help hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

