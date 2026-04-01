import React from 'react';
import { motion } from 'framer-motion';
import { experience, certifications } from '../data/experience';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaAws, FaReact, FaNodeJs, FaDatabase, FaShieldAlt, FaGithub } from 'react-icons/fa';

const iconMap = {
  aws: <FaAws className="text-[#FF9900]" />,
  react: <FaReact className="text-[#61DAFB]" />,
  node: <FaNodeJs className="text-[#339933]" />,
  database: <FaDatabase className="text-[#47A248]" />,
  shield: <FaShieldAlt className="text-gray-500" />,
  github: <FaGithub className="dark:text-white" />,
  trophy: <FaTrophy className="text-yellow-500" />
};

export default function Experience() {
  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="experience" className="py-24 bg-light-surface dark:bg-dark-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-light-textMain dark:text-dark-textMain">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-light-textMuted dark:text-dark-textMuted max-w-2xl mx-auto text-lg">
            My professional journey and certifications that validate my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Left Column: Work & Education */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-light-primary/10 dark:bg-dark-primary/10 flex items-center justify-center text-light-primary dark:text-dark-primary text-xl">
                <FaBriefcase />
              </div>
              <h3 className="text-2xl font-display font-bold text-light-textMain dark:text-dark-textMain">
                Work & Education
              </h3>
            </div>

            <div className="relative border-l-2 border-light-border dark:border-dark-border ml-6 pb-4 space-y-10">
              {experience.map((item, idx) => (
                <motion.div variants={itemVariants} key={idx} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-light-surface dark:bg-dark-surface border-4 border-light-primary dark:border-dark-primary" />
                  
                  <div className="bg-light-bg dark:bg-dark-bg p-6 rounded-2xl border border-light-border dark:border-dark-border shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 mb-3 rounded-full bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary text-xs font-bold tracking-wider">
                      {item.duration}
                    </span>
                    <h4 className="text-xl font-bold font-display text-light-textMain dark:text-dark-textMain mb-1">
                      {item.role}
                    </h4>
                    <p className="text-sm font-medium text-light-secondary dark:text-dark-secondary mb-4">
                      {item.company}
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-light-textMuted dark:text-dark-textMuted text-sm">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-light-secondary/10 dark:bg-dark-secondary/10 flex items-center justify-center text-light-secondary dark:text-dark-secondary text-xl">
                <FaTrophy />
              </div>
              <h3 className="text-2xl font-display font-bold text-light-textMain dark:text-dark-textMain">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div variants={itemVariants} key={idx} className="flex items-center gap-4 bg-light-bg dark:bg-dark-bg p-4 md:p-5 rounded-2xl border border-light-border dark:border-dark-border shadow-sm hover:-translate-x-2 hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center shrink-0 shadow-sm text-2xl">
                    {iconMap[cert.icon] || <FaTrophy className="text-yellow-500" />}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-base md:text-lg font-bold font-display text-light-textMain dark:text-dark-textMain mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs md:text-sm text-light-textMuted dark:text-dark-textMuted font-medium">
                      {cert.issuer} &bull; {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
