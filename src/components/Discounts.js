import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpPreset } from '../lib/motionPresets';

const Discounts = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const discounts = [
    {
      id: 1,
      title: 'Прокат велосипеда на вихідних (П\'ятниця)',
      discount: '-40%',
      description: 'Спеціальна пропозиція на п\'ятницю'
    },
    {
      id: 2,
      title: 'Екскурсія на велосипеді студентського містечка',
      discount: '-40%',
      description: 'Знижка для студентів'
    },
    {
      id: 3,
      title: 'Велосипедний тур по центру міста',
      discount: '-15%',
      description: 'Популярний маршрут зі знижкою'
    },
    {
      id: 4,
      title: 'Відвідини на УЗВ',
      discount: '-10%',
      description: 'Спеціальна пропозиція'
    },
    {
      id: 5,
      title: 'Прогулянка на велосипеді',
      discount: '-5%',
      description: 'Базова знижка на прогулянку'
    }
  ];

  const DiscountsContent = () => (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Пільги є!
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {discounts.map((discount, index) => {
            const DiscountCard = () => (
              <div className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-red-500 mb-4">
                  {discount.discount}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                  {discount.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {discount.description}
                </p>
                <div className="w-8 h-1 bg-brand-green mx-auto"></div>
              </div>
            );

            if (shouldReduceMotion) {
              return <DiscountCard key={discount.id} />;
            }

            return (
              <motion.div key={discount.id} {...fadeUpPreset(index * 0.08, 0.6)}>
                <DiscountCard />
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Знижка <span className="text-red-500">-10%</span> всім...
            </h3>
            <p className="text-gray-600 mb-6">
              Постійним клієнтам та при бронюванні на тиждень вперед
            </p>
            <button className="btn-primary">
              Забронювати
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return <DiscountsContent />;
};

export default Discounts;