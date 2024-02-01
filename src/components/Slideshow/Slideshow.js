import React from "react";

export default function Slideshow({ imagesList }) {
  return (
    <div>
      <ul>
        {imagesList.map((image, index) => (
            <img src={ image } alt="Image" key = { index }/>
        ))}
      </ul>

            <p className="hideImageIndex">Test color</p>
      <p className={`imageIndex ${imagesList.length === 1? "hideImageIndex" : ""}`}> 1/{imagesList.length} </p>
    </div>
  );
}
