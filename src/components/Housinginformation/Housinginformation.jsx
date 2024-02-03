import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow";
import Data from "../../Data/logements.json";
import Collapse from "../Collapse/Collapse";
import StarFull from "../../assets/images/full_star.png";
import StarEmpty from "../../assets/images/empty_star.png";

export default function Housinginformation() {
  const { houseId } = useParams();
  const houseData = Data.filter((house) => house.id === houseId);
  const maxRate = 5;
  if (houseData.length === 0) {
    return <Navigate to="/error" />;
  }
 
  

  return (
    <section className="house">
      {houseData.map((house, index) => (
        <React.Fragment key={index}>
          <Slideshow
            imageTitle={house.title}
            imagesList={house.pictures}
            key={index}
          />

          <div className="flex__wrapper--horizontal">
            <div className="house__details">
              <h1 className="house__details--title"> {house.title} </h1>
              <h4 className="house__details--location">{house.location}</h4>
              <ul className="house__details--tags">
                {house.tags.map((tag, index) => (
                  <li key={index}>
                    <span className="tag"> {tag} </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="house__host">
              <div className="house__host--identity">
                <p className="house__host--name">
                  {house.host.name.split(" ").join("\n")}
                </p>
                <img
                  className="house__host--picture"
                  src={house.host.picture}
                  alt="Host of this house"
                />
              </div>
              <ul className="house__owner--rate">
              {[...Array(maxRate)].map((_, index) => (
        <li>
        <img
          key={index}
          className={index < house.rating ? 'star-filled' : 'star-empty'}
          
        />
    
        </li>
      ))}

              </ul>
            </div>
          </div>
          <div className="house__collapse">
            <Collapse title={"Description"} description={house.description} />
            <Collapse title={"Équipements"} equipments={house.equipments} />
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}
