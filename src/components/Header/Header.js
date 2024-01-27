import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/index.scss";
import logo_kasa_header from "../../assets/logo_kasa_header.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <img
          className="navbar__logo"
          src={logo_kasa_header}
          alt="Logo de l'entreprise Kasa"
        />
        <div>
          <NavLink to="/" className="navbar__link">
            Accueil
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            A propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
