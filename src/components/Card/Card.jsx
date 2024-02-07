import React from "react";
import { Link } from "react-router-dom";

export default function Card({ cardId, cardCover, cardTitle }) {
  return (
    <div className="card__housing">
      <Link to={`/housing/${cardId}/`}>
        <img className="card__housing--cover" src={cardCover} alt={cardTitle} />
        <h2 className="card__housing--title">{cardTitle}</h2>
      </Link>
    </div>
  );
}
