import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow";
import Data from "../../Data/logements.json";

export default function Housinginformation() {
  const { houseId } = useParams();
  console.log("ok", houseId);
  return (
    <section className="house">
      {Data.filter((house) => house.id === houseId).map((house, index) => (
        <div>
          <Slideshow
            imageTitle={house.title}
            imagesList={house.pictures}
            key={index}
          />
          
        </div>
      ))}
    </section>
  );
}
