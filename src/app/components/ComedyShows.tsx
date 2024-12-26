'use client';

import { motion } from "framer-motion";

export default function ComedyShows() {
  const comedyShows = [
    { year: 2014, name: "Postillon24", channel: "NDR", info: "5 Folgen" },
    { year: 2014, name: "NDR Comedy Contest", channel: "NDR" },
    { year: "2014–2015", name: "Geht's noch – Kayas Woche", channel: "RTL" },
    { year: 2015, name: "Bülent & seine Freunde", channel: "RTL" },
    { year: 2015, name: "Nuhr ab 18", channel: "ARD" },
    { year: 2015, name: "Schwarz, Rot, Pink", channel: "Sat.1", info: "mit Cindy aus Marzahn" },
    { year: 2016, name: "Nuhr ab 18", channel: "ARD" },
    { year: 2016, name: "Das große Kleinkunstfestival", channel: "RBB" }
  ];

  return (
    <section className="comedy-shows w-full">
      <motion.div className="text-center relative mb-12">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block"
        >
          TV Comedy Shows
          <motion.span 
            className="absolute -top-4 -right-8 text-3xl"
            animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📺
          </motion.span>
        </motion.h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
        {comedyShows.map((show, index) => (
          <motion.div 
            key={index} 
            className="show-card p-6 text-center relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative z-10 space-y-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                {show.year}
              </span>
              <h3 className="text-xl font-bold text-gray-800">
                {show.name}
              </h3>
              <p className="text-gray-700 font-medium">{show.channel}</p>
              {show.info && (
                <p className="text-gray-600 text-sm italic">{show.info}</p>
              )}
            </div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
