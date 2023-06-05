import styled from "styled-components";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import svg from "../../assets/react.svg";

export default function ProjectsContainer() {
  const ProjectContainer = styled.div`
    border: 2px solid #222;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3em 0 3em 0;
    margin-bottom: 2em;
  `;

  return (
    <ProjectContainer>
      <ProjectInfo
        name="Project Name"
        description="Project Description "
        techs="React, Node"
        img="svg"
      />
    </ProjectContainer>
  );
}
