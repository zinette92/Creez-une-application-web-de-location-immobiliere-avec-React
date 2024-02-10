import React from "react";
import { useState } from "react";
import nextImage from "../../assets/images/next_carousel.png";
import prevImage from "../../assets/images/prev_carousel.png";

export default function Slideshow(props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeImageIndex = (direction) => {
    if (direction === "prev") {
      activeImageIndex === 0
        ? setActiveImageIndex(props.imagesList.length - 1)
        : setActiveImageIndex((activeImageIndex) => activeImageIndex - 1);
    } else {
      activeImageIndex === props.imagesList.length - 1
        ? setActiveImageIndex(0)
        : setActiveImageIndex((activeImageIndex) => activeImageIndex + 1);
    }
  };

  return (
    <section className="carousel">
      <img
        className="carousel__image"
        src={props.imagesList[activeImageIndex]}
        alt={props.imageTitle}
        key={activeImageIndex}
      />

      {props.imagesList.length > 1 && (
        <>
          <p className="carousel__index">
            {activeImageIndex + 1}/{props.imagesList.length}
          </p>
          <img
            className="carousel__arrow--left"
            src={prevImage}
            alt="Back"
            onClick={() => changeImageIndex("prev")}
          />
          <img
            className="carousel__arrow--right"
            src={nextImage}
            alt="Next"
            onClick={() => changeImageIndex("next")}
          />
        </>
      )}
    </section>
  );
}
