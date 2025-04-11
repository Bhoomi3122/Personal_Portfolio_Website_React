import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="py-8 mt-12 border-t border-[#7dd3fc]"
      style={{ backgroundColor: '#0f172a' }} // primary-dark
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          
          {/* Left: Branding */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <span 
              className="text-xl font-semibold bg-clip-text text-transparent" 
              style={{ backgroundImage: 'linear-gradient(to right, #7dd3fc, #22d3ee)' }}
            >
              Bhoomi
            </span>
            <p className="text-[#d1d5db] mt-1 text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
          </motion.div>

          {/* Right: Back to Top Button (Arrow Only) */}
          <motion.div
            onClick={scrollToTop}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer p-2 rounded-full border border-[#7dd3fc] hover:bg-[#1c475c] transition duration-300"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 text-[#f1f5f9]" />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
