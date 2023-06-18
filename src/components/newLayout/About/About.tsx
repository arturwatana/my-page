import styled from "styled-components";
import me from "../../../assets/mebw.png";
import { useContext } from "react";
import { ColorsProps, ContentContext } from "../../../App";
import SocialBtn from "../../layout/SocialBtn/SocialBtn";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

const Section = styled.section`
  height: 100vh;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5em;
  padding-bottom: 3em;
`;

const AboutDescription = styled.div<{ $theme: string; $colors: ColorsProps }>`
  width: 60%;
  height: 56%;
  display: flex;
  flex-direction: column;
  padding: 1em;
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
  h1 {
    font-size: 50px;
    width: 100%;
  }

  h2 {
    text-align: left;
    font-weight: normal;
    font-size: 28px;
  }
  h3 {
    font-size: 28px;
    font-weight: normal;
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
  width: 40%;
  transition: 0.5s;
  img {
    border-radius: 4em;
  }
  :hover {
    transform: scale(1.2);
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
            Desde sempre, tive interesse pela programação e decidi explorar esse
            mundo em 2021. Tenho me dedicado cada vez mais a aprimorar meus
            projetos e acompanhar as novas tecnologias disponíveis.
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
