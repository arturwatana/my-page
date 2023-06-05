import styled from "styled-components";

type ProjectInfoProps = {
  name: string;
  description: string;
  techs: string;
  img: string;
};

export default function ProjectInfo(props: ProjectInfoProps) {
  const Img = styled.img`
    width: 30em;
    height: 100%;
  `;
  const ProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
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

  const ProjectDescription = styled.p``;

  const ProjectTechs = styled.p`
    &span {
      font-weight: bold;
    }
  `;

  return (
    <ProjectCard>
      <Img src={props.img} alt="" />
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
