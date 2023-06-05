import styled from "styled-components";
import { useState, useEffect } from "react";

type ProjectInfoProps = {
  name: string;
  description: string;
  techs: string;
  img: string;
  row?: string;
  deployLink?: string;
  repoFrontend?: string;
  repoBackend?: string;
};

export default function ProjectInfo(props: ProjectInfoProps) {
  const [projectHover, setProjectHover] = useState<boolean>(false);
  const Img = styled.img`
    width: 30em;
    height: 100%;
  `;
  const ProjectCard = styled.div`
    display: flex;
    flex-direction: ${props.row || "row"};
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2em;
    height: 20em;
    width: 100%;
  `;

  const ProjectDetails = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2em;
  `;

  const ProjectTittle = styled.h1`
    text-align: center;
    color: #222;
  `;

  const ProjectDescription = styled.p`
    font-size: 20px;
  `;

  const ProjectTechs = styled.p`
    span {
      font-weight: bold;
    }
  `;

  const Layer = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #222;
    opacity: 0.5;
  `;

  const ImageBlock = styled.div`
    position: relative;
    height: 100%;
  `;

  const ContentBlock = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: #ffff;
  `;

  const Button = styled.button`
    width: 8em;
    height: 2em;
    margin-top: 1em;
    border-radius: 1em;
    border: none;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background-color: #222;
      color: #fff;
    }
  `;

  const RepositoryInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    text-align: center;
  `;

  function ProjectHover(e: any) {
    if (e.type === "mouseenter") {
      setProjectHover(true);
      return;
    }
    setProjectHover(false);
  }

  return (
    <ProjectCard>
      <ImageBlock onMouseEnter={ProjectHover} onMouseLeave={ProjectHover}>
        {projectHover ? (
          <>
            <Layer></Layer>
            <ContentBlock>
              <h1>Deploy</h1>
              <Button>Acessar</Button>
              <h1>Repositorios</h1>
              <RepositoryInfo>
                <div>
                  <h2>Front-end</h2>
                  <Button>Acessar</Button>
                </div>
                <div>
                  <h2>Back-end</h2>
                  <Button>Acessar</Button>
                </div>
              </RepositoryInfo>
            </ContentBlock>
          </>
        ) : null}

        <Img src={props.img} alt="" />
      </ImageBlock>
      <ProjectDetails>
        <ProjectTittle>{props.name}</ProjectTittle>
        <ProjectDescription>{props.description}</ProjectDescription>
        <ProjectTechs>
          <span>Tecnologias utilizadas:</span> {props.techs}
        </ProjectTechs>
      </ProjectDetails>
    </ProjectCard>
  );
}
