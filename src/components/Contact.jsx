import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if EmailJS keys are provided
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      toast.error('Email service is not configured yet. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending message...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        toast.dismiss(loadingToast);
        toast.success('Message sent successfully! I will get back to you soon.');
        formRef.current.reset();
        setIsSubmitting(false);
    }, (error) => {
        toast.dismiss(loadingToast);
        toast.error('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-24 bg-light-bg dark:bg-dark-bg relative">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-light-textMain dark:text-dark-textMain">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-light-textMuted dark:text-dark-textMuted max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Contact Info */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold text-light-textMain dark:text-dark-textMain mb-6">
              Contact Information
            </h3>
            
            <p className="text-light-textMuted dark:text-dark-textMuted mb-10 leading-relaxed text-lg">
              I'm open to freelance opportunities, collaborations, and full-time roles. 
              Fill out the form or reach out directly via email or social media.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center text-light-primary dark:text-dark-primary text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm font-semibold text-light-textMuted dark:text-dark-textMuted uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:rudrapatel4172@gmail.com" className="text-lg font-medium text-light-textMain dark:text-dark-textMain hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                    rudrapatel4172@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center text-light-primary dark:text-dark-primary text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-semibold text-light-textMuted dark:text-dark-textMuted uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-medium text-light-textMain dark:text-dark-textMain">
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-light-textMuted dark:text-dark-textMuted uppercase tracking-wider mb-4">Social Profiles</p>
              <div className="flex gap-4">
                <a href="https://github.com/Rudraptl16/Rudraptl16" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center text-light-textMain dark:text-dark-textMain hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-gray-900 hover:border-light-primary dark:hover:border-dark-primary transition-all shadow-sm">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/rudra-patel-265258313/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center text-light-textMain dark:text-dark-textMain hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-sm">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center text-light-textMain dark:text-dark-textMain hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all shadow-sm">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="p-8 md:p-10 rounded-3xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-xl">
              <h3 className="text-2xl font-display font-bold text-light-textMain dark:text-dark-textMain mb-6">
                Send a Message
              </h3>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium text-light-textMain dark:text-dark-textMain">Your Name</label>
                    <input type="text" name="user_name" id="user_name" required className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-textMain dark:text-dark-textMain focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-shadow" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium text-light-textMain dark:text-dark-textMain">Your Email</label>
                    <input type="email" name="user_email" id="user_email" required className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-textMain dark:text-dark-textMain focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-shadow" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-light-textMain dark:text-dark-textMain">Subject</label>
                  <input type="text" name="subject" id="subject" className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-textMain dark:text-dark-textMain focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-shadow" placeholder="Project Inquiry" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-light-textMain dark:text-dark-textMain">Message</label>
                  <textarea name="message" id="message" rows="5" required className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-textMain dark:text-dark-textMain focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-shadow resize-none" placeholder="Hello Rudra, I would like to discuss..." minLength="20"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white dark:text-gray-900 transition-all shadow-md ${
                    isSubmitting 
                      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                      : 'bg-light-primary hover:bg-light-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 hover:-translate-y-1 shadow-light-primary/30 dark:shadow-dark-primary/30'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
