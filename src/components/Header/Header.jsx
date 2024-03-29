import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/index.scss";
import logo_kasa_header from "../../assets/images/logo_kasa_header.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/">
          <img
            className="navbar__logo"
            src={logo_kasa_header}
            alt="Logo de l'entreprise Kasa"
          />
        </NavLink>
        <ul className="navbar__link">
          <li>
            <NavLink to="/" className="navbar__link--style">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar__link--style">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
