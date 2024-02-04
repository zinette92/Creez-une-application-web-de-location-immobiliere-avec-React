import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__backToHome" to="/">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
