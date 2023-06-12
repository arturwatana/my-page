import styled from "styled-components";

type TagProps = {
  name: string;
  width: string;
  height: string;
};

export default function Tag({ name, width, height }: TagProps) {
  const Tag = styled.div<{ $name?: string }>`
    height: ${height};
    width: ${width};
    border-radius: 2em;
    color: #fff;
    background-color: ${() => {
      switch (name) {
        case "Mobile":
          return "#f8050521";
        case "Desktop":
          return "#cc92ee21";
        case "API":
          return "#706f6f21";
        case "Node.js":
          return "#2af51720";
        case "React.js":
          return "#1bc7e61f";
        case "Vite":
          return "#1f51da1f";
        case "CSS":
          return "#0252ff1f";
        case "TypeScript":
          return "#46bfe41f";
        case "Express":
          return "#28eb161f";
        case "PostgreSQL":
          return "#aa1d6a1f";
        case "TypeORM":
          return "#c9a8161f";
        case "JWT":
          return "#c43eb21f";
        case "AWS":
          return "#df7d0d1f";
        case "MongoDB":
          return "#4fc9161f";
        case "Mongoose":
          return "#3bb6373b";
        case "HTML":
          return "#df7d0d1f";
        case "Vanilla JS":
          return "#fffd82c0";
        case "Axios":
          return "#fabc741f";
        case "Docker":
          return "#2ecde21f";
        case "Prisma":
          return "#70176944";
        case "Swagger":
          return "#5299521f";
        case "Vitest":
          return "#6ecf481f";
        case "TailWind CSS":
          return "#0fafe01f";
      }
    }};

    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <Tag>{name}</Tag>;
}
