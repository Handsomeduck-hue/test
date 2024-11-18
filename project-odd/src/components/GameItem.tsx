import { motion } from 'framer-motion';
import type { GameItem as GameItemType } from '../types';
import { Shape } from './Shape';

interface GameItemProps {
  item: GameItemType;
  onClick: (item: GameItemType) => void;
  disabled: boolean;
  isSelected: boolean;
  isCorrect: boolean | null;
}

export function GameItem({
  item,
  onClick,
  disabled,
  isSelected,
  isCorrect,
}: GameItemProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-4 bg-white rounded-xl shadow-lg hover:shadow-xl 
                 transition-all w-full aspect-square overflow-hidden
                 ${disabled && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}
                 ${isSelected && isCorrect === true ? 'ring-4 ring-green-500' : ''}
                 ${isSelected && isCorrect === false ? 'ring-4 ring-red-500' : ''}`}
      onClick={() => !disabled && onClick(item)}
      disabled={disabled && !isSelected}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Shape
        shape={item.shape}
        color={item.color}
        pattern={item.pattern}
        className="w-full h-full"
      />
    </motion.button>
  );
}