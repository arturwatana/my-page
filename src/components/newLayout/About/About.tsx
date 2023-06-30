import styled from "styled-components";
import me from "../../../assets/mebw.png";
import { useContext } from "react";
import { ColorsProps, ContentContext } from "../../../App";
import SocialBtn from "../SocialBtn/SocialBtn";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

const Section = styled.section`
  height: 100vh;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5em;
  padding-bottom: 3em;
  @media (max-width: 1345px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

const AboutDescription = styled.div<{ $theme: string; $colors: ColorsProps }>`
  width: 60%;
  display: flex;
  flex-direction: column;
  box-shadow: 0.2em 0.2em 1em
    ${(props) =>
      props.$theme === "light"
        ? props.$colors.lightMode["font-primary"]
        : props.$colors.darkMode["font-primary"]};
  border-radius: 2em;
  align-items: center;
  color: ${(props) =>
    props.$theme === "light"
      ? props.$colors.lightMode["font-primary"]
      : props.$colors.darkMode["font-primary"]};
  padding: 3em;
  @media (max-width: 2240px) {
    width: 50%;
  }
  @media (max-width: 1345px) {
    width: 100%;
  }
  @media (max-width: 650px) {
    padding: 3em 2em 3em 2em;
  }
  h1 {
    font-size: 50px;
    width: 100%;
    @media (max-width: 2230px) {
      font-size: 42px;
    }
    @media (max-width: 650px) {
      font-size: 32px;
    }
    @media (max-width: 450px) {
      font-size: 26px;
    }
  }

  h2 {
    text-align: left;
    font-weight: normal;
    font-size: 28px;
    @media (max-width: 2230px) {
      font-size: 26px;
    }
    @media (max-width: 980px) {
      font-size: 22px;
    }
    @media (max-width: 650px) {
      font-size: 18px;
    }
  }
  h3 {
    font-size: 28px;
    font-weight: normal;
    @media (max-width: 2230px) {
      font-size: 26px;
    }
    @media (max-width: 980px) {
      font-size: 22px;
    }
    @media (max-width: 650px) {
      font-size: 18px;
    }
  }
  div {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    gap: 2em;

    &.buttons {
      height: 20%;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;

      @media (max-width: 500px) {
        flex-direction: column;
      }

      a {
        text-decoration: none;
      }
    }
  }
`;

const AboutImg = styled.div<{ $theme: string; $colors: ColorsProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  transition: 0.5s;
  img {
    width: 100%;
    object-fit: contain;
    border-radius: 4em;
  }

  @media (max-width: 1340px) {
    width: 50%;
    transform: scale(1.3);
  }
  :hover {
    transform: scale(0.9);
  }
`;
export default function About() {
  const { theme, colors } = useContext(ContentContext);
  return (
    <Section>
      <AboutDescription $theme={theme} $colors={colors}>
        <h1>Olá, me chamo Artur Watanabe</h1>
        <div>
          <h2>
            Desde sempre, tive interesse pela tecnologia e decidi explorar esse
            mundo da programação em 2022. Tenho me dedicado cada vez mais a
            aprimorar meus projetos e acompanhar as novas tecnologias
            disponíveis.
          </h2>
          <h3>
            Atualmente, trabalho principalmente com React.js, Node.js,
            TypeScript, Docker, PostgreSQL, MongoDB e Figma.
          </h3>
        </div>
        <div className="buttons">
          <a
            href="https://www.linkedin.com/in/artur-watanabe-225020163/"
            target="_blank"
          >
            <SocialBtn btnColor="#0072B1" name="Linkedin">
              <BsLinkedin className="linkedin" />
            </SocialBtn>
          </a>
          <a href="https://www.github.com/arturwatana" target="_blank">
            <SocialBtn btnColor="#171515" name="Github">
              <VscGithub className="github" />
            </SocialBtn>
          </a>
        </div>
      </AboutDescription>
      <AboutImg $colors={colors} $theme={theme}>
        <img src={me}></img>
      </AboutImg>
    </Section>
  );
}
