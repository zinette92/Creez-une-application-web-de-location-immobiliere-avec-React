import React from 'react'
import { Link } from 'react-router-dom'
import Home from "../../components/Home/Home";

export default function Error() {
  return (
    <div className="error">
      <p className="error__title">404</p>
      <p className="error__message"> Oups! La page que vous demandez n'existe pas. </p>
      <Link className="error__backToHome" to="/" element={<Home />}>Retourner sur la page d'accueil</Link>
      </div>

  )
}
