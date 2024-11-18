import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export function Achievements() {
  const achievements = useGameStore((state) => state.achievements);

  return (
    <div className="fixed bottom-4 left-4">
      <div className="relative">
        <button className="bg-yellow-500 p-3 rounded-full shadow-lg">
          <Trophy className="w-6 h-6 text-white" />
        </button>
        <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-xl
                      p-4 w-64 hidden group-hover:block">
          <h3 className="font-bold text-lg mb-2">Achievements</h3>
          <div className="space-y-2">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className={`flex items-center space-x-2 p-2 rounded
                          ${achievement.unlocked
                    ? 'bg-green-100'
                    : 'bg-gray-100 opacity-50'
                  }`}
                initial={false}
                animate={{
                  scale: achievement.unlocked ? [1, 1.1, 1] : 1,
                }}
              >
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <p className="font-medium">{achievement.title}</p>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}