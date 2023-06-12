import "./App.css";
import "typeface-roboto";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NewHome from "./pages/NewHome";

function App() {
  return (
    <Router>
      {/* <Body> */}
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Project />} />
        <Route path="/newhome" element={<NewHome />} />
      </Routes>
      {/* <Footer /> */}
      {/* </Body> */}
    </Router>
  );
}

export default App;
