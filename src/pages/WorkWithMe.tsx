import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const WorkWithMe = () => {
  const valueCards = [
    {
      title: 'Structured Engineering',
      points: ['Clean architecture', 'Maintainable code', 'Scalable systems']
    },
    {
      title: 'Performance Focus',
      points: ['Optimized UI', 'Efficient logic', 'Reduced complexity']
    },
    {
      title: 'Problem-Solving Mindset',
      points: ['DSA-driven thinking', 'Logical debugging', 'Edge-case awareness']
    }
  ];

  const opportunities = [
    'SDE Internships',
    'Frontend Developer Roles',
    'Collaborative Tech Projects'
  ];

  return (
    <Layout>
      {/* Hero Block (60vh) */}
      <section className="relative min-h-[60vh] flex items-center pt-32 md:pt-40 bg-background section-light">
        <div className="container-padding max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tighter">
              Let’s Build <span className="text-primary">Structured</span>, Scalable Systems.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto mb-10 leading-relaxed">
              I focus on building performance-driven applications with clean architecture and scalable logic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-foreground text-primary hover:bg-primary hover:text-foreground transition-all duration-300 rounded-button px-10 py-7 text-lg h-auto font-bold" asChild>
                <a href="/Bharath_Chandra_Tadi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
              <Button variant="outline" className="border-foreground hover:border-primary transition-all duration-300 rounded-button px-10 py-7 text-lg h-auto font-bold" asChild>
                <a href="mailto:hello@premiumportfolio.com">
                  Email Me
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT I BRING SECTION */}
      <section className="section-padding bg-dark text-white section-dark">
        <div className="container-padding max-w-[1200px] mx-auto">
          <h2 className="text-sm uppercase tracking-[4px] text-primary font-bold mb-16 text-center">WHAT I BRING</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.04] border border-white/10 rounded-[24px] p-8 md:p-10 card-elevation group"
              >
                <h3 className="text-2xl font-bold mb-6 font-heading">{card.title}</h3>
                <ul className="space-y-4">
                  {card.points.map((point) => (
                    <li key={point} className="text-white/60 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES SECTION */}
      <section className="section-padding bg-background section-light">
        <div className="container-padding max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 tracking-tight">Currently Open To</h2>
            <div className="flex flex-col items-center gap-6 max-w-[600px] mx-auto">
              {opportunities.map((item) => (
                <div key={item} className="w-full p-6 bg-muted/30 border border-border rounded-xl text-xl font-medium card-elevation group">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT BLOCK */}
      <section className="py-20 bg-background border-t border-border section-light">
        <div className="container-padding max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a href="mailto:hello@premiumportfolio.com" className="flex items-center gap-3 text-lg font-bold hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a href="https://github.com/Bharat0799" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-bold hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="#" className="flex items-center gap-3 text-lg font-bold hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkWithMe;
