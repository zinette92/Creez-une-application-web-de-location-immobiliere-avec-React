import React from "react";
import { useState } from "react";

export default function Slideshow({ imageTitle, imagesList }) {

    const [ activeImageIndex, setActiveImageIndex] = useState(0) 
    console.log(activeImageIndex);
  return (
    <div className="carousel">

    <img className="carousel__image" src={ imagesList[activeImageIndex] } alt={ imageTitle } key = { activeImageIndex }/>

      <p className={`imageIndex ${imagesList.length === 1? "hideImageIndex" : ""}`}> 1/{imagesList.length} </p>
    </div>
  );
}
