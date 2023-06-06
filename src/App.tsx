import "./App.css";
import styled from "styled-components";
import NavBar from "./components/layout/NavBar/NavBar";
import ContentContainer from "./components/layout/ContentContainer/ContentContainer";
import Container from "./components/layout/Container/Container";
import "typeface-roboto";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/layout/Footer/Footer";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import me from "./assets/mebw.png";
import "aos/dist/aos.css";

function App() {
  const Tittle = styled.h1`
    font-size: 42px;
    color: #0c0d0c;
  `;
  const About = styled.p<{ $name?: boolean }>`
    color: #ffffff;
    font-size: 25px;
    margin: ${(props) => (props.$name ? "1em 0 0.5em 0" : "0")};
    line-height: 1.3em;
    color: #0c0d0c;
  `;

  const Body = styled.body`
    background-color: #eff1ef;
    font-family: "Roboto";
  `;

  const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3em;

    @media (max-width: 1430px) {
      text-align: center;
      margin-top: 1em;
    }
  `;

  const Img = styled.img`
    height: 20em;
    border-radius: 2em;
    object-fit: contain;
  `;
  return (
    <Body>
      <NavBar />
      <Container>
        <ContentContainer
          height="519px"
          width="1400px"
          padding="5em"
          fade="fade-up"
          margin="0 0 10em 0"
        >
          <Img src={me}></Img>
          <AboutMe>
            <Tittle>Olá,</Tittle>
            <About $name>
              Eu sou Artur Watanabe, um desenvolvedor full-stack apaixonado por
              games e tecnologia.{" "}
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
      <Footer />
    </Body>
  );
}

export default App;
