import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon } from 'lucide-react';

export const Calculator = () => {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [sunlightHours, setSunlightHours] = useState(5);

  const calculateSavings = () => {
    // Indian market calculations
    const yearlyBill = monthlyBill * 12;
    const potentialSavings = yearlyBill * 0.75; // 75% savings in Indian conditions
    const systemSize = (monthlyBill * 12) / (365 * sunlightHours * 0.15 * 80); // Adjusted for Indian solar irradiance
    const systemCost = systemSize * 65000; // Approximate cost per kW in INR
    const breakeven = systemCost / potentialSavings;

    return {
      yearly: Math.round(potentialSavings).toLocaleString('en-IN'),
      systemSize: systemSize.toFixed(1),
      twentyYear: Math.round(potentialSavings * 20).toLocaleString('en-IN'),
      systemCost: Math.round(systemCost).toLocaleString('en-IN'),
      breakeven: Math.round(breakeven * 10) / 10
    };
  };

  const savings = calculateSavings();

  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <CalcIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Solar Savings Calculator</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estimate your potential savings with solar energy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Electricity Bill (₹)
              </label>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="block mt-2 text-primary-600 font-semibold">₹{monthlyBill.toLocaleString('en-IN')}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Daily Sunlight Hours
              </label>
              <input
                type="range"
                min="4"
                max="8"
                step="0.5"
                value={sunlightHours}
                onChange={(e) => setSunlightHours(Number(e.target.value))}
                className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="block mt-2 text-primary-600 font-semibold">{sunlightHours} hours</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">Your Potential Savings</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Estimated Yearly Savings</p>
                <p className="text-3xl font-bold text-primary-600">₹{savings.yearly}</p>
              </div>
              <div>
                <p className="text-gray-600">Recommended System Size</p>
                <p className="text-3xl font-bold text-primary-600">{savings.systemSize} kW</p>
              </div>
              <div>
                <p className="text-gray-600">Approximate System Cost</p>
                <p className="text-3xl font-bold text-primary-600">₹{savings.systemCost}</p>
              </div>
              <div>
                <p className="text-gray-600">Break-even Period</p>
                <p className="text-3xl font-bold text-primary-600">{savings.breakeven} years</p>
              </div>
              <div>
                <p className="text-gray-600">20-Year Savings</p>
                <p className="text-3xl font-bold text-primary-600">₹{savings.twentyYear}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};