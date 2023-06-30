import { useState } from 'react';






function Photo() {

const photos = [
  { id: 1, src: '../photos/paris.jpg', clicked: false },
  { id: 2, src: '../photos/barcelona.jpg', clicked: false },
  { id: 3, src: '../photos/bucharest.jpg', clicked: false },
  { id: 4, src: '../photos/oslo.jpg', clicked: false },
  { id: 5, src: '../photos/munchen.jpg', clicked: false },
  { id: 6, src: '../photos/sydney.jpg', clicked: false },
  { id: 7, src: '../photos/warsaw.jpg', clicked: false },
  { id: 8, src: '../photos/cairo.jpg', clicked: false },
  { id: 9, src: '../photos/budapest.jpg', clicked: false },
  { id: 10, src: '../photos/milano.jpg', clicked: false }
 ]

    return(
        <div className="photo">
            <img src={require('../photos/paris.jpg')} alt="Hlo" className='photo'/>
        </div>
    )
}

export default Photo;