import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceType } from './types';

type ServiceCardProps = {
  service: ServiceType;
  index: number;
  onClick: (e: React.MouseEvent) => void;
};

export const ServiceCard = ({ service, index, onClick }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary-100 rounded-full scale-110 group-hover:scale-125 transition-transform duration-300" />
        <service.icon className="w-12 h-12 text-primary-600 relative z-10 group-hover:text-primary-700 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-primary-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <button
        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:gap-2 transition-all duration-300"
        onClick={onClick}
      >
        Learn more
        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </button>
    </motion.div>
  );
};