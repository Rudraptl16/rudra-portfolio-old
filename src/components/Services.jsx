import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaMobile, FaSearchDollar, FaServer, FaBullhorn, FaCheckCircle } from 'react-icons/fa';
import Modal from './Modal';

const services = [
  {
    id: '01',
    title: 'Web Development',
    desc: 'Crafting responsive and high-performance websites using modern frameworks like React, Next.js, and Node.js.',
    longDesc: 'Our web development services focus on creating robust, scalable, and secure digital platforms. We leverage the latest technologies to ensure your site is fast, SEO-friendly, and provides an exceptional user experience across all devices.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'CMS Integration', 'API Development', 'Performance Optimization'],
    icon: <FaLaptopCode />,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400'
  },
  {
    id: '02',
    title: 'UI/UX Design',
    desc: 'Designing intuitive and beautiful user interfaces that provide seamless digital experiences and brand consistency.',
    longDesc: 'We believe that great design is not just about aesthetics but about how users interact with your product. Our design process involves deep research, wireframing, and high-fidelity prototyping to create meaningful experiences.',
    features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Interaction Design', 'Usability Testing'],
    icon: <FaPaintBrush />,
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  },
  {
    id: '03',
    title: 'App Development',
    desc: 'Building cross-platform mobile applications with Flutter and React Native for a smooth native-like experience.',
    longDesc: 'From concept to deployment, we build high-performance mobile apps for iOS and Android. Our cross-platform approach allows for faster development cycles without compromising on performance or user experience.',
    features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'App Store Optimization', 'Mobile UI/UX', 'Post-Launch Support'],
    icon: <FaMobile />,
    color: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400'
  },
  {
    id: '04',
    title: 'Backend Solutions',
    desc: 'Implementing secure and scalable server-side logic, APIs, and database architectures using MongoDB and MySQL.',
    longDesc: 'A strong backend is the backbone of any successful application. We specialize in building reliable server infrastructures, database systems, and secure APIs that handle complex business logic and high traffic.',
    features: ['Server-Side Architecture', 'Database Management', 'API Security', 'Cloud Integration', 'Real-time Systems'],
    icon: <FaServer />,
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400'
  },
  {
    id: '05',
    title: 'Digital Marketing',
    desc: 'Enhancing online presence through strategic campaigns, content optimization, and audience engagement.',
    longDesc: 'We help you reach your target audience and grow your brand through data-driven digital marketing strategies. Our approach focuses on conversion optimization and measurable results.',
    features: ['Social Media Marketing', 'Content Strategy', 'Email Campaigns', 'Analytics & Reporting', 'Conversion Optimization'],
    icon: <FaBullhorn />,
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400'
  },
  {
    id: '06',
    title: 'SEO Optimization',
    desc: 'Boosting search engine rankings and organic traffic with technical SEO and performance-focused content.',
    longDesc: 'Our technical SEO services ensure that your website is visible to the right audience. We optimize everything from site architecture and load times to content relevance and backlink profiles.',
    features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Content Marketing', 'Local SEO'],
    icon: <FaSearchDollar />,
    color: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-dark-primary rounded-full" />
            <span className="text-dark-primary font-black tracking-[0.3em] uppercase text-xs">Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Digital <span className="text-gradient-purple">Services</span>
          </h2>
          <p className="text-dark-textMuted text-xl max-w-2xl leading-relaxed font-medium">
            Strategic solutions engineered for the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="glass-card p-12 group hover:-translate-y-3 transition-all duration-700 cursor-pointer relative overflow-hidden"
            >
              {/* Service Number Accent */}
              <div className="absolute top-10 right-10 text-6xl font-black text-white/[0.03] group-hover:text-dark-primary/[0.08] transition-colors duration-700 select-none">
                {service.id}
              </div>

              {/* Icon Container */}
              <div className={`w-20 h-20 rounded-2xl glass mb-10 flex items-center justify-center text-4xl ${service.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-700`}>
                {service.icon}
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-dark-primary transition-colors tracking-tight">{service.title}</h3>
              <p className="text-dark-textMuted text-base leading-relaxed mb-10 group-hover:text-white/80 transition-colors">
                {service.desc}
              </p>

              <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.3em] text-dark-primary uppercase">
                <span className="group-hover:translate-x-2 transition-transform duration-500">Explore Insight</span>
                <div className="w-8 h-[2px] bg-dark-primary/30 group-hover:w-16 transition-all duration-700" />
              </div>

              {/* Bottom Glow */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        icon={selectedService?.icon}
      >
        <div className="space-y-12">
          <div className="relative">
            <h4 className="text-xs font-black text-dark-primary mb-4 uppercase tracking-[0.3em] opacity-80">Strategic Overview</h4>
            <p className="text-dark-textMuted text-xl leading-relaxed font-medium">
              {selectedService?.longDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-black text-dark-secondary mb-8 uppercase tracking-[0.3em] opacity-80">Core Capabilities</h4>
              <div className="space-y-4">
                {selectedService?.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-dark-primary group-hover/item:scale-150 transition-transform" />
                    <span className="text-white font-bold text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-10 bg-gradient-to-br from-dark-primary/5 to-transparent flex flex-col justify-center text-center">
              <div className="text-4xl mb-6 opacity-40">🚀</div>
              <h5 className="text-white font-black text-xl mb-4 tracking-tight">Ready to Deploy?</h5>
              <p className="text-dark-textMuted text-sm mb-8">Let's discuss how this service can accelerate your digital objectives.</p>
              <button
                onClick={() => setSelectedService(null)}
                className="btn-primary w-full py-4"
              >
                Start Connection
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
