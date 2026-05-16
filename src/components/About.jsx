import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaMobileAlt, FaDatabase, FaLayerGroup } from 'react-icons/fa';

const roles = [
  { 
    title: 'Full Stack Developer', 
    desc: 'Engineering robust applications with modern architecture and scalable backends.', 
    icon: <FaCode />, 
    color: 'from-purple-500 to-indigo-600'
  },
  { 
    title: 'UI/UX Architect', 
    desc: 'Designing fluid, intuitive interfaces that bridge the gap between human and machine.', 
    icon: <FaLayerGroup />, 
    color: 'from-pink-500 to-rose-600'
  },
  { 
    title: 'Mobile Specialist', 
    desc: 'Crafting high-performance cross-platform mobile experiences with native feel.', 
    icon: <FaMobileAlt />, 
    color: 'from-blue-500 to-cyan-600'
  },
  { 
    title: 'Systems Thinker', 
    desc: 'Optimizing complex digital ecosystems for speed, security, and reliability.', 
    icon: <FaDatabase />, 
    color: 'from-emerald-500 to-teal-600'
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-dark-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-dark-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
           {/* Left: Intro Image (5 cols) */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="lg:col-span-5 relative group"
           >
              <div className="absolute -inset-4 bg-gradient-to-r from-dark-primary to-dark-secondary rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700" />
              <div className="relative glass-card p-3 rounded-[3rem] overflow-hidden">
                 <img 
                   src="/images/RP Logo.png" 
                   alt="Rudra Patel" 
                   className="w-full h-full object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000"
                 />
              </div>
              
              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass-card px-8 py-6 flex items-center gap-4 border-dark-primary/30"
              >
                 <div className="text-4xl font-black text-dark-primary">02+</div>
                 <div className="text-[9px] font-black tracking-widest text-white/40 uppercase leading-tight">Years of<br/>Execution</div>
              </motion.div>
           </motion.div>

           {/* Right: Intro Text (7 cols) */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-7"
           >
              <div className="flex items-center gap-3 mb-6">
                 <span className="w-12 h-[2px] bg-dark-primary rounded-full" />
                 <span className="text-dark-primary font-black tracking-[0.3em] uppercase text-sm">Identity</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                Crafting <span className="text-gradient-purple">Intelligence</span> <br/> 
                Through Code.
              </h2>
              <p className="text-dark-textMuted text-xl leading-relaxed mb-10 font-medium">
                I am <span className="text-white font-bold">Rudra Patel</span>, a digital architect currently pursuing my B.Tech 
                at <span className="text-dark-primary font-bold">Parul University</span>. My journey is defined by a relentless 
                pursuit of technical perfection and an obsession with clean, functional design.
              </p>
              <p className="text-dark-textMuted text-lg leading-relaxed mb-10">
                Since 2021, I've been deep-diving into the digital forge, transforming complex business logic into 
                seamless user experiences. I don't just build websites; I engineer digital ecosystems that perform.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <h4 className="text-white font-black text-sm uppercase tracking-widest">Education</h4>
                    <p className="text-dark-textMuted text-sm">B.Tech in Computer Science<br/><span className="text-dark-primary/60 font-bold">Parul University</span></p>
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-white font-black text-sm uppercase tracking-widest">Base</h4>
                    <p className="text-dark-textMuted text-sm">Gujarat, India<br/><span className="text-dark-secondary/60 font-bold">GMT +5:30</span></p>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Roles Grid: Modern Minimal Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${role.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rounded-bl-full`} />
              
              <div className="w-16 h-16 rounded-2xl glass mb-8 flex items-center justify-center text-3xl text-dark-primary group-hover:scale-110 transition-transform duration-500">
                {role.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-dark-primary transition-colors">{role.title}</h3>
              <p className="text-dark-textMuted text-sm leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Expertise Bento Block */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-8 glass-card p-12 flex flex-col justify-center relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 p-12 text-9xl text-white/[0.01] font-black pointer-events-none select-none">PASSION</div>
              <h3 className="text-3xl font-black text-white mb-6">Digital Craftsmanship</h3>
              <p className="text-dark-textMuted text-lg leading-relaxed max-w-2xl mb-10">
                I believe that every line of code should serve a purpose. My philosophy is simple: 
                build products that are <span className="text-white font-bold">accessible</span>, 
                <span className="text-white font-bold">inclusive</span>, and <span className="text-white font-bold">exceptionally fast</span>. 
                Whether it's a mobile app or a complex web dashboard, I focus on the details that matter.
              </p>
              <div className="flex flex-wrap gap-4">
                 {['Fast Execution', 'Scalable Code', 'Pixel Perfect', 'User Centric'].map(tag => (
                   <span key={tag} className="px-5 py-2 glass rounded-full text-[10px] font-black tracking-widest uppercase text-white/60 border-white/5">{tag}</span>
                 ))}
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-4 glass-card p-10 bg-gradient-to-br from-dark-primary/5 to-transparent flex flex-col justify-between"
           >
              <div>
                 <h4 className="text-white font-black text-xl mb-4 tracking-tight">Current Orbit</h4>
                 <p className="text-dark-textMuted text-sm leading-relaxed">
                    Developing high-fidelity digital assets and exploring the frontiers of AI integration in modern UI systems.
                 </p>
              </div>
              <div className="pt-10 border-t border-white/5 mt-10">
                 <div className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-4">Project Volume</div>
                 <div className="text-5xl font-black text-gradient-purple">15+</div>
                 <div className="text-[9px] font-black tracking-widest text-white/20 uppercase mt-2">Completed Transmissions</div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
