import "./App.css";
import styled from "styled-components";
import NavBar from "./components/layout/NavBar/NavBar";
import ContentContainer from "./components/layout/ContentContainer/ContentContainer";
import Container from "./components/layout/Container/Container";
import "typeface-roboto";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/layout/Footer/Footer";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import me from "./assets/me.png";
import "aos/dist/aos.css";

function App() {
  const Tittle = styled.h1`
    font-size: 42px;
    color: white;
  `;
  const About = styled.p<{ $name?: boolean }>`
    color: #ffffff;
    font-size: 25px;
    margin: ${(props) => (props.$name ? "1em 0 0.5em 0" : "0")};
    line-height: 1.3em;
  `;

  const Body = styled.body`
    background-color: #ededed;
    font-family: "Roboto";
  `;

  const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3em;
    margin-top: 4em;

    h1 {
      margin-bottom: 1em;
    }
  `;

  const Img = styled.img`
    height: 20em;
  `;

  return (
    <Body>
      <NavBar />
      <Container>
        <ContentContainer
          height="519px"
          width="1200px"
          padding="5em"
          fade="fade-up"
        >
          <Img src={me}></Img>
          <AboutMe>
            <Tittle>Olá,</Tittle>
            <About $name>Sou Artur Watanabe, desenvolvedor full-stack. </About>
            <About>
              Desde sempre apaixonado por games e tecnologia, fui conhecer o
              mundo da programacao em 2021. Me dedicando cada vez mais em me
              aprofundar e utilizar novas tecnologias.
            </About>
          </AboutMe>
        </ContentContainer>
        <Technologies />
        <ProjectsContainer />
      </Container>
      <Footer />
    </Body>
  );
}

export default App;
