import React from 'react';


function Photo({photos, handleClick}) {
  
  return (
    <div id='container'>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.src} alt={photo.name} className="photo" onClick={handleClick}/>
      ))}
    </div>
  );
}

export default Photo;