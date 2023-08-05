import "./App.css";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import NewHome from "./pages/NewHome";
import { createContext, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import styled from "styled-components";

export type myContextProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  access: boolean;
  setAccess: React.Dispatch<React.SetStateAction<boolean>>;
  colors: ColorsProps;
  closeIntro: boolean;
  setCloseIntro: React.Dispatch<React.SetStateAction<boolean>>;
  backToHome: boolean;
  setBackToHome: React.Dispatch<React.SetStateAction<boolean>>;
  setColors: React.Dispatch<
    React.SetStateAction<{
      lightMode: {
        "bg-primary": string;
        "font-primary": string;
      };
      darkMode: {
        "bg-primary": string;
        "font-primary": string;
      };
    }>
  >;
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
  setColors: () => {},
  setTheme: () => {},
  closeIntro: false,
  setCloseIntro: () => {},
  access: false,
  setAccess: () => {},
  backToHome: false,
  setBackToHome: () => {},
});

const Body = styled.div<{ $theme: string; $colors: ColorsProps }>`
  background-color: ${(props) =>
    props.$theme === "dark"
      ? props.$colors.darkMode["bg-primary"]
      : props.$colors.lightMode["bg-primary"]};
  height: 100%;
  width: 100%;
  transition: background-color 0.5s ease;
  }
`;
function App() {
  const [closeIntro, setCloseIntro] = useState<boolean>(false);
  const [access, setAccess] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("dark");
  const [backToHome, setBackToHome] = useState<boolean>(false);
  const [colors, setColors] = useState({
    lightMode: {
      "bg-primary": "#EDEDED",
      "font-primary": "#222",
    },
    darkMode: {
      "bg-primary": "#222",
      "font-primary": "#fff",
    },
  });

  const contextValues = {
    theme,
    setTheme,
    access,
    setAccess,
    closeIntro,
    setCloseIntro,
    colors,
    setColors,
    backToHome,
    setBackToHome,
  };

  return (
    <ContentContext.Provider value={contextValues}>
      <Analytics />
      <Body $colors={colors} $theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/:id" element={<Project />} />
          </Routes>
        </Router>
      </Body>
    </ContentContext.Provider>
  );
}

export default App;
