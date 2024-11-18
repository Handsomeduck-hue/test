export interface GameItem {
  id: string;
  value: string;
  shape: string;
  color: string;
  pattern: string;
  isOddOne: boolean;
}

export interface Level {
  id: number;
  items: GameItem[];
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}