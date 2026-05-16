import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const socials = [
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/rudra-patel-23/', color: 'hover:text-[#0077B5]' },
    { icon: <FaGithub />, link: 'https://github.com/Rudraptl16', color: 'hover:text-white' },
    { icon: <FaTwitter />, link: 'https://twitter.com/rudrapatel', color: 'hover:text-[#1DA1F2]' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/rudraa_ptll/', color: 'hover:text-[#E4405F]' },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      toast.error('Configuration missing.');
      return;
    }

    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success('Transmission Successful!');
      form.current.reset();
    })
    .catch(() => {
      toast.error('Transmission Failed.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="section-padding bg-dark-bg relative overflow-hidden">
      <Toaster position="bottom-center" />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-dark-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-dark-primary rounded-full" />
            <span className="text-dark-primary font-black tracking-[0.3em] uppercase text-xs">Transmission</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Let's <span className="text-gradient-purple">Connect</span>
          </h2>
          <p className="text-dark-textMuted text-xl max-w-2xl leading-relaxed font-medium">
            Available for mission-critical collaborations and full-stack engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Intelligence & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
             <div className="glass-card p-12 space-y-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                   <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-black tracking-widest text-emerald-500 uppercase">Available for work</span>
                   </div>
                </div>

                <div className="space-y-10">
                   <div className="flex items-center gap-8 group">
                     <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-3xl text-dark-primary group-hover:bg-dark-primary group-hover:text-white transition-all duration-700 shadow-xl">
                       <FaEnvelope />
                     </div>
                     <div>
                       <div className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-2">Secure Channel</div>
                       <div className="text-white font-bold text-xl tracking-tight">rudrapatel4172@gmail.com</div>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-8 group">
                     <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-3xl text-dark-secondary group-hover:bg-dark-secondary group-hover:text-white transition-all duration-700 shadow-xl">
                       <FaPhoneAlt />
                     </div>
                     <div>
                       <div className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-2">Direct Line</div>
                       <div className="text-white font-bold text-xl tracking-tight">+91 97232 44172</div>
                     </div>
                   </div>

                   <div className="flex items-center gap-8 group">
                     <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-3xl text-dark-accent group-hover:bg-dark-accent group-hover:text-white transition-all duration-700 shadow-xl">
                       <FaMapMarkerAlt />
                     </div>
                     <div>
                       <div className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-2">Base Station</div>
                       <div className="text-white font-bold text-xl tracking-tight">Gujarat, India</div>
                     </div>
                   </div>
                </div>

                <div className="pt-12 border-t border-white/5">
                   <div className="text-[10px] font-black tracking-widest text-white/20 uppercase mb-8 text-center">External Frequencies</div>
                   <div className="flex justify-between items-center px-4">
                      {socials.map((social, idx) => (
                        <a 
                          key={idx}
                          href={social.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`text-3xl text-white/40 ${social.color} transition-all duration-500 hover:scale-125`}
                        >
                          {social.icon}
                        </a>
                      ))}
                   </div>
                </div>
             </div>

             <div className="glass-card p-10 bg-gradient-to-br from-dark-primary/5 via-transparent to-transparent border-dashed border-white/10">
                <p className="text-dark-textMuted text-sm leading-relaxed text-center font-medium">
                   "Great things in business are never done by one person. They're done by a team of people."
                </p>
             </div>
          </div>

          {/* Right: Submission Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-12 md:p-16 relative"
          >
            <div className="absolute top-0 right-10 p-4 text-[8px] font-black tracking-widest text-white/10 uppercase">Form Protocol v2.0</div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 group">
                  <label className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase ml-1 group-focus-within:text-dark-primary transition-colors">Identification</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-dark-primary/50 focus:bg-white/[0.05] transition-all duration-500"
                  />
                </div>
                <div className="space-y-4 group">
                  <label className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase ml-1 group-focus-within:text-dark-primary transition-colors">Contact Address</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-dark-primary/50 focus:bg-white/[0.05] transition-all duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 group">
                <label className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase ml-1 group-focus-within:text-dark-primary transition-colors">Subject Line</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can I assist?"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-dark-primary/50 focus:bg-white/[0.05] transition-all duration-500"
                />
              </div>

              <div className="space-y-4 group">
                <label className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase ml-1 group-focus-within:text-dark-primary transition-colors">Detailed Message</label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me about your project mission..."
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-dark-primary/50 focus:bg-white/[0.05] transition-all duration-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="btn-primary w-full flex items-center justify-center gap-6 py-6 group"
              >
                {isSending ? (
                  <span className="flex items-center gap-3">
                     <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                     Transmitting...
                  </span>
                ) : (
                  <>
                    Initiate Transmission
                    <FaPaperPlane className="text-sm group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
