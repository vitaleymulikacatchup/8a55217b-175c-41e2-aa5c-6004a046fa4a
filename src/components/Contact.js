import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const ContactContent = () => (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Контакти
              </h2>
              <p className="text-gray-600">
                Зв'яжіться з нами для бронювання або отримання додаткової інформації
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-brand-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-600">+38 (061) 123-45-67</p>
                    <p className="text-gray-600">+38 (050) 987-65-43</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-brand-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@bc.zp.ua</p>
                    <p className="text-gray-600">booking@bc.zp.ua</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адреса</h3>
                    <p className="text-gray-600">вул. Соборний проспект, 123</p>
                    <p className="text-gray-600">Запоріжжя, 69000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-brand-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Режим роботи</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-gray-600">Сб-Нд: 8:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="btn-primary mr-4 mb-4 md:mb-0">
                Забронювати зараз
              </button>
              <button className="btn-secondary">
                Задати питання
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduceMotion) {
    return <ContactContent />;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.0)}>
      <ContactContent />
    </motion.div>
  );
};

export default Contact;