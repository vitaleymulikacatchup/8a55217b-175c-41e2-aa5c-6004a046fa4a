import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpPreset } from '../lib/motionPresets';

const AdditionalServices = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const services = [
    {
      id: 1,
      title: 'Екскурсійні програми',
      description: 'Організовуємо велосипедні екскурсії по найкрасивіших місцях Запоріжжя'
    },
    {
      id: 2,
      title: 'Велосипедні тури',
      description: 'Багатоденні велосипедні подорожі для справжніх любителів активного відпочинку'
    },
    {
      id: 3,
      title: 'Фото та відео зйомка',
      description: 'Професійна зйомка ваших велосипедних пригод для незабутніх спогадів'
    },
    {
      id: 4,
      title: 'Корпоративні заходи',
      description: 'Організація тімбілдингу та корпоративних велосипедних заходів для компаній'
    }
  ];

  const AdditionalServicesContent = () => (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Додаткові послуги
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const ServiceCard = () => (
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );

            if (shouldReduceMotion) {
              return <ServiceCard key={service.id} />;
            }

            return (
              <motion.div key={service.id} {...fadeUpPreset(index * 0.1, 0.8)}>
                <ServiceCard />
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            Дізнатися більше
          </button>
        </div>
      </div>
    </section>
  );

  return <AdditionalServicesContent />;
};

export default AdditionalServices;