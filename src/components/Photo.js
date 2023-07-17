import React from 'react';


function Photo({photos, handleClick, shuffleArray}) {
  
  return (
    <div id='container'>
      {shuffleArray(photos).map((photo) => (
        <div className="photo-container">
          <img key={photo.id} src={photo.src} alt={photo.name} className="photo" onClick={() => handleClick(photo.id)}/>
          <div className="photo-name" onClick={() => handleClick(photo.id)}>{photo.name}</div>
        </div>
        
      ))}
    </div>
  );
}

export default Photo;