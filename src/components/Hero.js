import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpPreset } from '../lib/motionPresets';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const HeroContent = () => (
    <section className="bg-hero min-h-screen flex items-center justify-center text-white relative">
      <div className="container-custom text-center">
        <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-8">
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ВЕЛО ЦЕНТР
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          ЗАПОРІЖЖЯ
        </p>
        
        <button className="btn-primary text-lg px-12 py-4">
          Забронювати
        </button>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <HeroContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.2, 1.0)}>
      <HeroContent />
    </motion.div>
  );
};

export default Hero;