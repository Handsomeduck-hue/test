import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <Sun className="w-20 h-20 text-solar-yellow mx-auto mb-6 animate-spin-slow" />
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
            Power Your Future with
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block text-solar-yellow"
            >
              Solar Energy
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto mb-12"
          >
            Transform your home into a sustainable powerhouse with RockSun Solar's expert installation services. Save money while saving the planet.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-solar-yellow text-primary-900 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-solar-orange transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white/10 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Learn More
              <span className="block w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-1" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Sun, title: "Clean Energy", desc: "100% renewable solar power" },
              { icon: Battery, title: "Save Money", desc: "Up to ₹50,000 yearly on bills" },
              { icon: ArrowRight, title: "Quick Install", desc: "Professional setup in days" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/30"
              >
                <item.icon className="w-12 h-12 text-solar-yellow mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-primary-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToServices}
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </div>
  );
};