import React from "react";
import { useState } from "react";

export default function Slideshow({ imageTitle, imagesList }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  console.log(activeImageIndex);
  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={imagesList[activeImageIndex]}
        alt={imageTitle}
        key={activeImageIndex}
      />

      {imagesList.length > 1 && (
        <p
          className="imageIndex">
          1/{imagesList.length}
        </p>
      )}
    </div>
  );
}
