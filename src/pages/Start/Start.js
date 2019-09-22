import React from "react";
import { Link } from "react-router-dom";

import Showcase from "../../components/Showcase/Showcase";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import "./Start.scss";

import avatar from "../../img/avatar.svg";

const Start = () => {
  return (
    <>
      <Showcase className="start">
        <div className="container start__wrapper">
          <Title content="Freelancer Front-end Developer" name="start__title" />
          <Description content="Wdrożę twój projekt strony internetowej" />
          <div className="start__avatar">
            <img className="start__avatar-img" src={avatar} alt="avatar" />
          </div>
          <Link to="/portfolio" className="start__btn">
            Projekty
          </Link>
        </div>
      </Showcase>
      <div style={{textAlign: "center"}}>
        Niebawem
      </div>
    </>
  );
};

export default Start;
