import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech – Computer Science Engineering',
    college: 'PSCMR College of Engineering and Technology',
    year: '2024 - 2028 (Expected)',
    cgpa: '8.24',
    description: 'Pursuing a Bachelor of Technology with a focus on core computer science principles and software engineering.'
  },
  {
    degree: 'Senior Secondary – APBIE Board',
    college: 'Intermediate Education',
    year: '2022 - 2024',
    cgpa: '89.2%',
    description: 'Completed higher secondary education with a strong academic record in science and mathematics.'
  },
  {
    degree: 'Secondary – SSC Board',
    college: 'Schooling',
    year: '2022',
    cgpa: '86.6%',
    description: 'Foundation year completed with distinction.'
  }
];

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-background scroll-mt-24 md:scroll-mt-32">
      <div className="container-padding max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Education <span className="text-primary">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Academic foundations that shaped my technical rigor and research-oriented mindset.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[20px] p-8 md:p-10 shadow-elevation1 border border-border relative overflow-hidden group"
            >
              {/* Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-heading">{edu.degree}</h3>
                    <p className="text-primary font-semibold tracking-wide mt-1">{edu.college}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-4 py-2 bg-muted rounded-full text-xs font-bold uppercase tracking-widest">
                      {edu.year}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-[700px]">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
