import type { GameItem, Level } from '../types';

const themes = {
  easy: [
    {
      category: 'Basic Shapes',
      items: [
        { value: 'Circle', shape: 'circle', color: '#4A90E2', pattern: 'solid' },
        { value: 'Square', shape: 'square', color: '#4A90E2', pattern: 'solid' },
        { value: 'Triangle', shape: 'triangle', color: '#4A90E2', pattern: 'solid' },
        { value: 'Star', shape: 'star', color: '#4A90E2', pattern: 'solid' },
      ],
    },
    {
      category: 'Colors',
      items: [
        { value: 'Red Square', shape: 'square', color: '#E74C3C', pattern: 'solid' },
        { value: 'Blue Square', shape: 'square', color: '#3498DB', pattern: 'solid' },
        { value: 'Green Square', shape: 'square', color: '#2ECC71', pattern: 'solid' },
        { value: 'Yellow Square', shape: 'square', color: '#F1C40F', pattern: 'solid' },
      ],
    },
  ],
  medium: [
    {
      category: 'Color Shades',
      items: [
        { value: 'Light Blue', shape: 'circle', color: '#3498DB', pattern: 'solid' },
        { value: 'Medium Blue', shape: 'circle', color: '#2980B9', pattern: 'solid' },
        { value: 'Dark Blue', shape: 'circle', color: '#2C3E50', pattern: 'solid' },
        { value: 'Purple', shape: 'circle', color: '#8E44AD', pattern: 'solid' },
      ],
    },
    {
      category: 'Patterns',
      items: [
        { value: 'Striped', shape: 'square', color: '#3498DB', pattern: 'striped' },
        { value: 'Dotted', shape: 'square', color: '#3498DB', pattern: 'dotted' },
        { value: 'Dashed', shape: 'square', color: '#3498DB', pattern: 'dashed' },
        { value: 'Solid', shape: 'square', color: '#3498DB', pattern: 'solid' },
      ],
    },
  ],
  hard: [
    {
      category: 'Complex Patterns',
      items: [
        { value: 'Striped Circle', shape: 'circle', color: '#3498DB', pattern: 'striped' },
        { value: 'Striped Square', shape: 'square', color: '#3498DB', pattern: 'striped' },
        { value: 'Striped Triangle', shape: 'triangle', color: '#3498DB', pattern: 'striped' },
        { value: 'Dotted Circle', shape: 'circle', color: '#3498DB', pattern: 'dotted' },
      ],
    },
    {
      category: 'Color and Shape',
      items: [
        { value: 'Blue Circle', shape: 'circle', color: '#3498DB', pattern: 'solid' },
        { value: 'Green Square', shape: 'square', color: '#2ECC71', pattern: 'solid' },
        { value: 'Red Triangle', shape: 'triangle', color: '#E74C3C', pattern: 'solid' },
        { value: 'Blue Square', shape: 'square', color: '#3498DB', pattern: 'solid' },
      ],
    },
  ],
};

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function generateItems(themeItems: any[], oddOneOut: any): GameItem[] {
  const regularItems = themeItems
    .filter((item) => item.value !== oddOneOut.value)
    .slice(0, 3)
    .map((item) => ({
      id: crypto.randomUUID(),
      value: item.value,
      shape: item.shape,
      color: item.color,
      pattern: item.pattern,
      isOddOne: false,
    }));

  const oddItem = {
    id: crypto.randomUUID(),
    value: oddOneOut.value,
    shape: oddOneOut.shape,
    color: oddOneOut.color,
    pattern: oddOneOut.pattern,
    isOddOne: true,
  };

  return shuffleArray([...regularItems, oddItem]);
}

export function generateLevels(): Level[] {
  const levels: Level[] = [];
  let levelId = 1;

  Object.entries(themes).forEach(([difficulty, themeList]) => {
    themeList.forEach((theme) => {
      const oddOneOut = shuffleArray(
        Object.values(themes)
          .flat()
          .filter((t) => t.category !== theme.category)
      )[0].items[0];

      levels.push({
        id: levelId++,
        items: generateItems(theme.items, oddOneOut),
        difficulty: difficulty as 'easy' | 'medium' | 'hard',
        points: difficulty === 'easy' ? 100 : difficulty === 'medium' ? 200 : 300,
        category: theme.category,
      });
    });
  });

  return shuffleArray(levels);
}