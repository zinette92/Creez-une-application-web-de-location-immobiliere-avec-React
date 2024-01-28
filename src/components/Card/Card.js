import React from "react";
import Logements from "../../Data/logements.json";

export default function Card() {
  return (
    <div className="card">
      <div className="card__frame">
        {Logements.map((data) => (
          <div className="card__logement" key={data.id}>
            <img className="card__logement--cover" src={ data.cover } alt={ data.title }/> 
            <h3 className="card__logement--title">
              {data.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
