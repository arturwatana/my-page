import styled from "styled-components";
import Container from "../components/layout/Container/Container";
import ContentContainer from "../components/layout/ContentContainer/ContentContainer";
import Technologies from "../components/Technologies/Technologies";
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer";
import me from "../assets/mebw.png";

export default function Home() {
  const Tittle = styled.h1`
    font-size: 42px;
    width: 100%;
    color: #455a64;

    @media (max-width: 1430px) {
      text-align: center;
    }
    @media (max-width: 400px) {
      margin-bottom: 1em;
    }
  `;
  const About = styled.p`
    color: #455a64;
    font-size: 25px;
    margin: 0;
    width: 100%;

    @media (max-width: 1430px) {
      :first-child {
        margin-top: 2em;
      }
    }

    @media (max-width: 630px) {
      :first-child {
        margin-top: 0;
      }
    }
  `;

  const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 3em;
    @media (max-width: 1430px) {
      padding-left: 1em;
      height: 20em;
      margin-top: 2em;
      margin-left: 0;
      text-align: left;
      line-height: 2.3em;
    }
    @media (max-width: 730px) {
      height: 25em;
    }
    @media (max-width: 630px) {
      height: 35em;
    }
  `;

  const Img = styled.img`
    border-radius: 2em;
    @media (max-width: 1430px) {
      height: 20em;
      object-fit: contain;
    }
  `;
  return (
    <>
      <Container>
        <ContentContainer
          height="519px"
          width="1400px"
          padding="5em"
          fade="fade-up"
          margin="0 0 10em 0"
        >
          <Img src={me}></Img>
          <AboutMe id="aboutMe">
            <Tittle>Olá,</Tittle>
            <About>
              Eu sou Artur Watanabe, um desenvolvedor full-stack apaixonado por
              games e tecnologia.
            </About>
            <About>
              Desde sempre, tive interesse pela programação e decidi explorar
              esse mundo em 2021. Tenho me dedicado cada vez mais para aprimorar
              minhas habilidades e acompanhar as novas tecnologias disponíveis.
            </About>
          </AboutMe>
        </ContentContainer>
        <ContentContainer
          height="419px"
          width="989px"
          fade="fade-up"
          margin="0 0 3em 0"
        >
          <Technologies />
        </ContentContainer>

        <ProjectsContainer />
      </Container>
    </>
  );
}
