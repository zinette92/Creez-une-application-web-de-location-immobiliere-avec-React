import React from "react";
import { useState } from "react";
import nextImage from "../../assets/images/next_carousel.png";
import prevImage from "../../assets/images/prev_carousel.png";

export default function Slideshow({ imageTitle, imagesList }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={imagesList[activeImageIndex]}
        alt={imageTitle}
        key={activeImageIndex}
      />

      {imagesList.length > 1 && (
        <>
          <p className="carousel__index">1/{imagesList.length}</p>
          <img
            className="carousel__arrow--left"
            src={ prevImage }
            alt="Previous image"
          />
          <img
            className="carousel__arrow--right"
            src={ nextImage }
            alt="Next image"
          />
        </>
      )}
    </div>
  );
}
