import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronRight, FaChevronUp, FaRocket, FaEye, FaCalendarAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import Modal from './Modal';

// Enhanced projects with more info for the modal
const enhancedProjects = projects.map((p, idx) => ({
  ...p,
  year: 2023 + (idx % 2),
  status: 'Completed',
  longDesc: p.description + " This project was built with a focus on high performance, accessibility, and modern design principles. It features a fully responsive layout, smooth animations, and a robust architecture.",
  features: ['Fully Responsive Design', 'Custom UI Components', 'API Integration', 'Optimized Performance', 'Dark/Light Mode Support'],
  techDetails: p.tags || ['React', 'Tailwind', 'Framer Motion']
}));

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', ...new Set(enhancedProjects.map(p => p.category))];
  
  // Filter by category first
  const categoryFiltered = filter === 'All' 
    ? enhancedProjects 
    : enhancedProjects.filter(p => p.category === filter);

  // Then apply visibility limit
  const visibleProjects = showAll ? categoryFiltered : categoryFiltered.slice(0, 6);

  return (
    <section id="projects" className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-dark-primary rounded-full" />
            <span className="text-dark-primary font-black tracking-[0.3em] uppercase text-xs">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Creative <span className="text-gradient-purple">Artifacts</span>
          </h2>
          <p className="text-dark-textMuted text-xl max-w-2xl leading-relaxed font-medium">
            A curated exhibit of high-fidelity digital solutions.
          </p>
        </div>

        {/* Filter System: Minimal Style */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false); // Reset show all when filter changes
              }}
              className={`relative px-8 py-4 rounded-2xl text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-700 overflow-hidden ${
                filter === cat
                  ? 'text-white'
                  : 'text-dark-textMuted glass hover:text-white'
              }`}
            >
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-dark-primary to-dark-secondary -z-10"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid: Clean High-Fidelity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id || index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl border border-white/5"
                onClick={() => setSelectedProject(project)}
              >
                {/* Main Visual */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Status Badge (Static) */}
                <div className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 glass rounded-full border-white/10 z-20">
                   <div className="w-2 h-2 rounded-full bg-dark-primary animate-pulse" />
                   <span className="text-[9px] font-black tracking-widest text-white/80 uppercase">{project.status}</span>
                </div>

                {/* Premium Hover Experience */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
                   <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="space-y-6"
                   >
                      <div className="flex items-center gap-4 text-xs font-black tracking-widest text-dark-primary uppercase">
                        <span>{project.category}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="flex items-center gap-2"><FaCalendarAlt className="text-[10px]" /> {project.year}</span>
                      </div>
                      
                      <h3 className="text-4xl font-black text-white leading-tight tracking-tight">
                        {project.title}
                      </h3>
                      
                      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                         <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white/60 uppercase group/link">
                            <FaEye className="text-dark-primary group-hover/link:scale-125 transition-transform" /> 
                            <span>Inspect Artifact</span>
                         </div>
                         <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-dark-primary group-hover:bg-dark-primary group-hover:text-white transition-all">
                            <FaChevronRight />
                         </div>
                      </div>
                   </motion.div>
                </div>

                {/* Corner Decor Icons */}
                <div className="absolute top-8 right-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-10 group-hover:translate-x-0">
                   <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl text-white hover:text-dark-primary transition-colors">
                      <FaGithub />
                   </div>
                   <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl text-white hover:text-dark-secondary transition-colors">
                      <FaExternalLinkAlt />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {categoryFiltered.length > 6 && (
           <div className="mt-24 flex flex-col items-center gap-8">
              <div className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">
                 {showAll ? 'Complete Archive Unlocked' : `${categoryFiltered.length - 6} Additional Assets Available`}
              </div>
              <button 
                 onClick={() => setShowAll(!showAll)}
                 className="btn-glass flex items-center gap-4 group px-12 py-6 cursor-pointer"
              >
                 {showAll ? (
                    <>Show Less <FaChevronUp className="group-hover:-translate-y-1 transition-transform" /></>
                 ) : (
                    <>Discover More <FaChevronRight className="group-hover:translate-x-1 transition-transform" /></>
                 )}
              </button>
           </div>
        )}
      </div>

      {/* Modal: High Fidelity Details */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        icon={<FaRocket />}
      >
        <div className="space-y-12">
          {/* Hero Asset */}
          <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden glass border-white/10 group">
             <img 
                src={selectedProject?.image} 
                alt={selectedProject?.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
             <div className="absolute bottom-10 left-10 flex items-center gap-6">
                <div className="px-6 py-3 glass rounded-2xl text-[10px] font-black tracking-widest uppercase text-white border-white/20">
                   Year: {selectedProject?.year}
                </div>
                <div className="px-6 py-3 glass rounded-2xl text-[10px] font-black tracking-widest uppercase text-dark-primary border-dark-primary/20">
                   {selectedProject?.category}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             {/* Main Info */}
             <div className="lg:col-span-8 space-y-12">
                <div>
                   <h4 className="text-xs font-black text-dark-primary mb-6 uppercase tracking-[0.4em] opacity-80">The Mission</h4>
                   <p className="text-dark-textMuted text-xl leading-relaxed font-medium">
                      {selectedProject?.longDesc}
                   </p>
                </div>
                
                <div>
                   <h4 className="text-xs font-black text-dark-secondary mb-8 uppercase tracking-[0.4em] opacity-80">Engineering Core</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProject?.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 glass rounded-2xl border-white/5 group/feat hover:border-dark-primary/30 transition-all">
                           <div className="w-2 h-2 rounded-full bg-dark-primary group-hover/feat:scale-150 transition-transform" />
                           <span className="text-white font-bold">{f}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Sidebar Actions */}
             <div className="lg:col-span-4 space-y-12">
                <div>
                   <h4 className="text-xs font-black text-dark-accent mb-8 uppercase tracking-[0.4em] opacity-80">Tech Stack</h4>
                   <div className="flex flex-wrap gap-3">
                      {selectedProject?.techDetails.map((tag) => (
                        <span key={tag} className="px-5 py-3 glass rounded-2xl text-[10px] font-black tracking-widest uppercase text-white/50 border-white/5 hover:text-white transition-colors cursor-default">
                           {tag}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="space-y-4">
                   <a 
                      href={selectedProject?.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-primary w-full flex items-center justify-center gap-4 py-5"
                   >
                      Inspect Live <FaExternalLinkAlt className="text-xs" />
                   </a>
                   <a 
                      href={selectedProject?.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-glass w-full flex items-center justify-center gap-4 py-5"
                   >
                      Source Code <FaGithub className="text-xl" />
                   </a>
                </div>
             </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
