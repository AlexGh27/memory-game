import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import parisImage from '../photos/paris.jpg';
import barcelonaImage from '../photos/barcelona.jpg';
import bucharestImage from '../photos/bucharest.jpg';
import osloImage from '../photos/oslo.jpg';
import munchenImage from '../photos/munchen.jpg';
import sydneyImage from '../photos/sydney.jpg';
import warsawImage from '../photos/warsaw.jpg';
import cairoImage from '../photos/cairo.jpg';
import budapestImage from '../photos/budapest.jpg';
import milanoImage from '../photos/milano.jpg';

function App() {
  const photos = [
    { id: 1, name: 'Paris', src: parisImage},
    { id: 2, name: 'Barcelona', src: barcelonaImage},
    { id: 3, name: 'Bucharest', src: bucharestImage},
    { id: 4, name: 'Oslo', src: osloImage},
    { id: 5, name: 'Munchen', src: munchenImage},
    { id: 6, name: 'Sydney', src: sydneyImage},
    { id: 7, name: 'Warsaw', src: warsawImage},
    { id: 8, name: 'Cairo', src: cairoImage},
    { id: 9, name: 'Budapest', src: budapestImage},
    { id: 10, name: 'Milano', src: milanoImage}
  ];

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPhotos, setClickedPhotos] = useState([]);

  const incrementScore = () => {
    setCurrentScore((prevScore) => prevScore + 1);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleClick = (id) => {
    const clickedPhoto = photos.find((photo) => photo.id === id);

    if (clickedPhoto) {
      if (clickedPhotos.includes(clickedPhoto.id)) {
        setCurrentScore(0);
        setClickedPhotos([]);
      } else {
        incrementScore();
        setClickedPhotos((prevClickedPhotos) => [...prevClickedPhotos, clickedPhoto.id]);
      }
    }
  };

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore]);

  return (
    <div className="App">
      <div id="header">
        <div id="title">MEMORY GAME</div>
        <div id="score">
          <div id="currentScore">Current score: {currentScore}</div>
          <div id="bestScore">Best score: {bestScore}</div>
        </div>
      </div>
      <Photo photos={photos} handleClick={handleClick} shuffleArray={shuffleArray} />
      <div id="description">Don't click on the same image twice!</div>
    </div>
  );
}

export default App;
