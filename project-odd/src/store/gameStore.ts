import { create } from 'zustand';
import { generateLevels } from '../utils/levelGenerator';
import type { Achievement, Level } from '../types';

interface GameState {
  currentLevel: number;
  levels: Level[];
  score: number;
  achievements: Achievement[];
  showTutorial: boolean;
  isGameStarted: boolean;
  setCurrentLevel: (level: number) => void;
  incrementScore: (points: number) => void;
  unlockAchievement: (id: string) => void;
  setShowTutorial: (show: boolean) => void;
  startGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentLevel: 1,
  levels: generateLevels(),
  score: 0,
  achievements: [
    {
      id: 'first-win',
      title: 'First Victory',
      description: 'Complete your first level',
      icon: '🏆',
      unlocked: false,
    },
    {
      id: 'perfect-10',
      title: 'Perfect 10',
      description: 'Complete 10 levels without mistakes',
      icon: '⭐',
      unlocked: false,
    },
    {
      id: 'speed-demon',
      title: 'Speed Demon',
      description: 'Complete a level in under 5 seconds',
      icon: '⚡',
      unlocked: false,
    },
  ],
  showTutorial: true,
  isGameStarted: false,
  setCurrentLevel: (level) => set({ currentLevel: level }),
  incrementScore: (points) => set((state) => ({ score: state.score + points })),
  unlockAchievement: (id) =>
    set((state) => ({
      achievements: state.achievements.map((a) =>
        a.id === id ? { ...a, unlocked: true } : a
      ),
    })),
  setShowTutorial: (show) => set({ showTutorial: show }),
  startGame: () => set({ isGameStarted: true }),
}));