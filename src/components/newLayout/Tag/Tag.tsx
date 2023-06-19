import styled from "styled-components";

type TagProps = {
  name: string;
  width: string;
  height: string;
  theme: string;
  children: React.ReactNode;
};

const TagTech = styled.div<{
  $name: string;
  $width: string;
  $heigth: string;
  $theme: string;
}>`
  height: ${(props) => props.$heigth};
  width: ${(props) => props.$width};
  border-radius: 2em;
  padding: 1em;
  color: ${(props) => (props.$theme === "dark" ? "#fff" : "#222")};
  background-color: ${(props) => {
    switch (props.$name) {
      case "Mobile":
        return props.$theme === "light" ? "#FFD1D9" : "#990019";
      case "Desktop":
        return props.$theme === "light" ? "#C5B6E2" : "#392B6F";
      case "API":
        return props.$theme === "light" ? "#A9A9A9" : "#4D4D4D";
      case "Node.js":
        return props.$theme === "light" ? "#C0FFC0" : "#036300";
      case "React.js":
        return props.$theme === "light" ? "#B4E5FE" : "#0047B2";
      case "Vite":
        return props.$theme === "light" ? "#C1C9EF" : "#1A1F50";
      case "CSS":
        return props.$theme === "light" ? "#82C2FF" : "#000E3C";
      case "TypeScript":
        return props.$theme === "light" ? "#73c2da" : "#44b0d1";
      case "Express":
        return props.$theme === "light" ? "#A5F2A5" : "#2B6B2B";
      case "PostgreSQL":
        return props.$theme === "light" ? "#F098D1" : "#600940";
      case "TypeORM":
        return props.$theme === "light" ? "#F2D281" : "#66460F";
      case "JWT":
        return props.$theme === "light" ? "#F18F3B" : "#633400";
      case "AWS":
        return props.$theme === "light" ? "#FFC000" : "#7F5000";
      case "MongoDB":
        return props.$theme === "light" ? "#B3F38E" : "#2F5700";
      case "Mongoose":
        return props.$theme === "light" ? "#9AE25C" : "#2A4900";
      case "HTML":
        return props.$theme === "light" ? "#FFC000" : "#7F5000";
      case "Vanilla JS":
        return props.$theme === "light" ? "#FFFDA7" : "#A18D00";
      case "Axios":
        return props.$theme === "light" ? "#FDBE5C" : "#8C5300";
      case "Docker":
        return props.$theme === "light" ? "#A9E4D7" : "#23574B";
      case "Prisma":
        return props.$theme === "light" ? "#9B85B6" : "#401057";
      case "Swagger":
        return props.$theme === "light" ? "#89E689" : "#006400";
      case "Vitest":
        return props.$theme === "light" ? "#A7D877" : "#3D6218";
      case "TailWind CSS":
        return props.$theme === "light" ? "#78C4D4" : "#005F6B";
      default:
        return "";
    }
  }};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Tag({ name, width, height, theme }: TagProps) {
  return (
    <TagTech $heigth={height} $name={name} $theme={theme} $width={width}>
      {name}
    </TagTech>
  );
}
