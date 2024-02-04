import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import Data from "../../Data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import FullStar from "../../assets/images/full_star.png";
import EmptyStar from "../../assets/images/empty_star.png";

export default function Housing() {
  const { houseId } = useParams();
  const houseData = Data.filter((house) => house.id === houseId);
  const maxRate = 5;

  if (houseData.length === 0) {
    return <Navigate to="/error" />;
  }

  return (
    <section className="housing">
      {houseData.map((house, index) => (
        <React.Fragment key={index}>
          <Slideshow
            imageTitle={house.title}
            imagesList={house.pictures}
            key={index}
          />

          <div className="flex__wrapper">
            <div className="housing__details">
              <div>
                <h1 className="housing__details--title"> {house.title} </h1>
                <p className="housing__details--location">{house.location}</p>
              </div>
              <ul className="housing__details--tags">
                {house.tags.map((tag, index) => (
                  <li key={index}>
                    <span className="tag"> {tag} </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="housing__host">
              <div className="housing__host--identity">
                <p className="housing__host--name">
                  {house.host.name.split(" ").join("\n")}
                </p>
                <img
                  className="housing__host--picture"
                  src={house.host.picture}
                  alt="Host of this house"
                />
              </div>
              <ul className="housing__host--rate">
                {[...Array(maxRate)].map((_, index) => (
                  <li key={index}>
                    <img
                      key={index}
                      src={index < house.rating ? FullStar : EmptyStar}
                      alt={
                        index < house.rating ? "A full star" : "An empty star"
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="housing__collapse">
            <Collapse title={"Description"} description={house.description} />
            <Collapse title={"Équipements"} equipments={house.equipments} />
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}
