import styled from "styled-components";
import alt from "../../assets/aguarde-em-breve.png";
import { Link } from "react-router-dom";

type ProjectInfoProps = {
  id: string;
  name: string;
  description: string;
  techs: string[];
  img?: string;
  row?: string;
  deployLink?: string;
  repoFrontend?: string;
  repoBackend?: string;
};

export default function ProjectInfo(props: ProjectInfoProps) {
  const Img = styled.img`
    width: 30em;
    height: 100%;
    object-fit: contain;
  `;

  const ProjectCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    a {
      display: flex;
      flex-direction: ${props.row || "row"};
      justify-content: space-evenly;
      align-items: center;
      margin-bottom: 2em;
      text-decoration: none;
      color: #222;
      height: 20em;
      width: 60%;
      border: 2px solid #222;
      border-radius: 2em;
      transition: 0.5s;

      :hover {
        scale: 1.1;
      }
    }

    @media (max-width: 1180px) {
      flex-direction: column;
      height: 100%;
    }
  `;

  const ProjectDetails = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 2em;

    @media (max-width: 1180px) {
      margin-top: 1em;
      gap: 1em;
      width: 100%;
    }
  `;

  const ProjectTittle = styled.h1`
    text-align: center;
    color: #222;
  `;

  const ProjectDescription = styled.p`
    font-size: 20px;
  `;

  const ImageBlock = styled.div`
    position: relative;
    transition: 0.5s;
  `;

  return (
    <ProjectCard>
      <Link to={`/${props.id}`}>
        <ImageBlock>
          <Img src={props.img} alt={alt || "comming soon"} />
        </ImageBlock>
        <ProjectDetails>
          <ProjectTittle>{props.name}</ProjectTittle>
          <ProjectDescription>
            {props.description.length > 250
              ? `${props.description.slice(0, 250)}...`
              : props.description}
          </ProjectDescription>
        </ProjectDetails>
      </Link>
    </ProjectCard>
  );
}
