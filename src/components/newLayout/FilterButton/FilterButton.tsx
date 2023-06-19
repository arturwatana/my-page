import styled from "styled-components";

const Button = styled.button<{ $theme: string }>`
  width: 9em;
  height: 2em;

  border: none;
  border-radius: 1em;
  font-size: 15px;
  background-color: ${(props) => (props.$theme === "dark" ? "#222" : "#fff")};
  color: ${(props) => (props.$theme === "dark" ? "#fff" : "#222")};
  border: 1px solid ${(props) => (props.$theme === "dark" ? "#fff" : "#222")};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: ${(props) => (props.$theme === "dark" ? "#fff" : "#222")};
    color: ${(props) => (props.$theme === "dark" ? "#222" : "#fff")};
    border: 1px solid ${(props) => (props.$theme === "dark" ? "#222" : "#fff")};
  }

  &.active {
    background-color: ${(props) => (props.$theme === "dark" ? "#fff" : "#222")};
    color: ${(props) => (props.$theme === "dark" ? "#222" : "#fff")};
    border: 1px solid ${(props) => (props.$theme === "dark" ? "#222" : "#fff")};
  }
  @media (max-width: 440px) {
    width: 7em;
  }
`;

type FilterButtonProps = {
  theme: string;
  setFilterProjects: React.Dispatch<React.SetStateAction<string>>;
  filterProjects: string;
};

export default function FilterButtons({
  theme,
  setFilterProjects,
  filterProjects,
}: FilterButtonProps) {
  const technologies = [
    "Todos",
    "React.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
  ];

  return (
    <>
      {technologies.map((tech) => (
        <Button
          $theme={theme}
          key={tech}
          onClick={() => setFilterProjects(tech)}
          className={filterProjects === tech ? "active" : ""}
        >
          {tech}
        </Button>
      ))}
    </>
  );
}
