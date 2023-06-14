import "./App.css";
import "typeface-roboto";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import NewHome from "./pages/NewHome";
import { createContext, useState } from "react";

export type myContextProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  access: boolean;
  setAccess: React.Dispatch<React.SetStateAction<boolean>>;
  colors: ColorsProps;
  closeIntro: boolean;
  setCloseIntro: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ColorsProps = {
  lightMode: {
    "bg-primary": string;
    "font-primary": string;
  };
  darkMode: {
    "bg-primary": string;
    "font-primary": string;
  };
};

const colors = {
  lightMode: {
    "bg-primary": "#EDEDED",
    "font-primary": "#222",
  },
  darkMode: {
    "bg-primary": "#222",
    "font-primary": "#fff",
  },
};

export const ContentContext = createContext<myContextProps>({
  theme: "dark",
  colors,
  setTheme: () => {},
  closeIntro: false,
  setCloseIntro: () => {},
  access: false,
  setAccess: () => {},
});
function App() {
  const [closeIntro, setCloseIntro] = useState<boolean>(false);
  const [access, setAccess] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("dark");

  const contextValues = {
    theme,
    setTheme,
    access,
    setAccess,
    closeIntro,
    setCloseIntro,
    colors,
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
        {/* </Body> */}
      </Router>
    </ContentContext.Provider>
  );
}

export default App;
