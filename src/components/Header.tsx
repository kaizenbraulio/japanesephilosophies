
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="py-12 bg-accent text-primary">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Japanese Philosophies
        </motion.h1>
        <motion.p 
          className="text-center text-lg text-secondary-DEFAULT max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the ancient wisdom and timeless teachings of Japanese philosophical traditions
        </motion.p>
        
        <motion.div 
          className="bg-background/80 backdrop-blur-sm p-6 rounded-lg max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">About This Collection</h2>
          <p className="text-gray-300 mb-4">
            This curated collection presents essential Japanese philosophical concepts that have shaped 
            Eastern thought for centuries. Each philosophy offers unique insights into harmonious living, 
            mindfulness, and finding meaning in everyday experiences.
          </p>
          <p className="text-gray-300">
            Click on any philosophy card below to explore its principles and discover how these ancient 
            teachings continue to provide wisdom and guidance in our modern world.
          </p>
          <Button 
            variant="default" 
            className="mt-6"
            onClick={() => window.scrollTo({
              top: document.querySelector('.grid')?.getBoundingClientRect().top! - 100 + window.scrollY,
              behavior: 'smooth'
            })}
          >
            Explore Philosophies
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
