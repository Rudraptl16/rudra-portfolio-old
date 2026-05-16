import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaTrophy } from 'react-icons/fa';

const education = [
  {
    year: '2023 - 2027',
    degree: 'B.Tech - Computer Science Engineering',
    inst: 'Parul University',
    desc: 'Deep diving into data structures, algorithms, and full-stack development. Current CGPA: 9.0+'
  },
  {
    year: '2021 - 2023',
    degree: 'Higher Secondary Education',
    inst: 'Shree Swaminarayan Gurukul',
    desc: 'Focused on Science and Mathematics with a strong foundation in problem solving.'
  }
];

const achievements = [
  { title: 'Google UX Design', issuer: 'Coursera', date: '2023', icon: <FaCertificate /> },
  { title: 'Full Stack Specialization', issuer: 'Meta', date: '2023', icon: <FaTrophy /> },
  { title: 'Mobile App Architecture', issuer: 'Udacity', date: '2022', icon: <FaCertificate /> }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-dark-primary rounded-full" />
            <span className="text-dark-primary font-black tracking-[0.2em] uppercase text-sm">Pathways</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Growth & <span className="text-gradient-purple">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Education Column (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
             <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl text-dark-primary">
                   <FaGraduationCap />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">Academic Foundation</h3>
             </div>

             <div className="space-y-8 relative">
                <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-dark-primary/40 to-transparent" />
                
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-16 group"
                  >
                    <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-dark-bg border-4 border-dark-primary z-10 group-hover:scale-125 transition-transform" />
                    <div className="glass-card p-8 group-hover:border-dark-primary/30 transition-all">
                       <span className="text-dark-primary font-black text-[10px] tracking-widest uppercase mb-2 block">{edu.year}</span>
                       <h4 className="text-xl font-black text-white mb-1">{edu.degree}</h4>
                       <div className="text-white/60 text-sm font-bold mb-4">{edu.inst}</div>
                       <p className="text-dark-textMuted text-sm leading-relaxed">{edu.desc}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Achievements Column (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
             <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl text-dark-secondary">
                   <FaTrophy />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">Certifications</h3>
             </div>

             <div className="grid grid-cols-1 gap-6">
                {achievements.map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-6 flex items-center gap-6 group hover:bg-white/[0.04] transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl text-dark-primary group-hover:scale-110 transition-transform">
                      {badge.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white group-hover:text-dark-primary transition-colors">{badge.title}</h4>
                      <p className="text-dark-textMuted text-xs font-bold uppercase tracking-widest">{badge.issuer} • {badge.date}</p>
                    </div>
                  </motion.div>
                ))}
             </div>

             <div className="glass-card p-8 bg-gradient-to-br from-dark-primary/5 to-transparent border-dashed border-white/10 text-center">
                <p className="text-dark-textMuted text-xs font-bold tracking-[0.2em] uppercase leading-relaxed">
                   Continuously learning and expanding <br /> my technical horizons.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
