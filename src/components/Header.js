import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { fadeInPreset } from '../lib/motionPresets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HeaderContent = () => (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">ВЕЛО ЦЕНТР</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#reviews" className="text-gray-700 hover:text-brand-green transition-colors">Відгуки</a>
            <a href="#services" className="text-gray-700 hover:text-brand-green transition-colors">Послуги</a>
            <a href="#pricing" className="text-gray-700 hover:text-brand-green transition-colors">Ціни</a>
            <a href="#contact" className="text-gray-700 hover:text-brand-green transition-colors">Контакти</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-gray-700">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+38 (061) 123-45-67</span>
            </div>
            <button className="btn-primary">Забронювати</button>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-green"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#reviews" className="text-gray-700 hover:text-brand-green transition-colors">Відгуки</a>
              <a href="#services" className="text-gray-700 hover:text-brand-green transition-colors">Послуги</a>
              <a href="#pricing" className="text-gray-700 hover:text-brand-green transition-colors">Ціни</a>
              <a href="#contact" className="text-gray-700 hover:text-brand-green transition-colors">Контакти</a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center text-gray-700 mb-4">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+38 (061) 123-45-67</span>
                </div>
                <button className="btn-primary w-full">Забронювати</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  if (shouldReduceMotion) {
    return <HeaderContent />;
  }

  return (
    <motion.div {...fadeInPreset(0, 0.6)}>
      <HeaderContent />
    </motion.div>
  );
};

export default Header;