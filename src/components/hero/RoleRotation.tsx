import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const roles = [
  'Python Developer',
  'Frontend Developer',
  'Software Development Engineer',
  'Problem Solver'
];

export const RoleRotation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-2 mb-10">
      <div className="flex flex-col gap-2">
        <div className="text-[14px] uppercase tracking-[2px] text-[#4A4A4A] font-medium">
          COMPUTER SCIENCE STUDENT
        </div>
        <div className="text-[28px] md:text-[32px] text-[#111111] font-heading font-medium leading-none">
          I am a
        </div>
      </div>
      
      <div className="relative h-[60px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={roles[index]}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ 
              boxShadow: '0 0 25px rgba(182,255,0,0.35)',
              borderRadius: '10px'
            }}
            className="inline-block min-w-[200px] md:min-w-[260px] bg-[#111111] text-[#B6FF00] px-[22px] py-[8px] text-center font-bold text-lg md:text-xl whitespace-nowrap"
          >
            {roles[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
