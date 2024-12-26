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
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4 py-4 overflow-x-auto">
        <ul className="flex justify-center space-x-4 md:space-x-8 text-sm md:text-lg whitespace-nowrap min-w-max mx-auto">
          <motion.li 
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors px-2"
            onClick={() => scrollToSection('hero')}
          >
            Start
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors px-2"
            onClick={() => scrollToSection('shows')}
          >
            TV Shows
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors px-2"
            onClick={() => scrollToSection('awards')}
          >
            Auszeichnungen
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors px-2"
            onClick={() => scrollToSection('showreel')}
          >
            Showreel
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors px-2"
          >
            <Link href="/impressum">
              Impressum
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}
