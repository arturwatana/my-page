import styled from "styled-components";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import svg from "../../assets/react.svg";
import schedule from "../../assets/Schedule.png";
import { useEffect } from "react";

import AOS from "aos";

export default function ProjectsContainer() {
  const ProjectContainer = styled.div`
    border: 2px solid #222;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 2em;
    align-items: center;
    flex-direction: column;
    padding: 3em 0 3em 0;
    margin-bottom: 2em;
    margin-top: 2em;
  `;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <ProjectContainer data-aos="fade-up">
      <ProjectInfo
        name="Project Name"
        description="Project Description "
        techs="React, Node"
        img={schedule}
      />
      <ProjectInfo
        name="Project Name"
        description="Project Description "
        techs="React, Node"
        img={svg}
        row="row-reverse"
      />
      <ProjectInfo
        name="Project Name"
        description="Project Description "
        techs="React, Node"
        img={svg}
      />
      <ProjectInfo
        name="Project Name"
        description="Project Description "
        techs="React, Node"
        img={svg}
        row="row-reverse"
      />
      <ProjectInfo
        name="Project Name"
        description="Project Description "
        techs="React, Node"
        img={svg}
      />
    </ProjectContainer>
  );
}
