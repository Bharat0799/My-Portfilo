import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white border-t border-white/10 pt-12 pb-8 md:pt-20 md:pb-12">
      <div className="container-padding max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <a href="#" className="font-heading text-2xl font-bold tracking-tighter">
            BHARAT<span className="text-primary">.</span>
          </a>
          <p className="text-white/60 max-w-[300px] leading-relaxed">
            Computer Science Engineering student at PSCMR. Focused on building premium digital experiences that drive real business outcomes.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-heading text-lg font-semibold uppercase tracking-widest text-primary">Navigation</h4>
          <nav className="flex flex-col gap-4">
            <a href="#about" className="text-white/60 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-white/60 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-white/60 hover:text-primary transition-colors">Projects</a>
            <a href="#education" className="text-white/60 hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="text-white/60 hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        {/* Social Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-heading text-lg font-semibold uppercase tracking-widest text-primary">Connect</h4>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Bharat0799" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white/40 text-sm mt-4">
            © 2026 Bharat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
