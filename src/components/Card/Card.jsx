import React from "react";
import { Link } from "react-router-dom";

export default function Card({ cardId, cardCover, cardTitle, linkIndex }) {
  console.log(cardId);
  return (
    <div className="card__logement">
      <Link to={`/housing/${cardId}/`}>
        <img
          className="card__logement--cover"
          src={cardCover}
          alt={cardTitle}
        />
        <h3 className="card__logement--title">{cardTitle}</h3>
      </Link>
    </div>
  );
}
