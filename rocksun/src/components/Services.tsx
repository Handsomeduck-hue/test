import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from './services/ServiceCard';
import { ServiceModal } from './services/ServiceModal';
import { services } from './services/serviceData';

export const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-600 font-semibold mb-4 block">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">
            Comprehensive Solar Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solar solutions to meet your specific needs and requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onClick={(e) => handleServiceClick(index, e)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedService(null)}
            >
              <ServiceModal
                service={services[selectedService]}
                onClose={() => setSelectedService(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};