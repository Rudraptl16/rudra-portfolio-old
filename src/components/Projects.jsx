import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filters = ['All', 'Web App', 'Mobile App', 'Full-Stack', 'Landing Page'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-24 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-light-textMain dark:text-dark-textMain">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-light-textMuted dark:text-dark-textMuted max-w-2xl mx-auto">
            A selection of my recent work covering web development, mobile apps, and full-stack solutions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-light-primary border-light-primary text-white dark:bg-dark-primary dark:border-dark-primary dark:text-gray-900 shadow-md'
                  : 'bg-transparent border-light-border dark:border-dark-border text-light-textMain dark:text-dark-textMain hover:border-light-primary dark:hover:border-dark-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group form-group rounded-2xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg overflow-hidden flex flex-col hover:shadow-xl hover:shadow-light-primary/10 dark:hover:shadow-dark-primary/10 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image & Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-light-primary dark:bg-dark-primary text-white dark:text-gray-900 rounded-full hover:scale-110 transition-transform"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold font-display text-light-textMain dark:text-dark-textMain mb-2">
                    {project.title}
                  </h3>
                  <p className="text-light-textMuted dark:text-dark-textMuted text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary rounded-lg text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-8 py-3 rounded-full border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary font-bold hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-gray-900 transition-colors"
            >
              View More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
