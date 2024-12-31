'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-sm shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-6 py-3 overflow-x-auto">
        <ul className="flex justify-center space-x-6 md:space-x-10 text-base md:text-xl font-medium whitespace-nowrap min-w-max mx-auto">
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-gray-700 hover:text-pink-600 transition-all px-3 py-1.5 rounded-lg hover:bg-pink-50 relative"
            onClick={() => scrollToSection('hero')}
          >
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
            Start
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-gray-700 hover:text-pink-600 transition-all px-3 py-1.5 rounded-lg hover:bg-pink-50 relative group"
            onClick={() => scrollToSection('shows')}
          >
            TV Shows
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-gray-700 hover:text-pink-600 transition-all px-3 py-1.5 rounded-lg hover:bg-pink-50 relative group"
            onClick={() => scrollToSection('awards')}
          >
            Auszeichnungen
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-gray-700 hover:text-pink-600 transition-all px-3 py-1.5 rounded-lg hover:bg-pink-50 relative group"
            onClick={() => scrollToSection('showreel')}
          >
            Showreel
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}
