import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/skills';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, 
  FaFigma, FaAws, FaGithub 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiFlutter, SiMongodb, 
  SiMysql, SiFirebase, SiVercel, SiPostman, SiDart 
} from 'react-icons/si';
import { BiServer } from 'react-icons/bi';
import { DiGit } from 'react-icons/di';
import { TbBrandReactNative, TbBrandVscode } from 'react-icons/tb';

const iconMap = {
  html5: <FaHtml5 className="text-[#E34F26]" />,
  css3: <FaCss3Alt className="text-[#1572B6]" />,
  javascript: <FaJs className="text-[#F7DF1E]" />,
  react: <FaReact className="text-[#61DAFB]" />,
  nextjs: <SiNextdotjs className="text-white" />,
  tailwindcss: <SiTailwindcss className="text-[#06B6D4]" />,
  nodejs: <FaNodeJs className="text-[#339933]" />,
  express: <SiExpress className="text-white" />,
  api: <BiServer className="text-gray-400" />,
  php: <FaPhp className="text-[#777BB4]" />,
  java: <FaJava className="text-[#007396]" />,
  flutter: <SiFlutter className="text-[#02569B]" />,
  reactnative: <TbBrandReactNative className="text-[#61DAFB]" />,
  dart: <SiDart className="text-[#0175C2]" />,
  mongodb: <SiMongodb className="text-[#47A248]" />,
  mysql: <SiMysql className="text-[#4479A1]" />,
  firebase: <SiFirebase className="text-[#FFCA28]" />,
  git: <DiGit className="text-[#F05032]" />,
  github: <FaGithub className="text-white" />,
  vscode: <TbBrandVscode className="text-[#007ACC]" />,
  figma: <FaFigma className="text-[#F24E1E]" />,
  vercel: <SiVercel className="text-white" />,
  postman: <SiPostman className="text-[#FF6C37]" />,
  aws: <FaAws className="text-[#FF9900]" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skills[0].category);

  const categories = skills.map(s => s.category);
  const activeSkills = skills.find(s => s.category === activeTab)?.technologies || [];

  return (
    <section id="skills" className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-dark-primary rounded-full" />
            <span className="text-dark-primary font-black tracking-[0.3em] uppercase text-xs">Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Technical <span className="text-gradient-purple">Weaponry</span>
          </h2>
          <p className="text-dark-textMuted text-xl max-w-2xl leading-relaxed font-medium">
            Engineering high-performance solutions with a curated stack of modern technologies.
          </p>
        </div>

        {/* Improved Categories Tab System */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-12 py-5 rounded-2xl text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-700 overflow-hidden group ${
                activeTab === cat ? 'text-white' : 'text-dark-textMuted glass hover:text-white'
              }`}
            >
              {activeTab === cat && (
                <motion.div 
                   layoutId="skillTab"
                   className="absolute inset-0 bg-gradient-to-r from-dark-primary to-dark-secondary -z-10"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid with Premium Cards */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {activeSkills.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="glass-card p-10 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dark-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex items-center gap-8 mb-10">
                     <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                        {iconMap[tech.icon] || <BiServer />}
                     </div>
                     <div>
                        <h3 className="text-2xl font-black text-white group-hover:text-dark-primary transition-colors tracking-tight">{tech.name}</h3>
                        <div className="text-[9px] font-black tracking-widest text-white/20 uppercase mt-1">Core Competency</div>
                     </div>
                  </div>
                  
                  {/* Premium Progress Bar */}
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Proficiency</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-[11px] font-black text-dark-primary"
                        >
                          90%
                        </motion.span>
                     </div>
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: '90%' }}
                           transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                           className="h-full bg-gradient-to-r from-dark-primary via-dark-secondary to-dark-accent rounded-full relative"
                        >
                           <div className="absolute inset-0 bg-[length:20px_20px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
                        </motion.div>
                     </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
