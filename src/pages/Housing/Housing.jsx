import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Data from "../../Data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import FullStar from "../../assets/images/full_star.png";
import EmptyStar from "../../assets/images/empty_star.png";

export default function Housing() {
  const { houseId } = useParams();
  const houseData = Data.find((house) => house.id === houseId);
  const maxRate = 5;
  
  if (!houseData) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="housing">
      <Slideshow imageTitle={houseData.title} imagesList={houseData.pictures} />
      <section className="flex__wrapper">
        <div className="housing__details">
          <div>
            <h1 className="housing__details--title"> {houseData.title} </h1>
            <p className="housing__details--location">{houseData.location}</p>
          </div>
          <ul className="housing__details--tags">
            {houseData.tags.map((tag, index) => (
              <li key={index}>
                <span className="tag"> {tag} </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="housing__host">
          <div className="housing__host--identity">
            <p className="housing__host--name">
              {houseData.host.name.split(" ").join("\n")}
            </p>
            <img
              className="housing__host--picture"
              src={houseData.host.picture}
              alt="Host of this house"
            />
          </div>
          <ul className="housing__host--rate">
            {[...Array(maxRate)].map((_, index) => (
              <li key={index}>
                <img
                  key={index}
                  src={index < houseData.rating ? FullStar : EmptyStar}
                  alt={
                    index < houseData.rating ? "A full star" : "An empty star"
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="housing__collapse">
        <Collapse title="Description" description={houseData.description} />
        <Collapse title="Équipements" equipments={houseData.equipments} />
      </section>
    </div>
  );
}
