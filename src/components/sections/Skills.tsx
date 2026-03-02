import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Globe, Layers, Layout, Server, ShieldCheck, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    name: 'Programming',
    desc: 'Python, JavaScript, C'
  },
  {
    icon: Globe,
    name: 'Web Development',
    desc: 'HTML, CSS, JavaScript'
  },
  {
    icon: Layers,
    name: 'Core CS',
    desc: 'Data Structures & Algorithms, DBMS, Operating Systems, SQL'
  },
  {
    icon: Layout,
    name: 'Tools',
    desc: 'Git, GitHub, VS Code, Canva'
  }
];

import { Cloud } from 'lucide-react';

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-dark text-white relative scroll-mt-24 md:scroll-mt-32">
      <div className="container-padding max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Forging <span className="text-primary">Excellence</span> through Technology
            </h2>
            <p className="text-white/60 max-w-[600px] text-lg">
              A curated stack of technologies I've mastered to build high-performance, resilient applications.
            </p>
          </motion.div>
          <div className="hidden md:block text-right">
            <span className="text-sm uppercase tracking-[4px] text-primary font-bold">CORE CAPABILITIES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(182, 255, 0, 0.5)',
                boxShadow: '0 20px 60px rgba(182, 255, 0, 0.15)'
              }}
              className="bg-white/[0.04] border border-primary/15 rounded-[20px] p-8 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                <skill.icon className="w-6 h-6 text-primary group-hover:text-inherit" />
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
