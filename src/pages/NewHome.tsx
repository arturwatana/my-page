import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/newLayout/NavBar/NavBar";
import visionaryImg from "../assets/undraw_visionary_technology_re_jfp7.svg";
import { ProjectProps, ProjectsRepository } from "../db/Project.repository";
import NewProjectCard from "../components/newLayout/NewProjectCard/NewProjectCard";
import { ColorsProps, ContentContext } from "../App";
import Footer from "../components/newLayout/Footer/Footer";
import About from "../components/newLayout/About/About";
import FilterButton from "../components/newLayout/FilterButton/FilterButton";
import ScrollToTopBtn from "../components/ScrollToTopBtn/ScrollToTopBtn";

const FirstSection = styled.section<{ $theme: string; $colors: ColorsProps }>`
  height: 100vh;
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.$theme === "dark"
      ? props.$colors.darkMode["bg-primary"]
      : props.$colors.lightMode["bg-primary"]};
  transition: background-color 0.5s ease;
  @media (max-width: 1010px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
  
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 25%;

    @media (max-width: 1000px) {
      gap: 1em;
    }
    @media (max-width: 600px) {
      height: 30%;
    }

    &.description {
      height: 100%;
      p {
        line-height: 40px;
        font-size: 30px;
        color: ${(props) =>
          props.$theme === "dark"
            ? props.$colors.darkMode["font-primary"]
            : props.$colors.lightMode["font-primary"]};
        @media (max-width: 2160px) {
          font-size: 28px;
          line-height: 36px;
        }
        @media (max-width: 1714px) {
          font-size: 25px;
          line-height: 32px;
        }
        @media (max-width: 1270px) {
          font-size: 22px;
          line-height: 28px;
        }
        @media (max-width: 600px) {
          font-size: 20px;
          line-height: 26px;
        }
      }
      @media (max-width: 2160px) {
        margin-top: 1em;
      }
    }
    @media (max-width: 1010px) {
      margin-top: 2em;
    }
    @media (max-width: 400px) {
      height: 40%;
    }

    h1,
    h2 {
      color: ${(props) =>
        props.$theme === "dark"
          ? props.$colors.darkMode["font-primary"]
          : props.$colors.lightMode["font-primary"]};
    }
    h1 {
      font-size: 60px;
      @media (max-width: 1714px) {
        font-size: 50px;
      }
      @media (max-width: 1270px) {
        font-size: 40px;
      }
      @media (max-width: 605px) {
        font-size: 35px;
      }
    }
    h2 {
      font-size: 37px;
    }
  }

  img {
    @media (max-width: 1580px) {
      width: 45%;
    }
    @media (max-width: 1400px) {
      width: 40%;
    }
    @media (max-width: 1010px) {
      width: 60%;
    }
  }
  &.green {
    background-color: green;
  }
  &.blue {
    background-color: blue;
  }
`;

const Wrapper = styled.div`
  div {
    &.centerContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  &.erase {
    animation: eraseBody 0.3s linear forwards;

    @keyframes eraseBody {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }

  &.render {
    animation: RenderBody 0.3s linear forwards;

    @keyframes RenderBody {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const ProjectsSection = styled.section<{
  $theme: string;
  $colors: ColorsProps;
}>`
  padding-bottom: 2em;
  background-color: ${(props) =>
    props.$theme === "dark"
      ? props.$colors.darkMode["bg-primary"]
      : props.$colors.lightMode["bg-primary"]};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$theme === "dark"
      ? props.$colors.darkMode["font-primary"]
      : props.$colors.lightMode["font-primary"]};
  transition: background-color 0.5s ease;

 
  }

  h1 {
    font-size: 40px;
  }

  div {
    &.cards {
      margin-top: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 70%;
      height: 100%;
      gap: 4em;
    }

    &.filterButtons {
      display: flex;
      gap: 2em;
      margin-top: 2em;

      @media (max-width: 1400px) {
        gap: 2em;
        width: 70%;
      }
      @media (max-width: 1400px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2em;
        width: 70%;
      }
    }
  }
