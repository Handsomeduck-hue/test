import { describe, expect, it } from 'vitest';
import { generateLevels } from '../utils/levelGenerator';

describe('levelGenerator', () => {
  it('generates the correct number of levels', () => {
    const levels = generateLevels();
    expect(levels.length).toBe(6); // 2 levels per difficulty
  });

  it('generates levels with correct properties', () => {
    const levels = generateLevels();
    levels.forEach((level) => {
      expect(level).toHaveProperty('id');
      expect(level).toHaveProperty('items');
      expect(level).toHaveProperty('difficulty');
      expect(level).toHaveProperty('points');
      expect(level).toHaveProperty('category');
      expect(level.items.length).toBe(4);
    });
  });

  it('ensures each level has exactly one odd item', () => {
    const levels = generateLevels();
    levels.forEach((level) => {
      const oddItems = level.items.filter((item) => item.isOddOne);
      expect(oddItems.length).toBe(1);
    });
  });

  it('assigns correct points based on difficulty', () => {
    const levels = generateLevels();
    levels.forEach((level) => {
      switch (level.difficulty) {
        case 'easy':
          expect(level.points).toBe(100);
          break;
        case 'medium':
          expect(level.points).toBe(200);
          break;
        case 'hard':
          expect(level.points).toBe(300);
          break;
      }
    });
  });
});