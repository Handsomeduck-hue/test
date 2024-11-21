import React, { useState, useEffect } from 'react';
    import './App.css';

    const categories = [
      {
        name: 'Animals',
        items: ['🐶', '🐱', '🐟', '🌿'],
        oddOneOut: 3,
        fact: 'Plants are not animals!'
      },
      {
        name: 'Shapes',
        items: ['⭕', '⬛', '⭐', '☁️'],
        oddOneOut: 3,
        fact: 'Clouds are not shapes!'
      },
      {
        name: 'Fruits',
        items: ['🍎', '🍊', '🍌', '🥕'],
        oddOneOut: 3,
        fact: 'Carrots are not fruits!'
      },
      {
        name: 'Instruments',
        items: ['🎸', '🎹', '🎻', '🎤'],
        oddOneOut: 3,
        fact: 'Microphones are not instruments!'
      }
    ];

    function App() {
      const [category, setCategory] = useState(categories[0]);
      const [selectedItem, setSelectedItem] = useState(null);
      const [isCorrect, setIsCorrect] = useState(null);
      const [timeLeft, setTimeLeft] = useState(30);
      const [timer, setTimer] = useState(null);
      const [points, setPoints] = useState(0);
      const [hints, setHints] = useState(3);
      const [theme, setTheme] = useState('default');

      useEffect(() => {
        startTimer();
      }, []);

      const handleItemClick = (index) => {
        setSelectedItem(index);
        setIsCorrect(index === category.oddOneOut);
        clearInterval(timer);
        if (isCorrect) {
          setPoints(prevPoints => prevPoints + 10);
          alert(category.fact);
        }
      };

      const nextCategory = () => {
        const currentIndex = categories.indexOf(category);
        const nextIndex = (currentIndex + 1) % categories.length;
        setCategory(categories[nextIndex]);
        setSelectedItem(null);
        setIsCorrect(null);
        setTimeLeft(30);
        startTimer();
      };

      const startTimer = () => {
        setTimer(setInterval(() => {
          setTimeLeft(prevTime => prevTime - 1);
          if (timeLeft === 0) {
            clearInterval(timer);
            nextCategory();
          }
        }, 1000));
      };

      const useHint = () => {
        if (hints > 0) {
          setHints(prevHints => prevHints - 1);
          setPoints(prevPoints => prevPoints - 10);
          alert(`The odd one out is: ${category.items[category.oddOneOut]}`);
        } else {
          alert('No hints left!');
        }
      };

      const unlockTheme = (themeName) => {
        if (points >= 100) {
          setTheme(themeName);
          setPoints(prevPoints => prevPoints - 100);
        } else {
          alert('Not enough points!');
        }
      };

      const sharePuzzle = () => {
        const shareText = `Check out this Odd One Out puzzle! Code: ${category.name}`;
        navigator.share({
          title: 'Ultimate Odd One Out Challenge',
          text: shareText,
          url: window.location.href
        }).catch((error) => console.error('Error sharing:', error));
      };

      const createLevel = () => {
        // Logic to create and save a new level
      };

      return (
        <div className={`app ${theme}`}>
          <h1>Ultimate Odd One Out Challenge</h1>
          <div className="category-name">{category.name}</div>
          <div className="items">
            {category.items.map((item, index) => (
              <div
                key={index}
                className={`item ${selectedItem === index ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleItemClick(index)}
              >
                {item}
              </div>
            ))}
          </div>
          {selectedItem !== null && (
            <div className="feedback">
              {isCorrect ? 'Correct!' : 'Incorrect!'}
              <button onClick={nextCategory}>Next</button>
            </div>
          )}
          <div className="timer">Time Left: {timeLeft} seconds</div>
          <div className="points">Points: {points}</div>
          <button onClick={useHint} disabled={hints === 0}>Use Hint (-10 points)</button>
          <button onClick={() => unlockTheme('dark')}>Unlock Dark Theme (-100 points)</button>
          <button onClick={sharePuzzle}>Share Puzzle</button>
          <button onClick={createLevel}>Create New Level</button>
          <div className="marketing">
            <a href="https://www.youtube.com/watch?v=example">Watch Trailer</a>
            <a href="https://www.instagram.com/example">Follow Us on Instagram</a>
            <a href="https://www.facebook.com/example">Join Our Community</a>
          </div>
        </div>
      );
    }

    export default App;
