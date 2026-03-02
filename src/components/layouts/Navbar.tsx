import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useLocation, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Education', href: '/#education' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Scroll spy logic
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
      else if (window.scrollY < 100) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isWorkPage = location.pathname.includes('work-with-me');

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] flex justify-center transition-all duration-300 pointer-events-none'
      )}
    >
      <div 
        className={cn(
          "w-[92%] max-w-[1200px] h-16 mt-6 px-8 flex items-center justify-between rounded-full bg-[#0E0E12] shadow-[0_4px_10px_rgba(0,0,0,0.08),0_15px_40px_rgba(0,0,0,0.18)] border border-white/5 transition-all duration-300 pointer-events-auto",
          isScrolled ? "bg-[#0E0E12]/80 backdrop-blur-md border-white/10" : ""
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <span className="font-heading text-xl font-bold tracking-tighter text-white">
            BHARAT<span className="text-[#B6FF00] ml-0.5 inline-block w-1.5 h-1.5 rounded-full" />
          </span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative group text-[15px] font-medium tracking-[0.5px] uppercase text-white transition-colors",
                activeSection === link.href.split('#')[1] || (link.name === 'Home' && activeSection === '') ? "text-white" : "text-white/60 hover:text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-[#B6FF00] transition-all duration-300",
                activeSection === link.href.split('#')[1] || (link.name === 'Home' && activeSection === '') ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <Button 
            className={cn(
              "bg-[#B6FF00] text-[#111111] hover:bg-[#111111] hover:text-[#B6FF00] transition-all duration-300 rounded-full px-5 py-2.5 text-sm font-bold h-auto border border-[#B6FF00] shadow-none",
              isWorkPage && "ring-2 ring-[#B6FF00] ring-offset-2 ring-offset-black"
            )} 
            asChild
          >
            <Link to="/work-with-me">
              Work with me
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0E0E12] border-l border-white/10 w-[300px] text-white">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-8 mt-12">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-2xl font-heading font-bold uppercase tracking-widest hover:text-[#B6FF00] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="bg-[#B6FF00] text-[#111111] w-full py-6 text-lg rounded-full mt-4 font-bold" asChild>
                    <Link to="/work-with-me">
                      Work with me
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
