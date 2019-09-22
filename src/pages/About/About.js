import React from "react";
import Showcase from "../../components/Showcase/Showcase";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import "./About.scss";

import imgHtml from "../../img/html5.png";
import imgJSX from "../../img/react.png";
import imgCss from "../../img/css3.png";
import imgSass from "../../img/sass.png";
import imgStyled from "../../img/styled.png";
import imgJS from "../../img/javascript.png";
import imgReact from "../../img/react.png";
import imgNode from "../../img/nodejs.png";
import imgVS from "../../img/vs.png";
import imgPS from "../../img/photoshop.png";
import imgGithub from "../../img/github.png";
import imgUbuntu from "../../img/ubuntu.png";
import imgBabel from "../../img/babel.png";

import MainCard from "../../components/MainCard/MainCard";

const About = () => {
  return (
    <>
      <Showcase className="about">
        <div className="container">
          <Title content="O mnie" name="about__title" />
          <Description
            name="about__description"
            content="Nazywam się Jakub Nowak i jestem absolwentem technikum informatycznego, w którym uzyskałem tytuł Technika Informatyka. Aktualnie w przerwie przed studiami zajmuję się doskonaleniem swojej pasji, którą jest tworzenie aplikacji internetowych."
          />
        </div>
      </Showcase>

      <MainCard className="about__main">
        <div className="about__content">
          <div className="about__technologies">
            <h3 className="about__heading">Technologie i narzędzia</h3>
            <p className="about__secondaryDescription">
              Podczas pracy dużą uwagę przywiązuję do jakości kodu który piszę.
              Biorę pod uwagę standardy, semantykę i optymalizacje. Aplikacje,
              które tworzę są dostosowane do wszystkich urządzeń. Staram się
              zachowywać dobre praktyki oraz korzystam z takich rozwiązań jak
              BEM, preprocesorów CSS czy kompilatorów do starszych wersji JS.
              Poniżej wymieniłem technologie z których korzystam na codzień i w
              których ciągle się doskonalę.
            </p>
          </div>

          <div className="about__card">
            <h2 className="about__secondaryTitle">html</h2>
            <ul className="about__list">
              <li className="about__list-item">
                <img src={imgHtml} alt="img" className="about__img" />
                <div className="about__name">HTML5</div>
              </li>
              <li className="about__list-item">
                <img src={imgJSX} alt="" className="about__img" />
                <div className="about__name">JSX</div>
              </li>
            </ul>
          </div>

          <div className="about__card">
            <h2 className="about__secondaryTitle">css</h2>
            <ul className="about__list">
              <li className="about__list-item">
                <img src={imgSass} alt="" className="about__img" />
                <div className="about__name">SASS</div>
              </li>
              <li className="about__list-item">
                <img src={imgCss} alt="img" className="about__img" />
                <div className="about__name">CSS3</div>
              </li>

              <li className="about__list-item">
                <img src={imgStyled} alt="" className="about__img" />
                <div className="about__name">Styled Components</div>
              </li>
            </ul>
          </div>

          <div className="about__card">
            <h2 className="about__secondaryTitle">javascript</h2>
            <ul className="about__list">
              <li className="about__list-item">
                <img src={imgJS} alt="img" className="about__img" />
                <div className="about__name">JS ES6+</div>
              </li>

              <li className="about__list-item">
                <img src={imgReact} alt="" className="about__img" />
                <div className="about__name">React</div>
              </li>

              <li className="about__list-item about__list-item--locked">
                <img src={imgNode} alt="" className="about__img" />
                <div className="about__name">NodeJS</div>
              </li>
            </ul>
          </div>

          <div className="about__card">
            <h2 className="about__secondaryTitle">Inne</h2>
            <ul className="about__list">
              <li className="about__list-item">
                <img src={imgBabel} alt="img" className="about__img" />
                <div className="about__name">Babel</div>
              </li>

              <li className="about__list-item">
                <img src={imgVS} alt="img" className="about__img" />
                <div className="about__name">Visual Studio Code</div>
              </li>

              <li className="about__list-item">
                <img src={imgPS} alt="" className="about__img" />
                <div className="about__name">Photoshop</div>
              </li>

              <li className="about__list-item">
                <img src={imgGithub} alt="" className="about__img" />
                <div className="about__name">Github</div>
              </li>

              <li className="about__list-item">
                <img src={imgUbuntu} alt="" className="about__img" />
                <div className="about__name">GNU/Linux Ubuntu</div>
              </li>
            </ul>
          </div>
        </div>
      </MainCard>
    </>
  );
};

export default About;