`;

const Intro = styled.div`
  position: static;
  height: 100vh;
  width: 100%;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
  &.animation {
    animation: CloseIntro 2s forwards;

    @keyframes CloseIntro {
      0% {
        filter: blur(0);
        opacity: 1;
        height: 100vh;
      }
      100% {
        filter: blur(4px);
        height: 0vh;
        opacity: 0;
        display: none;
      }
    }
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 30%;
  z-index: 100;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    border: none;
    width: 10em;
    background-color: #222;
    border: 1px solid white;
    color: white;
    height: 2.5em;
    border-radius: 3em;
    font-size: 20px;
    opacity: 0;
    transform: scale(0);
    transition: 1s ease;

    &.visible {
      opacity: 1;
    }

    &.render {
      opacity: 1;
      transform: scale(1);
    }

    :hover {
      background-color: white;
      border: 1px solid #222;
      color: #222;
    }
  }
`;

const TextContainers = styled.div<{
  $textCompleted?: boolean;
  $text2Completed?: string;
}>`
  h1 {
    width: 100%;
    font-size: 45px;
    border-right: ${(props) =>
      props.$textCompleted ? "none" : "1px solid white"};
  }
  p {
    width: 100%;
    animation: typingBorderAnimation 1.5s infinite;
    padding-right: 0.2em;
    text-align: left;
    text-align: center;
    margin-top: 1em;
    font-size: 18px;
  }

  @keyframes typingBorderAnimation {
    from {
      box-shadow: 1px 0px 0px 0px white;
    }
    to {
      box-shadow: none;
    }
  }

  @media (max-width: 432px) {
    h1 {
      font-size: 32px;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 27px;
    }
  }
`;

const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FinalText = styled.p`
  margin-top: 2em;
  text-align: center;

  font-size: 25px;
  @media (max-width: 1100px) {
    font-size: 23px;
    height: 100%;
    width: 70%;
  }
  @media (max-width: 600px) {
    font-size: 21px;
  }
  @media (max-width: 400px) {
    font-size: 19px;
  }
