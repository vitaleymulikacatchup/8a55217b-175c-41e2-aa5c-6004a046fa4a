import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">ВЕЛО ЦЕНТР</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Ваш надійний партнер у світі велосипедних пригод. Пропонуємо якісний прокат велосипедів та незабутні велотури по Запоріжжю.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Послуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Прокат велосипедів</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Велотури</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Екскурсії</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Інструктаж</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакти</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+38 (061) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@bc.zp.ua</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Вело Центр Запоріжжя. Всі права захищені.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition-colors mr-4">Політика конфіденційності</a>
            <a href="#" className="hover:text-white transition-colors">Умови використання</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;