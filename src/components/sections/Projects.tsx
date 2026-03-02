import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Terra Local',
    description: 'Premium Organic E-commerce Platform with structured SPA architecture, dynamic search, filter + sort functionality, state-based cart logic, and multi-step checkout.',
    tags: ['React', 'Tailwind', 'E-commerce', 'UX'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_df1449d5-39bf-4567-bc34-50becada84be.jpg',
    github: 'https://github.com/Bharat0799/Terra-Local-Website',
    live: '#'
  },
  {
    title: 'Smart ID Reissue System',
    description: 'Admin-controlled ID management platform featuring an admin dashboard, approval workflow logic, role-based access, and validation systems.',
    tags: ['Admin Panel', 'Node.js', 'Security', 'React'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_5d35a635-3cfd-4f49-8363-b8ea65f6cb1d.jpg',
    github: 'https://github.com/Bharat0799',
    live: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background scroll-mt-24 md:scroll-mt-32">
      <div className="container-padding max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Selected <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-[500px] text-lg">
              A collection of architectural challenges and product solutions I've built from the ground up.
            </p>
          </div>
          <a href="https://github.com/Bharat0799" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 group text-foreground font-bold hover:underline decoration-primary transition-all underline-offset-4">
            View GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-primary" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-[24px] overflow-hidden shadow-elevation1 border border-border group"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-muted" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-foreground text-primary text-[10px] uppercase tracking-wider font-bold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
