import { Link, useParams } from "react-router-dom";
import { ProjectsRepository } from "../db/Project.repository";
import styled from "styled-components";
import notFound from "../assets/Lovepik_com-401803274-404-error-code.png";
import CarouselPhotos from "../components/CarouselPhotos/CarouselPhotos";

type MatchParams = {
  id: string;
};

export default function Project() {
  const projectsRepository = new ProjectsRepository();
  const props = useParams<MatchParams>();
  const project = projectsRepository.findById(props.id || "");

  const ProjectContainer = styled.div`
    height: 100%;
    padding: 5em;
  `;

  const BackPageP = styled.h1`
    color: #222;
    display: flex;
    font-size: 20px;

    gap: 10px;
    a {
      color: rgb(69, 69, 255);
      text-decoration: none;
    }
  `;

  const Project = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 3em;
    align-items: center;
  `;

  const ProjectTittle = styled.h1`
    font-size: 40px;
  `;

  const ProjectImg = styled.img`
    object-fit: contain;
    height: 40em;
  `;

  const ProjectDetails = styled.div`
    width: 100%;
    height: 100%;
  `;

  const ProjectTags = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 2em;
    p {
      font-weight: bold;
      font-size: 18px;
    }
  `;

  const Tag = styled.div<{ $name?: string }>`
    height: 3em;
    width: 6em;
    border-radius: 2em;
    background-color: ${(props) => {
      switch (props.$name) {
        case "Mobile":
          return "#f8050521";
        case "Desktop":
          return "#cc92ee21";
        case "API":
          return "#706f6f21";
        case "Node.js":
          return "#2af51720";
        case "React.js":
          return "#1bc7e61f";
        case "Vite":
          return "#1f51da1f";
        case "CSS":
          return "#0252ff1f";
        case "TypeScript":
          return "#46bfe41f";
        case "Express":
          return "#28eb161f";
        case "PostgreSQL":
          return "#aa1d6a1f";
        case "TypeORM":
          return "#c9a8161f";
        case "JWT":
          return "#c43eb21f";
        case "AWS":
          return "#df7d0d1f";
        case "MongoDB":
          return "#4fc9161f";
        case "Mongoose":
          return "#3bb6373b";
        case "HTML":
          return "#df7d0d1f";
        case "Vanilla JS":
          return "#fffd82c0";
        case "Axios":
          return "#fabc741f";
        case "Docker":
          return "#2ecde21f";
        case "Prisma":
          return "#70176944";
        case "Swagger":
          return "#5299521f";
        case "Vitest":
          return "#6ecf481f";
        case "TailWind CSS":
          return "#0fafe01f";
      }
    }};

    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ProjectDescription = styled.p`
    font-size: 20px;
    margin-top: 2em;
  `;

  const ProjectLinks = styled.div`
    margin-top: 2em;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    gap: 2em;

    button {
      border: none;
      border-radius: 1em;
      background-color: #222;
      color: #ffff;
      font-weight: bold;
      padding: 1em;
      text-align: center;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        transform: scale(1.2);
      }
    }
  `;

  const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;

    p {
      font-weight: bold;
      font-size: 18px;
    }

    div {
      display: flex;
      gap: 1em;
    }
  `;

  const NotFound = styled.div`
    height: 52.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      height: 50%;
    }

    p {
      width: 10%;
      height: 10%;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding-top: 2em;
    }
  `;
  return (
    <ProjectContainer>
      {project ? (
        <>
          <BackPageP>
            <Link to="/">Home</Link>
            <span> - </span>
            <p>{project.name}</p>
          </BackPageP>
          <Project>
            <ProjectTittle>{project.name}</ProjectTittle>
            {project.photosGallery ? (
              <CarouselPhotos photosGallery={project.photosGallery || []} />
            ) : (
              <ProjectImg src={project.img} />
            )}

            <ProjectDetails>
              <ProjectTags>
                <p>Plataformas:</p>
                {project.tags.map((tag) => (
                  <Tag $name={tag}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ProjectTags>
                <p>Tecnologias utilizadas:</p>
                {project.techs.map((tag) => (
                  <Tag $name={tag}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectDetails>
            <ProjectLinks>
              <Buttons>
                <p>Deploy:</p>
                {project.deployLink ? (
                  <Link to={project.deployLink} target="_blank">
                    <button> Deploy</button>
                  </Link>
                ) : null}
              </Buttons>
              <Buttons>
                <p>Repositórios:</p>
                <div>
                  {project.repoBackEnd ? (
                    <Link to={project.repoBackEnd} target="_blank">
                      <button> Back-end</button>
                    </Link>
                  ) : null}
                  {project.repoFrontEnd ? (
                    <Link to={project.repoFrontEnd} target="_blank">
                      <button> Front-end</button>
                    </Link>
                  ) : null}
                </div>
              </Buttons>
            </ProjectLinks>
          </Project>
        </>
      ) : (
        <NotFound>
          <img src={notFound} />
          <p>
            Ops, tentamos procurar em todas as dimensões e não encontramos essa
            página :(
          </p>
        </NotFound>
      )}
    </ProjectContainer>
  );
}
