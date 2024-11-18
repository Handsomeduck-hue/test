import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export function Tutorial() {
  const setShowTutorial = useGameStore((state) => state.setShowTutorial);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-white rounded-xl p-8 max-w-md relative">
        <button
          onClick={() => setShowTutorial(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
        <div className="space-y-4">
          <p>
            Welcome to Odd One Out! In each level, you'll see a set of items where
            one doesn't belong with the others.
          </p>
          <p>Your task is to identify and click on the odd one out.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Each correct answer earns you points</li>
            <li>The difficulty increases as you progress</li>
            <li>Unlock achievements as you play</li>
          </ul>
          <button
            onClick={() => setShowTutorial(false)}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg
                     hover:bg-indigo-700 transition-colors mt-4"
          >
            Got it!
          </button>
        </div>
      </div>
    </motion.div>
  );
}