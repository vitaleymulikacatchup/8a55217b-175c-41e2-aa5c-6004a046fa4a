import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Package, Award, TrendingUp, Target } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Services = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const services = [
    {
      id: 1,
      icon: Package,
      title: 'Оренда ровера',
      description: 'Широкий вибір велосипедів для будь-якого віку та рівня підготовки. Всі велосипеди регулярно проходять технічне обслуговування.',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 2,
      icon: Award,
      title: 'Оформлення подарунків',
      description: 'Подаруйте незабутні враження! Оформлюємо подарункові сертифікати на прокат велосипедів та велотури.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Велосипед застава',
      description: 'Зручна система застави для довгострокової оренди. Гнучкі умови та вигідні тарифи для постійних клієнтів.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 4,
      icon: Target,
      title: 'Інструктаж та старт',
      description: 'Професійний інструктаж перед поїздкою, допомога у виборі маршруту та рекомендації щодо безпечного катання.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const ServicesContent = () => (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Послуги
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Ми пропонуємо повний спектр послуг для комфортного та безпечного велосипедного відпочинку
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const ServiceCard = () => {
              const IconComponent = service.icon;
              return (
                <div className="card hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            };

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
            Забронювати
          </button>
        </div>
      </div>
    </section>
  );

  return <ServicesContent />;
};

export default Services;