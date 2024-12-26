'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section 
      className="hero w-full relative overflow-hidden min-h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 -z-10">
        <video
          src="/showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 blur-md opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/70 via-pink-50/70 to-white/90 backdrop-blur-[2px]" />
      </div>
      <motion.div 
        className="absolute right-0 bottom-0 md:w-1/2 h-[80%] pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src="/2_Startseite_Anschuetz_trans.png"
          alt="David Anschütz"
          width={2712}
          height={2309}
          priority
          className="object-contain w-full h-full floating"
          unoptimized
        />
      </motion.div>
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        <div className="hero-content w-full md:w-1/2 flex flex-col items-center md:items-start">
        <motion.div className="space-y-4">
          <div className="relative inline-block">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center md:text-left bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text"
            >
              David Anschütz
            </motion.h1>
            <motion.div 
              className="absolute -top-6 -right-6 text-4xl transform rotate-12"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: [12, -12, 12]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.8
              }}
            >
              🎭
            </motion.div>
          </div>
          <motion.p 
            className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Comedian • Entertainer • Geschichtenerzähler
          </motion.p>
        </motion.div>
        <motion.p 
          className="max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Wer so ins Leben startet, dem bleibt zum Überleben nur die Comedy:
          fünf Geschwister von vier Vätern aus drei Nationen und zum
          Runterkommen durfte der Junge auch noch auf die Waldorf-Schule. Die
          Folgen einer solchen Jugend liegen auf der Hand – wo ein David
          hinlangt, da ist das pure Leben. Und das nicht nur als Comedian bei
          Bülent, Cindy oder Kaya Yanar, auch auf unzähligen Bühnen der
          Republik. Aus jeder Faser seiner Standup-Comedy springt dem Publikum
          der unverfälschte, scharfe Blick auf die feinen Grobheiten des
          Alltags entgegen: grotesk, absurd und immer echt.
        </motion.p>
      </div>
      </div>
    </motion.section>
  );
}
