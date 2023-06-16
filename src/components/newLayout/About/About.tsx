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
`;

const AboutDescription = styled.div<{ $theme: string; $colors: ColorsProps }>`
  width: 50%;
  height: 65%;
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
    font-size: 32px;
  }
  h3 {
    font-size: 32px;
    font-weight: normal;
  }
  div {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;

    &.buttons {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      flex-direction: row;
    }
  }
`;

const AboutImg = styled.div<{ $theme: string; $colors: ColorsProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  img {
    border-radius: 4em;
  }
`;
export default function About() {
  const { theme, colors } = useContext(ContentContext);

  return (
    <Section>
      <AboutDescription $theme={theme} $colors={colors} data-aos="fade-up">
        <h1>Olá, me chamo Artur Watanabe</h1>
        <div>
          <h2>
            Desde sempre, tive interesse pela programação e decidi explorar esse
            mundo em 2021. Tenho me dedicado cada vez mais em aprimorar meus
            projetos e acompanhar as novas tecnologias disponíveis.
          </h2>
          <h3>
            Atuo principalmente com React.js, Node.js, TypeScript, Docker,
            PostgreSQL, MongoDB e Figma.
          </h3>
        </div>
        <div className="buttons">
          <SocialBtn btnColor="#0072B1" name="Linkedin">
            <BsLinkedin className="linkedin" />
          </SocialBtn>
          <SocialBtn btnColor="#171515" name="Github">
            <VscGithub className="github" />
          </SocialBtn>
        </div>
      </AboutDescription>
      <AboutImg $colors={colors} $theme={theme} data-aos="fade-left">
        <img src={me}></img>
      </AboutImg>
    </Section>
  );
}
