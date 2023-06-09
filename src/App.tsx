import "./App.css";
import "typeface-roboto";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NavBar from "./components/layout/NavBar/NavBar";
import Body from "./components/layout/Container/Body";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <Router>
      <Body>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Project />} />
        </Routes>
        <Footer />
      </Body>
    </Router>
  );
}

export default App;
