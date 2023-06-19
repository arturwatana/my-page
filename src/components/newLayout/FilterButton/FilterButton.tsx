import styled from "styled-components";

const Button = styled.button<{ $theme: string }>`
  width: 9em;
  height: 2em;

  border: none;
  border-radius: 1em;
  font-size: 15px;
  background-color: ${(props) => (props.$theme === "light" ? "#222" : "#fff")};
  color: ${(props) => (props.$theme === "light" ? "#fff" : "#222")};
  cursor: pointer;
`;

type FilterButtonProps = {
  theme: string;
  setFilterProjects: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterButtons({
  theme,
  setFilterProjects,
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
        >
          {tech}
        </Button>
      ))}
    </>
  );
}
