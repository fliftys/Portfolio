import React from "react";
import Showcase from "../../components/Showcase/Showcase";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import "./Projects.scss";
import MainCard from "../../components/MainCard/MainCard";

import { FaTv, FaGithub } from "react-icons/fa";

const Projects = ({ value }) => {
  const { projectType, handleChange, sortedProjects, sortProjects } = value;

  const galleryItems = sortedProjects.map(project => {
    const { img, urlGithub, urlNetlify, id } = project;
    return (
      <div key={id} className="projects__gallery-item">
        <img src={project.img} alt="img" className="projects__img" />
        <div className="projects__back">
          <a
            href={urlNetlify}
            className="projects__btn projects__btn--small"
            target="_blank"
            rel="noopener noreferrer"
          >
            Podgląd
            <FaTv />
          </a>
          <a
            href={urlGithub}
            className="projects__btn projects__btn--small"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kod
            <FaGithub />
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <Showcase className="projects">
        <div className="container">
          <Title content="Projekty" name="projects__title" />
          <Description
            name="projects__description"
            content="Poniżej znajduje się lista wyselekcjonowanych stron internetowych, które stworzyłem wraz z kodem źródłowym oraz podglądem na platformie netlify.
            Dokładniejszy opis poszczególnych projektów i użytych technologii znajduje się w podlinkowanym repozytorium na githubie."
          />
        </div>
      </Showcase>
      <div className="wrapper">

      
      <MainCard className="projects__main">
        <div className="projects__content">
          <div className="projects__sort">
            <label
              className={`projects__btn ${projectType === "all" &&
                "projects__btn--active"}`}
              htmlFor="typeAll"
            >
              wszystkie
              <input
                className="projects__input"
                type="radio"
                value="all"
                checked={projectType === "all"}
                name="projectType"
                id="typeAll"
                onChange={ async (e) => {
                  await handleChange(e);
                  sortProjects();
                }}
              />
            </label>

            <label
              className={`projects__btn ${projectType === "react" &&
                "projects__btn--active"}`}
              htmlFor="typeReact"
            >
              react
              <input
                className="projects__input"
                type="radio"
                value="react"
                checked={projectType === "react"}
                name="projectType"
                id="typeReact"
                onChange={ async (e) => {
                  await handleChange(e);
                  sortProjects();
                }}
              />
            </label>

            <label
              className={`projects__btn ${projectType === "js" &&
                "projects__btn--active"}`}
              htmlFor="typeJS"
            >
              js
              <input
                className="projects__input"
                type="radio"
                value="js"
                checked={projectType === "js"}
                name="projectType"
                id="typeJS"
                onChange={ async (e) => {
                  await handleChange(e);
                  sortProjects();
                }}
              />
            </label>

            <label
              className={`projects__btn ${projectType === "ps" &&
                "projects__btn--active"}`}
              htmlFor="typePS"
            >
              PS2HTML
              <input
                className="projects__input"
                type="radio"
                value="ps"
                checked={projectType === "ps"}
                name="projectType"
                id="typePS"
                onChange={ async (e) => {
                  await handleChange(e);
                  sortProjects();
                }}
              />
            </label>
          </div>
          <div className="projects__gallery">{galleryItems}</div>
        </div>
      </MainCard>
      </div>
    </>
  );
};

export default Projects;
