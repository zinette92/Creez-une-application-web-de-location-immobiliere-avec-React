import React from "react";
import "../../style/index.scss";
import logo_kasa_footer from "../../assets/images/logo_kasa_footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__elements">
        <img
          className="footer__logo"
          src={logo_kasa_footer}
          alt="Logo de l'entreprise kasa"
        />
        <small className="footer__copyright">
          © 2024 Kasa. All rights reserved
        </small>
      </div>
    </footer>
  );
}
