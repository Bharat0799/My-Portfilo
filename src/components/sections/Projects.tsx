import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: 'Terra Local',
    subtitle: 'Premium Organic E-commerce Platform',
    tags: ['HTML', 'CSS', 'JavaScript', 'SPA Architecture'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f90c097d-416b-4c17-9524-cd5201714f73.jpg',
    github: 'https://github.com/Bharat0799/Terra-Local-Website',
    live: '#'
  },
  {
    title: 'Smart ID Reissue System',
    subtitle: 'Admin-Controlled ID Management Platform',
    tags: ['Workflow Logic', 'Validation System', 'Role-based Access'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f17a8850-0a2c-4483-9593-c1187866880f.jpg',
    github: 'https://github.com/Bharat0799',
    live: '#'
  },
  {
    title: 'AI Chatbot',
    subtitle: 'Intelligent Conversational Assistant',
    tags: ['AI Integration', 'API Handling', 'Real-time Responses'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8078c134-78dc-4d80-96a2-6b6c93d2bce0.jpg',
    github: '#',
    live: '#'
  },
  {
    title: 'Student Result Management System',
    subtitle: 'Console-Based Academic Record System',
    tags: ['Python', 'Data Handling', 'Condition Logic'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_2b43518f-2863-43e7-a91a-201756ecaea4.jpg',
    github: '#',
    live: '#'
  },
  {
    title: 'File Organizer Script',
    subtitle: 'Automated File Structuring Tool',
    tags: ['Python', 'OS Module', 'Automation'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_71eee6bb-65ab-4a1a-95b4-de4bfc4171f1.jpg',
    github: '#',
    live: '#'
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Structured Personal Engineering Portfolio',
    tags: ['UI Architecture', 'Responsive Design'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_638001b8-713c-4407-a07e-09e4e8b379d0.jpg',
    github: '#',
    live: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background scroll-mt-24 md:scroll-mt-32">
      <div className="container-padding max-w-[1200px] mx-auto">
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Selected <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-[600px] text-lg leading-relaxed">
              A curated collection of products built with structure, scalability, and performance in mind.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-[24px] overflow-hidden shadow-elevation1 border border-border group"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-muted" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-1 leading-relaxed">
                    {project.subtitle}
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
                  <a href={project.github} className="flex items-center gap-2 text-xs font-bold hover:text-primary transition-colors">
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-xs font-bold hover:text-primary transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <Button 
            variant="outline" 
            className="border-foreground text-foreground hover:bg-foreground hover:text-white transition-all duration-300 rounded-[12px] px-8 py-6 text-lg h-auto font-bold group" 
            asChild
          >
            <Link to="/projects">
              View More Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
