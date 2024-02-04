import React from "react";
import { useState, useEffect } from "react";
import nextImage from "../../assets/images/next_carousel.png";
import prevImage from "../../assets/images/prev_carousel.png";

export default function Slideshow({ imageTitle, imagesList }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  


  const changeImageIndex = (direction) => {

    if(direction === "prev") {
      (activeImageIndex === 0 ? setActiveImageIndex(imagesList.length-1) : setActiveImageIndex(activeImageIndex => activeImageIndex-1))
       
    }
    else {
      (activeImageIndex === imagesList.length-1 ? setActiveImageIndex(0) : setActiveImageIndex(activeImageIndex => activeImageIndex+1))
    }
  }

  return (
    <div className="carousel">

      <div>
      <img
        className="carousel__image"
        src={imagesList[activeImageIndex]}
        alt={imageTitle}
        key={activeImageIndex}
      />
</div>
      {imagesList.length > 1 && (
        <>
          <p className="carousel__index"> { activeImageIndex+1}/{imagesList.length}</p>
          <img
            className="carousel__arrow--left"
            src={ prevImage }
            alt="Previous image"
            onClick={ () => changeImageIndex("prev") }
          />
          <img
            className="carousel__arrow--right"
            src={ nextImage }
            alt="Next image"
            onClick={ () => changeImageIndex("next") }
          />
        </>
      )}
    </div>
  );
}
