import { useState } from 'react';
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

 const [photos, setPhotos] = useState([
    { id: 1, name:'Paris', src: parisImage, clicked: false },
    { id: 2, name:'Barcelona', src: barcelonaImage, clicked: false },
    { id: 3, name:'Bucharest', src: bucharestImage, clicked: false },
    { id: 4, name:'Oslo', src: osloImage, clicked: false },
    { id: 5, name:'Munchen', src: munchenImage, clicked: false },
    { id: 6, name:'Sydney', src: sydneyImage, clicked: false },
    { id: 7, name:'Warsaw', src: warsawImage, clicked: false },
    { id: 8, name:'Cairo', src: cairoImage, clicked: false },
    { id: 9, name:'Budapest', src: budapestImage, clicked: false },
    { id: 10, name:'Milano', src: milanoImage, clicked: false },
 ]);

 const [score, setScore] = useState(0)

 const incrementScore = () => {
  setScore(prevScore => prevScore + 1)
 }


 const shuffleArray = (array) => {
  

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
return array;

}

 const handleClick = (id) => {
  const updatedPhotos = photos.map((photo) => {
    if (photo.id === id) {
      if (photo.clicked) {
        setScore(0);
        return { ...photo, clicked: false };
      } else {
        incrementScore();
        return { ...photo, clicked: true };
      }
    }
    return photo;
  });

  setPhotos(updatedPhotos); 
};

  return (
    <div className="App">
      <div id="header">
        <div id="title">MEMORY GAME</div>
        <div id="score">
          <div id="currentScore">Current score: {score}</div>
          <div id="bestScore">Best score: </div>
        </div>
      </div>

      <Photo
        photos = {photos}
        handleClick = {handleClick}
        shuffleArray = {shuffleArray}
      />   
        
    </div>
  );

}

export default App;
