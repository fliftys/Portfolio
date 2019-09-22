import React from "react";
import Showcase from "../../components/Showcase/Showcase";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import "./Contact.scss";
import MainCard from "../../components/MainCard/MainCard";

import {FaEnvelope} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Showcase className="contact">
        <div className="container">
          <Title content="Kontakt" name="contact__title" />
          <Description
            name="contact__description"
            content="Z chęcią nawiążę kontakt nie tylko z potencjalnymi klientami, ale również z osobami z branży. Na wiadomości odpowiadam maksymalnie w ciągu 24 godzin. Zapraszam do współpracy"
          />
        </div>
      </Showcase>
      <div className="wrapper">
        <MainCard className="contact__content">
          <h3 className="contact__info">
            <FaEnvelope/> Email: jnowak2137@gmail.com
          </h3>
          {/* TODO xD */}
        </MainCard>
      </div>
    </>
  );
};

export default Contact;
