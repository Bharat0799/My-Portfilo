import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '@/components/layouts/Layout';
import { Github, ExternalLink } from 'lucide-react';

const allProjects = [
  {
    title: 'Rock Paper Scissors Game',
    subtitle: 'Interactive Browser Game',
    tags: ['JavaScript', 'Game Logic'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_2c10bc1e-65b2-45f2-9211-f7503bccb711.jpg',
    github: '#',
    live: '#'
  },
  {
    title: 'To-Do List Application',
    subtitle: 'Task Manager with DOM Manipulation',
    tags: ['HTML', 'CSS', 'JS'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_67d0a291-b339-43e4-843c-0646294de14a.jpg',
    github: '#',
    live: '#'
  },
  {
    title: 'Login Interface Design',
    subtitle: 'UI/UX Award-Winning Design',
    tags: ['UI Design', 'Accessibility'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4e5fb0cf-916b-41f5-8f3f-034e4e2048d5.jpg',
    github: '#',
    live: '#'
  },
  {
    title: 'Mini Calculator',
    subtitle: 'Arithmetic Web App',
    tags: ['JavaScript'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_88b86f99-e3b2-4e48-8736-11432b9642f5.jpg',
    github: '#',
    live: '#'
  },
  {
    title: 'Basic CRUD App',
    subtitle: 'Data Management Practice Project',
    tags: ['Forms', 'Data Handling'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4042b911-2acc-4a34-b132-c12e73e0b1e2.jpg',
    github: '#',
    live: '#'
  }
];

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-background">
        <div className="container-padding max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">All Projects</h1>
            <p className="text-muted-foreground max-w-[600px] text-lg">
              A collection of smaller projects and experiments built while learning new technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-[20px] overflow-hidden border border-border group"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-1">{project.subtitle}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-foreground text-primary text-[10px] uppercase tracking-wider font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-xs font-semibold hover:text-primary transition-colors">
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-xs font-semibold hover:text-primary transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
