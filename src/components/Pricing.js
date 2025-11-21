import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Pricing = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const plans = [
    {
      id: 1,
      name: 'Schwinn Tandem',
      price: '2 год/хвилина',
      duration: '2 год/хвилина',
      features: [
        'Двомісний велосипед',
        'Шолом в комплекті',
        'Базовий інструктаж',
        'Карта маршрутів'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Schwinn S1',
      price: '1 год/хвилина',
      duration: '1 год/хвилина',
      features: [
        'Односпідний велосипед',
        'Шолом в комплекті',
        'Базовий інструктаж',
        'Карта маршрутів',
        'Безкоштовна вода'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Merida Big.7',
      price: '1 год/хвилина',
      duration: '1 год/хвилина',
      features: [
        'Гірський велосипед',
        'Шолом в комплекті',
        'Професійний інструктаж',
        'Карта маршрутів',
        'Ремонтний набір'
      ],
      popular: false
    }
  ];

  const PricingContent = () => (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Прокатні велосипеди
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Оберіть велосипед, який підходить саме вам
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const PlanCard = () => (
              <div className={`card relative ${plan.popular ? 'ring-2 ring-brand-green' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-green text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярний
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{plan.name}</h3>
                  <div className="text-3xl font-bold text-brand-green mb-1">{plan.price}</div>
                  <p className="text-gray-500 text-sm">{plan.duration}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular 
                    ? 'bg-brand-green hover:bg-brand-green-dark text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Забронювати
                </button>
              </div>
            );

            if (shouldReduceMotion) {
              return <PlanCard key={plan.id} />;
            }

            return (
              <motion.div key={plan.id} {...fadeUpPreset(index * 0.1, 0.8)}>
                <PlanCard />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

  return <PricingContent />;
};

export default Pricing;