import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const strengths = [
    'Python Programming',
    'Frontend Development',
    'Data Structures & Algorithms',
    'Database Management (SQL)'
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <div className="container-padding max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[24px] p-8 md:p-16 flex flex-col md:grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Image Placeholder */}
          <div className="relative w-full aspect-[4/5] md:aspect-square">
            <div className="absolute inset-0 bg-muted rounded-[20px] overflow-hidden">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c04ce22b-b3ae-4658-941d-8aeb64b7313f.jpg"
                alt="Bharat Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Soft Lime Shadow Effect */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-[20px] -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Building the Future with <span className="text-primary">Code</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a Computer Science Engineering student at PSCMR College of Engineering and Technology, dedicated to mastering the art of software development. My journey is fueled by a passion for creating efficient, scalable, and user-centric solutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in Python, C, and Web Technologies, I focus on bridging the gap between complex problems and elegant digital experiences. I am constantly exploring new technologies and methodologies to refine my craft and contribute meaningfully to the tech community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Text */}
      <div className="absolute -bottom-10 left-0 text-[150px] font-bold text-foreground/[0.02] whitespace-nowrap pointer-events-none select-none -z-0">
        ABOUT BHARAT • STUDENT • ENGINEER • DEVELOPER
      </div>
    </section>
  );
};
