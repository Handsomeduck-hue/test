import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IndianRupee, Leaf, Home, Battery } from 'lucide-react';

export const Benefits = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="py-24 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Solar?</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Discover the many benefits of switching to solar energy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <IndianRupee className="w-12 h-12 text-solar-yellow mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Financial Benefits</h3>
            <ul className="space-y-4 text-primary-100">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-yellow rounded-full"></span>
                Save up to ₹50,000 yearly on electricity bills
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-yellow rounded-full"></span>
                Increase property value by 5-7%
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-yellow rounded-full"></span>
                Government subsidies up to 40%
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <Leaf className="w-12 h-12 text-solar-yellow mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Environmental Impact</h3>
            <ul className="space-y-4 text-primary-100">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-yellow rounded-full"></span>
                Reduce carbon footprint
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-yellow rounded-full"></span>
                Clean, renewable energy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-solar-yellow rounded-full"></span>
                Support energy independence
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};