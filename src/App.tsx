import "./App.css";
import "typeface-roboto";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import NewHome from "./pages/NewHome";
import { createContext, useState } from "react";

export type myContextProps = {
  theme: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
  firstAccess?: boolean;
  setFirstAccess?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContentContext = createContext<myContextProps>({
  theme: "dark",
});
function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [firstAccess, setFirstAccess] = useState<boolean>(false);

  const contextValues = {
    theme,
    setTheme,
    firstAccess,
    setFirstAccess,
  };

  return (
    <ContentContext.Provider value={contextValues}>
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
    </ContentContext.Provider>
  );
}

export default App;
