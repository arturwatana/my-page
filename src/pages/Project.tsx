import { Link, useNavigate, useParams } from "react-router-dom";
import { ProjectsRepository } from "../db/Project.repository";
import styled from "styled-components";
import notFound from "../assets/Lovepik_com-401803274-404-error-code.png";
import CarouselPhotos from "../components/CarouselPhotos/CarouselPhotos";
import { TbSquareRoundedLetterX } from "react-icons/tb";
import Tag from "../components/newLayout/Tag/Tag";
import { ColorsProps, ContentContext } from "../App";
import { useContext, useState, useEffect } from "react";
import Footer from "../components/newLayout/Footer/Footer";

type MatchParams = {
  id: string;
};

const ProjectContainer = styled.div<{ $theme: string; $colors: ColorsProps }>`
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.$theme === "light"
      ? props.$colors.lightMode["bg-primary"]
      : props.$colors.darkMode["bg-primary"]};
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
  svg {
    font-size: 50px;
    color: #ff9a9a;
    text-decoration: none;
    transition: 0.4s;

    :hover {
      color: red;
    }
  }
`;

const ProjectDiv = styled.div<{ $theme: string; $colors: ColorsProps }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 3em;
  align-items: center;
  color: ${(props) =>
    props.$theme === "dark"
      ? props.$colors.darkMode["font-primary"]
      : props.$colors.lightMode["font-primary"]};
  overflow: hidden;
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
  width: 80%;
  padding-left: 5em;
  animation: RenderDetails 1s linear forwards;
  @media (max-width: 500px) {
    padding-left: 2em;
  }

  @keyframes RenderDetails {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      display: block;
      opacity: 0.5;
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

  @media (max-width: 910px) {
    flex-direction: column;
  }

  div {
    &.tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5em;

      @media (max-width: 910px) {
        width: 100%;
      }
    }
  }
  p {
    font-weight: bold;
    font-size: 18px;
    @media (max-width: 910px) {
      width: 100%;
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 20px;
  margin-top: 2em;
  width: 100%;
  font-size: 22px;
  font-weight: lighter;
`;

const ProjectLinks = styled.div<{ $theme: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;
  animation: ShowLinks 2s linear forwards;
  opacity: 0;
  padding-left: 5em;
  padding-bottom: 2em;
  width: 80%;
  @media (max-width: 500px) {
    padding-left: 2em;
  }
  @keyframes ShowLinks {
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

  button {
    border: none;
    border-radius: 1em;
    background-color: ${(props) =>
      props.$theme === "light" ? "#222" : "#fff"};
    color: ${(props) => (props.$theme === "light" ? "#fff" : "#222")};
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
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
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
  &.redirect {
    animation: redirectAnimation 0.3s linear forwards;
    @keyframes redirectAnimation {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;

const WrapperCarousel = styled.div`
  width: 100%;
  height: 30em;
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
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 955px) {
    height: 100%;
  }
`;

export default function Project() {
  const projectsRepository = new ProjectsRepository();
  const props = useParams<MatchParams>();
  const project = projectsRepository.findById(props.id || "");
  const { theme, colors, setBackToHome } = useContext(ContentContext);
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function redirectUser() {
    setRedirect(true);
    setTimeout(() => {
      setBackToHome(true);
      navigate("/");
    }, 500);
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <ProjectContainer $theme={theme} $colors={colors}>
      <Wrapper className={redirect ? "redirect" : ""}>
        {project ? (
          <>
            {!modalIsOpen ? (
              <BackPageP>
                <TbSquareRoundedLetterX onClick={redirectUser} />
              </BackPageP>
            ) : null}

            <ProjectDiv $theme={theme} $colors={colors}>
              {project.photosGallery ? (
                <WrapperCarousel>
                  <CarouselPhotos
                    photosGallery={project.photosGallery}
                    mainImg={project.img}
                    setModalIsOpen={setModalIsOpen}
                    modalIsOpen={modalIsOpen}
                  />
                </WrapperCarousel>
              ) : (
                <ProjectImg src={project.img} />
              )}

              <ProjectDetails>
                <ProjectTittle>{project.name}</ProjectTittle>
                <ProjectTags>
                  <p>Plataformas:</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <Tag
                        height="2.5em"
                        width="8em"
                        theme={theme ? theme : "dark"}
                        name={tag}
                        key={tag}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </ProjectTags>
                <ProjectTags>
                  <p>Tecnologias utilizadas:</p>
                  <div className="tags">
                    {project.techs.map((tag) => (
                      <Tag
                        height="2.5em"
                        width="8em"
                        theme={theme ? theme : "dark"}
                        name={tag}
                        key={tag}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </ProjectTags>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectDetails>
              <ProjectLinks $theme={theme}>
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
      <Footer />
    </ProjectContainer>
  );
}
