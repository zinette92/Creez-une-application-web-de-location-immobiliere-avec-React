import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card__housing">
      <Link to={`/housing/${props.cardId}/`}>
        <img className="card__housing--cover" src={props.cardCover} alt={props.cardTitle} />
        <h2 className="card__housing--title">{props.cardTitle}</h2>
      </Link>
    </div>
  );
}
