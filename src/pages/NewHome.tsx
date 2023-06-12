import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/newLayout/NavBar/NavBar";
import visionaryImg from "../assets/undraw_visionary_technology_re_jfp7.svg";
import { ProjectsRepository } from "../db/Project.repository";
import NewProjectCard from "../components/newLayout/NewProjectCard/NewProjectCard";

export default function NewHome() {
  const [text, setText] = useState({
    text: "",
    completed: false,
  });
  const [text2, setText2] = useState({
    text: "",
    completed: false,
  });
  const [access, setAccess] = useState<boolean>(false);
  const [closeIntro, setCloseIntro] = useState<boolean>(false);
  const [redirectToProject, setRedirectToProject] = useState<boolean>(false);
  const [lightMode, setLightMode] = useState<boolean>(false);
  const navigate = useNavigate();
  const projectsRepository = new ProjectsRepository();
  const projects = projectsRepository.showAll();
  const textToWrite = "Olá, sou Artur Watanabe";
  const textToWrite2 = "Desenvolvedor Full Stack.";

  const colors = {
    lightMode: {
      "bg-primary": "#EDEDED",
      "font-primary": "#222",
    },
    darkMode: {
      "bg-primary": "#222",
      "font-primary": "#fff",
    },
  };
  const Intro = styled.div`
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
        from {
          filter: blur(0);
          height: 100vh;
        }
        to {
          height: 0vh;
          filter: blur(4px);
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
      transition: 0.5s;
      font-size: 20px;
      opacity: 0;
      animation: PopUpBtn 2s forwards;

      &.visible {
        opacity: 1;
      }

      :hover {
        background-color: white;
        border: 1px solid #222;
        color: #222;
      }

      @keyframes PopUpBtn {
        from {
          opacity: 0;
          transform: scale(0);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  `;

  const TextContainers = styled.div`
    h1 {
      font-size: 40px;
      border-right: ${text.completed ? "none" : "1px solid white"};
    }
    p {
      font-size: 30px;
      animation: typingBorderAnimation 1.5s infinite;
      padding-right: 0.2em;
      border-right: ${text2.completed ? "none" : "1px solid white"};
      text-align: left;
      text-align: center;
      margin-top: 2em;
      font-size: 20px;
    }

    @keyframes typingBorderAnimation {
      from {
        box-shadow: 1px 0px 0px 0px white;
      }
      to {
        box-shadow: none;
      }
    }
  `;

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
    }, 150);

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

  const Body = styled.body`
    background-color: ${lightMode
      ? colors.lightMode["bg-primary"]
      : colors.darkMode["bg-primary"]};
    height: 100%;
    width: 100%;
    transition: 1s;
  `;

  const FirstSection = styled.section`
    height: 100vh;
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    background-color: ${lightMode
      ? colors.lightMode["bg-primary"]
      : colors.darkMode["bg-primary"]};

    div {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 25%;

      &.description {
        p {
          font-size: 32px;
          color: ${lightMode
            ? colors.lightMode["font-primary"]
            : colors.darkMode["font-primary"]};
        }
      }

      h1,
      h2 {
        color: ${lightMode
          ? colors.lightMode["font-primary"]
          : colors.darkMode["font-primary"]};
      }
      h1 {
        font-size: 60px;
      }
      h2 {
        font-size: 37px;
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
      animation: eraseBody 0.5s linear forwards;

      @keyframes eraseBody {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }
  `;
  const ProjectsSection = styled.section`
    background-color: ${lightMode
      ? colors.lightMode["bg-primary"]
      : colors.darkMode["bg-primary"]};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5em 0 5em;

    h1 {
      font-size: 36px;
      color: ${lightMode
        ? colors.lightMode["font-primary"]
        : colors.darkMode["font-primary"]};
    }

    div {
      &.cards {
        margin-top: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
        height: 100%;
        gap: 2em;
      }
    }
  `;

  useEffect(() => {
    if (redirectToProject) {
      eraseScreenBeforeRedirect();
    }
  }, [redirectToProject]);
  function closeIntroContainer() {
    setAccess(true);
    setTimeout(() => {
      setCloseIntro(true);
    }, 2000);
  }

  function eraseScreenBeforeRedirect() {
    setTimeout(() => {
      console.log("2s");
      navigate("/1");
    }, 2000);
  }

  return (
    <Body>
      {!closeIntro ? (
        <Intro className={access ? "animation" : ""}>
          <IntroContainer>
            <div>
              <TextContainers>
                <h1>{text.text}</h1>
              </TextContainers>
              <TextContainers>
                <p>{text2.text}</p>
              </TextContainers>
            </div>
            {text2.completed ? (
              <button onClick={closeIntroContainer}>Acessar</button>
            ) : null}
          </IntroContainer>
        </Intro>
      ) : null}

      {access ? (
        <>
          <Wrapper className={redirectToProject ? "erase" : ""}>
            <NavBar
              setLightMode={setLightMode}
              textColor={
                lightMode
                  ? colors.lightMode["font-primary"]
                  : colors.darkMode["font-primary"]
              }
              bgColor={
                lightMode
                  ? colors.lightMode["bg-primary"]
                  : colors.darkMode["bg-primary"]
              }
            />
            <div className="centerContainer">
              <FirstSection className="section-1">
                <div className="content">
                  <div className="tittle">
                    <h1>Seja bem vindo!</h1>
                  </div>
                  <div className="description">
                    <p>
                      Com este portfólio, pretendo passar tudo que aprendi
                      durante todo esse tempo.
                    </p>
                    <p>Espero que aproveite ao máximo!</p>
                  </div>
                </div>
                <img
                  src={visionaryImg}
                  onClick={eraseScreenBeforeRedirect}
                  alt=""
                />
              </FirstSection>
            </div>
            <ProjectsSection className="section-2">
              <h1>Projetos:</h1>
              <div className="cards">
                {projects.map((project) => (
                  <NewProjectCard
                    theme={lightMode ? "light" : "dark"}
                    colors={colors}
                    project={project}
                    setRedirectToProject={setRedirectToProject}
                  />
                ))}
              </div>
            </ProjectsSection>
          </Wrapper>
        </>
      ) : null}
    </Body>
  );
}
