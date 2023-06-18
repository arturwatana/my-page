import styled from "styled-components";

type TagProps = {
  name: string;
  width: string;
  height: string;
  theme: string;
  children: React.ReactNode;
};

export default function Tag({ name, width, height, theme }: TagProps) {
  const Tag = styled.div<{ $name?: string }>`
    height: ${height};
    width: ${width};
    border-radius: 2em;
    padding: 1em;
    color: ${theme === "dark" ? "#fff" : "#222"};
    background-color: ${() => {
      switch (name) {
        case "Mobile":
          return theme === "light" ? "#FFD1D9" : "#990019";
        case "Desktop":
          return theme === "light" ? "#C5B6E2" : "#392B6F";
        case "API":
          return theme === "light" ? "#A9A9A9" : "#4D4D4D";
        case "Node.js":
          return theme === "light" ? "#C0FFC0" : "#036300";
        case "React.js":
          return theme === "light" ? "#B4E5FE" : "#0047B2";
        case "Vite":
          return theme === "light" ? "#C1C9EF" : "#1A1F50";
        case "CSS":
          return theme === "light" ? "#82C2FF" : "#000E3C";
        case "TypeScript":
          return theme === "light" ? "#73c2da" : "#44b0d1";
        case "Express":
          return theme === "light" ? "#A5F2A5" : "#2B6B2B";
        case "PostgreSQL":
          return theme === "light" ? "#F098D1" : "#600940";
        case "TypeORM":
          return theme === "light" ? "#F2D281" : "#66460F";
        case "JWT":
          return theme === "light" ? "#F18F3B" : "#633400";
        case "AWS":
          return theme === "light" ? "#FFC000" : "#7F5000";
        case "MongoDB":
          return theme === "light" ? "#B3F38E" : "#2F5700";
        case "Mongoose":
          return theme === "light" ? "#9AE25C" : "#2A4900";
        case "HTML":
          return theme === "light" ? "#FFC000" : "#7F5000";
        case "Vanilla JS":
          return theme === "light" ? "#FFFDA7" : "#A18D00";
        case "Axios":
          return theme === "light" ? "#FDBE5C" : "#8C5300";
        case "Docker":
          return theme === "light" ? "#A9E4D7" : "#23574B";
        case "Prisma":
          return theme === "light" ? "#9B85B6" : "#401057";
        case "Swagger":
          return theme === "light" ? "#89E689" : "#006400";
        case "Vitest":
          return theme === "light" ? "#A7D877" : "#3D6218";
        case "TailWind CSS":
          return theme === "light" ? "#78C4D4" : "#005F6B";
        default:
          return "";
      }
    }};

    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <Tag>{name}</Tag>;
}
