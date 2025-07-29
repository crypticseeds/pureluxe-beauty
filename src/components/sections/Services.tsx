'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Sparkles, 
  Hand, 
  UserCheck, 
  Scissors 
} from 'lucide-react';
import { services } from '../../data/services';
import { Service } from '../../types';

// Icon mapping for services
const iconMap = {
  crown: Crown,
  sparkles: Sparkles,
  hand: Hand,
  'user-check': UserCheck,
  scissors: Scissors,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center group"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {IconComponent && (
            <IconComponent className="w-8 h-8 text-pink-500" />
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {service.description}
      </p>
      
      {service.duration && (
        <div className="text-xs text-gray-500 mb-2">
          Duration: {service.duration}
        </div>
      )}
      
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, 
            tailored to enhance your natural beauty and boost your confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to book your appointment or have questions about our services?
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-8 py-3 rounded-full font-medium hover:from-pink-600 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;