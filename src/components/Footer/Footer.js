import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithubSquare, FaGithub } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link className="footer__logo" to="/">
          <svg className="footer__logo-svg">
            <use xlinkHref="#diamond" />
          </svg>
          <span className="footer__logo-text">JAKNOW</span>
        </Link>
        <h3 className="footer__text">Kontakt</h3>

        <ul className="footer__socials">
          <li className="footer__socials-item">
            <a href="mailto:elo123@gmail.com">
              <FaEnvelope className="footer__icon" />
            </a>
          </li>
          <li className="footer__socials-item">
            <a href="https://github.com/fliftys" target="_blank">
              <FaGithub className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">
      &copy; 2019 U mnie działa. Wszelkie prawa zastrzeżone.

      </p>
    </footer>
  );
};
export default Footer;
