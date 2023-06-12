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

    @media (max-width: 1920px) {
      flex-direction: column;
      height: 100%;

      a {
        width: 90%;
      }
    }

    @media (max-width: 1430px) {
      height: 50em;
      a {
        padding: 2em;
        height: 100%;
        flex-direction: column;
      }
    }

    @media (max-width: 650px) {
      height: 25em;
      padding: 1em;
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
    @media (max-width: 1430px) {
      font-size: 25px;
      width: 100%;
    }
    @media (max-width: 650px) {
      width: 100%;
      padding-left: 0;
    }
  `;

  const ProjectTittle = styled.h1`
    text-align: center;
    color: #222;
    @media (max-width: 650px) {
      width: 100%;
      font-size: 40px;
    }
    @media (max-width: 501px) {
      font-size: 30px;
    }
  `;

  const ProjectDescription = styled.p`
    font-size: 24px;
    @media (max-width: 650px) {
      display: none;
    }
  `;

  const ImageBlock = styled.div`
    position: relative;
    transition: 0.5s;

    @media (max-width: 1430px) {
      img {
        width: 100%;
      }
    }
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