`;

export default function NewHome() {
  const [redirectToProject, setRedirectToProject] = useState<any>({
    id: "",
    redirect: false,
  });
  const {
    theme,
    setTheme,
    colors,
    access,
    setAccess,
    closeIntro,
    setCloseIntro,
    backToHome,
  } = useContext(ContentContext);
  const [scrollTo, setScrollTo] = useState<string>("section-1");
  const navigate = useNavigate();
  const projectsRepository = new ProjectsRepository();
  const projects = projectsRepository.showAll().reverse();
  const [filterProjects, setFilterProjects] = useState<string>("Todos");
  const [projectsToShow, setProjectsToShow] = useState<ProjectProps[]>([]);
  const [scrollToTop, setScrollToTop] = useState<boolean>(false);

  useEffect(() => {
    if (redirectToProject) {
      eraseScreenBeforeRedirect();
    }
  }, [redirectToProject]);

  function renderFilteredProjects() {
    if (filterProjects === "Todos") {
      setProjectsToShow(projects);
      return;
    }
    setProjectsToShow([]);
    projects.map((project) => {
      if (project.techs.findIndex((tech) => tech === filterProjects) != -1) {
        setProjectsToShow((prev) => [...prev, project]);
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };

  useEffect(() => {
    renderFilteredProjects();
  }, [filterProjects]);

  function closeIntroContainer() {
    setAccess(true);
    setTimeout(() => {
      setCloseIntro(true);
    }, 2000);
  }

  function eraseScreenBeforeRedirect() {
    setTimeout(() => {
      navigate(`/${redirectToProject.id}`);
    }, 500);
  }
  const textToWrite = "Artur Watanabe";
  const textToWrite2 = "Desenvolvedor Full Stack";

  const [text, setText] = useState({
    text: "",
    completed: false,
  });
  const [text2, setText2] = useState({
    text: "",
    completed: false,
  });

  let letter = 0;

  useEffect(() => {
    const write = setInterval(() => {
      setText((prevText) => {
        const newText = textToWrite.slice(0, letter);
        if (prevText.text.length === textToWrite.length) {
          setText({
            text: prevText.text,
            completed: true,
          });
          clearInterval(write);
        }
        letter++;
        return {
          text: newText,
          completed: false,
        };
      });
    }, 100);

    return () => {
      clearInterval(write);
    };
  }, []);
  useEffect(() => {
    const write2 = setInterval(() => {
      if (text.text.length === textToWrite.length) {
        setText2((prevText) => {
          const newText = textToWrite2.slice(0, letter);
          if (prevText.text.length === textToWrite2.length) {
            setText2({
              text: prevText.text,
              completed: true,
            });
            clearInterval(write2);
          }
          letter++;
          return {
            text: newText,
            completed: false,
          };
        });
      }
    }, 100);

    return () => {
      clearInterval(write2);
    };
  }, [text]);

  function redirectUser() {
    const section = document.querySelector(`${scrollTo}`);
    section?.scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    redirectUser();
    setScrollTo("section-1");
  }, [scrollTo]);

  return (
    <>
      {!closeIntro ? (
        <Intro className={access ? "animation" : ""}>
          <IntroContainer>
            <div>
              <TextContainers $textCompleted={text.completed}>
                <h1>{text.text}</h1>
              </TextContainers>
              <TextContainers>
                <p>{text2.text}</p>
              </TextContainers>
            </div>

            <button
              onClick={closeIntroContainer}
              className={text2.completed ? "render" : ""}
            >
              Acessar
            </button>
          </IntroContainer>
        </Intro>
      ) : null}

      {access ? (
        <>
          <Wrapper
            className={`${
              redirectToProject.redirect ? "erase" : backToHome ? "render" : ""
            } `}
          >
            <NavBar
              setScrollTo={setScrollTo}
              setTheme={setTheme}
              textColor={
                theme === "light"
                  ? colors.lightMode["font-primary"]
                  : colors.darkMode["font-primary"]
              }
              bgColor={
                theme === "light"
                  ? colors.lightMode["bg-primary"]
                  : colors.darkMode["bg-primary"]
              }
            />
            {scrollToTop ? <ScrollToTopBtn theme={theme} /> : null}

            <div className="centerContainer">
              <FirstSection
                $theme={theme}
                className="section-1"
                $colors={colors}
              >
                <div className="content">
                  <div className="tittle">
                    <h1>Que ótimo ter voce aqui!</h1>
                  </div>
                  <div className="description">
                    <p>
                      Com este portfólio, pretendo passar tudo que aprendi
                      durante todo esse tempo.
                    </p>
                    <p>Espero que aproveite ao máximo!</p>
                  </div>
                </div>
                <img src={visionaryImg} alt="" />
              </FirstSection>
            </div>
            <DivCenter className="section-2">
              <About />
            </DivCenter>
            <ProjectsSection
              $theme={theme}
              className="section-3"
              $colors={colors}
            >
              <h1>Projetos:</h1>
              <div className="filterButtons">
                <FilterButton
                  theme={theme}
                  setFilterProjects={setFilterProjects}
                  filterProjects={filterProjects}
                />
              </div>
              <div className="cards">
                {projectsToShow.map((project) => (
                  <NewProjectCard
                    key={project.id}
                    theme={theme === "light" ? "light" : "dark"}
                    colors={colors}
                    project={project}
                    setRedirectToProject={setRedirectToProject}
                  />
                ))}
              </div>

              <FinalText>
                Gostaria de ver mais? Entre em contato que terei o prazer de
                compartilhar.
              </FinalText>
            </ProjectsSection>
            <Footer />
          </Wrapper>
        </>
      ) : null}
    </>
  );
}
