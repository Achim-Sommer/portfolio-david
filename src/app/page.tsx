'use client';
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ComedyShows from "./components/ComedyShows";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col px-4 pt-20">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="shows">
        <ComedyShows />
      </div>
      <div id="awards">
        <Awards />
      </div>
      <section id="showreel" className="showreel text-center w-full">
        <motion.div className="text-center relative mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            Showreel
            <motion.span 
              className="absolute -top-4 -right-8 text-3xl"
              animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎬
            </motion.span>
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 px-4 md:px-8 lg:px-16"
        >
          <video 
            src="/showreel.mp4" 
            controls 
            className="mx-auto max-w-full w-full"
            preload="metadata"
          >
            Ihr Browser unterstützt keine Videowiedergabe.
          </video>
        </motion.div>
      </section>
      <footer className="footer w-full mt-auto">
        <div className="w-full px-4 py-8 bg-white/80 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
            <nav className="space-x-4">
              <a href="/impressum" className="text-gray-600 hover:text-pink-600 transition-colors">
                Impressum
              </a>
            </nav>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} David Anschütz. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
