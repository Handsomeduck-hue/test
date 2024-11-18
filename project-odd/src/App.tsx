import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Brain, Trophy } from 'lucide-react';
import { useGameStore } from './store/gameStore';
import { Tutorial } from './components/Tutorial';
import { GameItem } from './components/GameItem';
import { Achievements } from './components/Achievements';
import type { GameItem as GameItemType } from './types';

function App() {
  const {
    currentLevel,
    levels,
    score,
    showTutorial,
    isGameStarted,
    setCurrentLevel,
    incrementScore,
    unlockAchievement,
    startGame,
  } = useGameStore();

  const [selectedItem, setSelectedItem] = useState<GameItemType | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const level = levels[currentLevel - 1];

  const handleItemClick = (item: GameItemType) => {
    setSelectedItem(item);
    const correct = item.isOddOne;
    setIsCorrect(correct);

    if (correct) {
      incrementScore(level.points);
      if (currentLevel === 1) {
        unlockAchievement('first-win');
      }
      setTimeout(() => {
        setCurrentLevel(currentLevel + 1);
        setSelectedItem(null);
        setIsCorrect(null);
      }, 1500);
    }
  };

  if (!isGameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600
                    flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 max-w-md text-center"
        >
          <Brain className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
          <h1 className="text-4xl font-bold mb-4">Odd One Out</h1>
          <p className="text-gray-600 mb-8">
            Test your observation skills by finding the item that doesn't belong!
          </p>
          <button
            onClick={startGame}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg
                     text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Playing
          </button>
        </motion.div>
      </div>
    );
  }

  // Game completion screen
  if (!level) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600
                    flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 max-w-md text-center"
        >
          <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
          <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
          <p className="text-gray-600 mb-4">
            You've completed all levels with a score of {score} points!
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg
                     text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Play Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600
                  flex flex-col items-center p-4 sm:p-8">
      <AnimatePresence>{showTutorial && <Tutorial />}</AnimatePresence>

      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <div className="bg-white/90 rounded-lg px-4 py-2">
            <p className="text-lg font-semibold">
              Level: <span className="text-indigo-600">{currentLevel}</span>
            </p>
          </div>
          <div className="bg-white/90 rounded-lg px-4 py-2">
            <p className="text-lg font-semibold">
              Score: <span className="text-indigo-600">{score}</span>
            </p>
          </div>
        </div>

        <motion.div
          key={currentLevel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white/90 rounded-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-center mb-2">
            Find the Odd One Out!
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Category: <span className="font-semibold">{level.category}</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {level.items.map((item) => (
              <GameItem
                key={item.id}
                item={item}
                onClick={handleItemClick}
                disabled={!!selectedItem}
                isSelected={selectedItem?.id === item.id}
                isCorrect={selectedItem?.id === item.id ? isCorrect : null}
              />
            ))}
          </div>
        </motion.div>

        <div className="text-center text-white/90">
          <p className="text-lg">
            Difficulty:{' '}
            <span className="font-semibold capitalize">{level.difficulty}</span>
          </p>
        </div>
      </div>

      <Achievements />
    </div>
  );
}

export default App;