import "./App.css";
import "typeface-roboto";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import NewHome from "./pages/NewHome";

function App() {
  return (
    <Router>
      {/* <Body> */}
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/:id" element={<Project />} />
      </Routes>
      {/* <Footer /> */}
      {/* </Body> */}
    </Router>
  );
}

export default App;
