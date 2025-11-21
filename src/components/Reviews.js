import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { fadeUpPreset } from '../lib/motionPresets';

const Reviews = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const reviews = [
    {
      id: 1,
      image: 'https://bc.zp.ua/wp-content/uploads/2019/06/review-1.jpg',
      text: 'Чудовий сервіс! Велосипеди в відмінному стані, персонал дуже привітний. Обов\'язково повернемося ще раз з друзями.',
      author: 'Олександр',
      location: 'Запоріжжя'
    },
    {
      id: 2,
      image: 'https://bc.zp.ua/wp-content/uploads/2019/06/review-2.jpg',
      text: 'Прекрасна організація велотурів! Гід розповів багато цікавого про місто. Рекомендую всім любителям активного відпочинку.',
      author: 'Марина',
      location: 'Дніпро'
    },
    {
      id: 3,
      image: 'https://bc.zp.ua/wp-content/uploads/2019/06/review-3.jpg',
      text: 'Відмінні ціни та якість обслуговування. Велосипеди завжди чисті та справні. Дуже задоволені сервісом!',
      author: 'Ігор',
      location: 'Запоріжжя'
    }
  ];

  const ReviewsContent = () => (
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Відгуки
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const ReviewCard = () => (
              <div className="card text-center">
                <img 
                  src={review.image} 
                  alt={review.author}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {review.text}
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{review.author}</h4>
                <div className="flex items-center justify-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{review.location}</span>
                </div>
              </div>
            );

            if (shouldReduceMotion) {
              return <ReviewCard key={review.id} />;
            }

            return (
              <motion.div key={review.id} {...fadeUpPreset(index * 0.1, 0.8)}>
                <ReviewCard />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

  return <ReviewsContent />;
};

export default Reviews;