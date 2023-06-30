import { useState } from 'react';
import Photo from './Photo';

function App() {

 const [count, setCount] = useState(0)
 const [score, setScore] = useState(0)

 const increment = () => {
  setCount(prevCount => prevCount + 1);
 }

 const incrementScore = () => {
  setScore (prevScore => prevScore + 1);
 }






  return (
    <div className="App">
      <div id="header">
        <div id="title">MEMORY GAME</div>
        <div id="score">
          <div id="currentScore">Current score: {score}</div>
          <div id="bestScore">Best score: </div>
        </div>
      </div>

      <div id="container">
        <Photo/>
        <img src={require('../photos/paris.jpg')} alt="" className='photo'/>
      </div>

      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
