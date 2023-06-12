import styled from "styled-components";
import ProjectInfo from "../ProjectInfo/ProjectInfo";

import { useEffect } from "react";

import AOS from "aos";
import { ProjectsRepository } from "../../db/Project.repository";

export default function ProjectsContainer() {
  const projectsRepository = new ProjectsRepository();
  const ProjectContainer = styled.div`
    border: 2px solid #222;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 2em;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    padding: 3em 0 3em 0;
    margin-bottom: 2em;
    margin-top: 2em;

    @media (max-width: 1180px) {
      padding: 3em 1em 3em 1em;
    }

    @media (max-width: 995px) {
      padding: 1em;
    }
  `;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <ProjectContainer data-aos="fade-up" id="projects">
      {projectsRepository.showAll().map((project) => {
        return (
          <ProjectInfo
            id={project.id}
            name={project.name}
            description={project.description}
            techs={project.techs}
            img={project.img}
            deployLink={project.deployLink}
            repoBackend={project.repoBackEnd}
            repoFrontend={project.repoFrontEnd}
            key={project.id}
          />
        );
      })}
    </ProjectContainer>
  );
}
