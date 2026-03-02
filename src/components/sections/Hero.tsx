import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { RoleRotation } from '../hero/RoleRotation';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-40 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
      <div className="container-padding max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-[2px] text-muted-foreground font-medium mb-6 block">
            Computer Science Engineering Student
          </span>
          <h1 className="text-4xl md:text-7xl font-bold font-heading leading-[1.1] mb-8 tracking-tighter">
            Engineering with <span className="lime-pill">Structure</span> and Intent
          </h1>

          <RoleRotation />

          <p className="text-lg md:text-xl text-muted-foreground max-w-[560px] leading-relaxed mb-10">
            Passionate about building premium digital experiences and solving complex problems through elegant code and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="bg-foreground text-primary hover:bg-primary hover:text-foreground transition-all duration-300 rounded-button px-7 py-3 text-lg font-bold group w-full sm:w-auto shadow-[0_0_20px_rgba(182,255,0,0)] hover:shadow-[0_0_20px_rgba(182,255,0,0.3)]" asChild>
              <Link to="/work-with-me">
                Work With Me
              </Link>
            </Button>
            <Button variant="outline" className="border-foreground hover:border-primary transition-all duration-300 rounded-button px-7 py-3 text-lg font-bold w-full sm:w-auto" asChild>
              <a href="/Bharath_Chandra_Tadi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden md:flex justify-center items-center h-[500px]"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-24 h-24 border border-border rounded-full flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
          <div className="absolute bottom-10 left-0 text-[10px] uppercase tracking-[4px] text-muted-foreground vertical-text rotate-180">
            CREATIVE TECHNOLOGY
          </div>
        </motion.div>
      </div>
    </section>
  );
};
