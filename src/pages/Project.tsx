import { Link, useParams } from "react-router-dom";
import { ProjectsRepository } from "../db/Project.repository";
import styled from "styled-components";
import notFound from "../assets/Lovepik_com-401803274-404-error-code.png";
import CarouselPhotos from "../components/CarouselPhotos/CarouselPhotos";
import { TbSquareRoundedLetterX } from "react-icons/tb";
import Tag from "../components/newLayout/Tag/Tag";
import { ColorsProps, ContentContext } from "../App";
import { useContext } from "react";

type MatchParams = {
  id: string;
};

const ProjectContainer = styled.div<{ $theme: string; $colors: ColorsProps }>`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) =>
    props.$theme === "dark"
      ? props.$colors.darkMode["bg-primary"]
      : props.$colors.lightMode["bg-primary"]};
  transition: background-color 0.5s ease;
  animation: colorTransition 0.5s linear;

  @keyframes colorTransition {
    from {
      background-color: ${(props) =>
        props.$theme === "dark"
          ? props.$colors.darkMode["bg-primary"]
          : props.$colors.lightMode["bg-primary"]};
    }

    to {
      background-color: ${(props) =>
        props.$theme === "dark"
          ? props.$colors.darkMode["bg-primary"]
          : props.$colors.lightMode["bg-primary"]};
    }
  }
`;

const BackPageP = styled.h1`
  display: flex;
  font-size: 20px;
  position: fixed;
  z-index: 90;
  top: 5%;
  left: 10%;
  gap: 10px;
  a {
    font-size: 50px;
    color: #ff9a9a;
    text-decoration: none;
    transition: 0.4s;

    :hover {
      color: red;
    }
  }
`;

const ProjectDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 3em;
  align-items: center;
  color: #fff;
`;

const ProjectTittle = styled.h1`
  font-size: 40px;
  width: 100%;
  margin-bottom: 1em;
`;

const ProjectImg = styled.img`
  display: none;
  width: 100%;
  opacity: 0;
`;

const ProjectDetails = styled.div`
  width: 100%;
  padding-left: 5em;
  padding-bottom: 5em;
  animation: RenderDetails 2s linear forwards;

  @keyframes RenderDetails {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      display: block;
      opacity: 0;
    }
    75% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
  }
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
  animation: hideLinks 2s linear forwards;
  opacity: 0;
  display: none;

  @keyframes hideLinks {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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

const Wrapper = styled.div`
  opacity: 1;
  height: 100%;
`;

const WrapperCarousel = styled.div`
  width: 100%;
  overflow: hidden;
  transition: 0.5s;
  animation: RenderWrapper 2s linear forwards;
  z-index: 80;
  @keyframes RenderWrapper {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  img {
  }
`;

export default function Project() {
  const projectsRepository = new ProjectsRepository();
  const props = useParams<MatchParams>();
  const project = projectsRepository.findById(props.id || "");
  const { theme, setTheme, colors } = useContext(ContentContext);

  return (
    <ProjectContainer $theme={theme} $colors={colors}>
      <Wrapper>
        {project ? (
          <>
            <BackPageP>
              <Link to="/">
                <TbSquareRoundedLetterX />
              </Link>
            </BackPageP>
            <ProjectDiv>
              {project.photosGallery ? (
                <WrapperCarousel>
                  <CarouselPhotos
                    photosGallery={project.photosGallery}
                    mainImg={project.img}
                  />
                </WrapperCarousel>
              ) : (
                <ProjectImg src={project.img} />
              )}

              <ProjectDetails>
                <ProjectTittle>{project.name}</ProjectTittle>
                <ProjectTags>
                  <p>Plataformas:</p>
                  {project.tags.map((tag) => (
                    <Tag
                      height="2.5em"
                      width="8em"
                      theme={theme ? theme : "dark"}
                      name={tag}
                    >
                      {tag}
                    </Tag>
                  ))}
                </ProjectTags>
                <ProjectTags>
                  <p>Tecnologias utilizadas:</p>
                  {project.techs.map((tag) => (
                    <Tag
                      height="2.5em"
                      width="8em"
                      theme={theme ? theme : "dark"}
                      name={tag}
                    >
                      {tag}
                    </Tag>
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
            </ProjectDiv>
          </>
        ) : (
          <NotFound>
            <img src={notFound} />
            <p>
              Ops, tentamos procurar em todas as dimensões e não encontramos
              essa página :(
            </p>
          </NotFound>
        )}
      </Wrapper>
    </ProjectContainer>
  );
}
