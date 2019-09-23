import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FaAlignRight } from "react-icons/fa";

class Navbar extends Component {

  state = {
    isMenuOpen: false
  }

  toggleMenu = () => {
    this.setState((state) => ({
      isMenuOpen: !state.isMenuOpen
    }))
  }

  render() {
    const {isMenuOpen} = this.state;

    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__top">
              <Link className="header__logo" to="/">
                <svg className="header__logo-svg">
                  <use xlinkHref="#diamond" />
                </svg>
                <span className="header__logo-text">JAKNOW</span>
              </Link>

              <FaAlignRight className="header__hamburger" onClick={this.toggleMenu} />
            </div>

            <div className="header__bottom">
              <nav className="header__nav">
                <ul className={`header__menu ${isMenuOpen && 'header__menu--show'}`}>

                  <li className="header__menu-item">
                    <NavLink className="header__link" exact to="/">Start</NavLink>
                  </li>
                  <li className="header__menu-item">
                    <NavLink className="header__link" to="/about">O mnie</NavLink>
                  </li>
                  <li className="header__menu-item">
                    <NavLink className="header__link" to="/portfolio">Projekty</NavLink>
                  </li>
                  <li className="header__menu-item">
                    <NavLink className="header__link" to="/contact">Kontakt</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
