import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaLaptopCode, FaRocket, FaLightbulb, FaChevronDown, FaUserPlus, FaPlus } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import { useRef } from 'react';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (contactRef.current) {
      const offset = 20; // Very small offset for slight downward scroll
      const elementPosition = contactRef.current.offsetTop;
      
      window.scrollTo({
        top: elementPosition + offset, // Small downward scroll
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Contact Button */}
      <motion.a
        href="#contact"
        onClick={scrollToContact}
        className="fixed z-50 flex items-center gap-2 p-4 overflow-hidden rounded-full shadow-lg bottom-8 right-8 btn btn-primary hover-lift group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="absolute left-0 w-full h-full bg-accent/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.3 }}
        />
        <FaPlus className="relative z-10 text-xl" />
        <span className="relative z-10 hidden md:inline">Contact</span>
      </motion.a>

      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <p className="mb-8 text-xl text-gray-400">
              A passionate Web Developer and Competitive Programmer crafting beautiful digital experiences
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary hover-lift">Hire Me</button>
              <button className="btn btn-secondary hover-glow">View Projects</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ... rest of the sections ... */}
    </div>
  );
}

export default App; 