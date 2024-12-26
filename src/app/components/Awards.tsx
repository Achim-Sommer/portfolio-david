'use client';

import { motion } from "framer-motion";

export default function Awards() {
  const awards = [
    { year: 2005, name: "Deutscher Comedypreis RTL", category: "Frei Schnauze XXL (Autor)" },
    { year: 2012, name: "Bremer Comedypreis", category: "Bester Newcomer" },
    { year: 2014, name: "NDR Comedy Contest", category: "Gewinner" }
  ];

  return (
    <section className="awards w-full">
      <motion.div className="text-center relative mb-12">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block"
        >
          Auszeichnungen
          <motion.span 
            className="absolute -top-4 -right-8 text-3xl"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🏆
          </motion.span>
        </motion.h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
        {awards.map((award, index) => (
          <motion.div 
            key={index} 
            className="award-card p-6 text-center relative overflow-hidden group backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="relative z-10 space-y-3"
              initial={false}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text">
                {award.year}
              </h3>
              <p className="text-gray-800 font-bold text-lg">{award.name}</p>
              <p className="text-gray-600 italic">{award.category}</p>
            </motion.div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
