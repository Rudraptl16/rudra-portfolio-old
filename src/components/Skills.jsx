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

// Icon Map from string in data to React Icon
const iconMap = {
  html5: <FaHtml5 className="text-[#E34F26]" />,
  css3: <FaCss3Alt className="text-[#1572B6]" />,
  javascript: <FaJs className="text-[#F7DF1E]" />,
  react: <FaReact className="text-[#61DAFB]" />,
  nextjs: <SiNextdotjs className="dark:text-white" />,
  tailwindcss: <SiTailwindcss className="text-[#06B6D4]" />,
  nodejs: <FaNodeJs className="text-[#339933]" />,
  express: <SiExpress className="dark:text-white" />,
  api: <BiServer className="text-gray-500" />,
  php: <FaPhp className="text-[#777BB4]" />,
  java: <FaJava className="text-[#007396]" />,
  flutter: <SiFlutter className="text-[#02569B]" />,
  reactnative: <TbBrandReactNative className="text-[#61DAFB]" />,
  dart: <SiDart className="text-[#0175C2]" />,
  mongodb: <SiMongodb className="text-[#47A248]" />,
  mysql: <SiMysql className="text-[#4479A1]" />,
  firebase: <SiFirebase className="text-[#FFCA28]" />,
  git: <DiGit className="text-[#F05032]" />,
  github: <FaGithub className="dark:text-white" />,
  vscode: <TbBrandVscode className="text-[#007ACC]" />,
  figma: <FaFigma className="text-[#F24E1E]" />,
  vercel: <SiVercel className="dark:text-white" />,
  postman: <SiPostman className="text-[#FF6C37]" />,
  aws: <FaAws className="text-[#FF9900]" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skills[0].category);

  const categories = skills.map(s => s.category);
  const activeSkills = skills.find(s => s.category === activeTab)?.technologies || [];

  return (
    <section id="skills" className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-light-textMain dark:text-dark-textMain">
            Technologies <span className="text-gradient">& Skills</span>
          </h2>
          <p className="text-light-textMuted dark:text-dark-textMuted max-w-2xl mx-auto">
            My toolkit for building high-performance, scalable, and responsive digital products.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-light-primary dark:bg-dark-primary text-white dark:text-gray-900 shadow-md transform scale-105'
                  : 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-textMuted dark:text-dark-textMuted hover:border-light-primary dark:hover:border-dark-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div className="min-h-[250px]" layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {activeSkills.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex flex-col items-center justify-center p-6 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:border-light-primary dark:hover:border-dark-primary transition-all cursor-crosshair"
                >
                  <div className="text-5xl mb-4 transition-transform group-hover:scale-110">
                    {iconMap[tech.icon] || <BiServer />}
                  </div>
                  <span className="font-medium text-light-textMain dark:text-dark-textMain text-sm">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
