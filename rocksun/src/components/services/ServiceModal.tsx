import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { ServiceType } from './types';

type ServiceModalProps = {
  service: ServiceType;
  onClose: () => void;
};

export const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-100 rounded-full scale-110" />
            <service.icon className="w-10 h-10 text-primary-600 relative z-10" />
          </div>
          <h3 className="text-2xl font-bold text-primary-900">
            {service.title}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        {Object.entries(service.details).map(([key, values]) => (
          <div key={key}>
            <h4 className="text-lg font-semibold text-primary-900 mb-3 capitalize">
              {key}
            </h4>
            <ul className="space-y-2">
              {(values as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};