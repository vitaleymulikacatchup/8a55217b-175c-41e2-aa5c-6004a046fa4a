import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeInPreset } from '../lib/motionPresets';

const Partners = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const partners = [
    { name: 'Trek', logo: 'https://bc.zp.ua/wp-content/uploads/2019/06/trek-logo.png' },
    { name: 'Schwinn', logo: 'https://bc.zp.ua/wp-content/uploads/2019/06/schwinn-logo.png' },
    { name: 'Merida', logo: 'https://bc.zp.ua/wp-content/uploads/2019/06/merida-logo.png' },
    { name: 'Giant', logo: 'https://bc.zp.ua/wp-content/uploads/2019/06/giant-logo.png' }
  ];

  const PartnersContent = () => (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container-custom">
        <p className="text-center text-gray-600 mb-8">
          Наші партнери та виробники велосипедів, яким ми довіряємо
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => {
            const PartnerLogo = () => (
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
              />
            );

            if (shouldReduceMotion) {
              return <PartnerLogo key={partner.name} />;
            }

            return (
              <motion.div key={partner.name} {...fadeInPreset(index * 0.1, 0.6)}>
                <PartnerLogo />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

  return <PartnersContent />;
};

export default Partners;