import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Technologies() {
  const [techState, setTechState] = useState<string>("React.js");
  const [techProjects, setTechProjects] = useState<string[]>([]);
  const TechArea = styled.div`
    border-right: 1px solid #222;
    width: 40%;
    padding: 2em;

    @media (max-width: 708px) {
      padding: 0.5em;
    }
  `;

  const Projects = styled.div`
    width: 60%;
    padding: 2em;

    @media (max-width: 708px) {
      padding: 0.5em;
    }
  `;

  const Flex = styled.div`
    text-align: center;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  `;

  const Tittle = styled.h1`
    color: #455a64;
    font-size: 28px;
    @media (max-width: 501px) {
      font-size: 20px;
    }
  `;

  const Ul = styled.ul`
    margin-top: 2em;
    list-style: none;
  `;

  const TechLi = styled.li`
    font-size: 24px;
    margin-top: 0.7em;
    color: #455a64;

    transition: 0.5s;
    cursor: pointer;

    &:hover {
      color: #399fbf;
    }
    @media (max-width: 501px) {
      font-size: 20px;
    }
  `;

  const ProjectList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
  `;

  const ProjectLi = styled.li`
    color: #455a64;
    font-size: 22px;
    margin-top: 0.3em;

    @media (max-width: 501px) {
      font-size: 20px;
    }
  `;

  const projects = {
    "React.js": ["Schedule", "React clone page"],
    "Node.js": ["Schedule", "To-do list", "GamerBook", "Cats Resort"],
    PostgreSQL: ["Schedule", "GamerBook", "Cats Resort"],
    MongoDB: ["To-do-list"],
    Docker: ["Schedule", "GamerBook", "Cats Resort", "To-do-list"],
    AWS: ["Schedule"],
  };

  useEffect(() => {
    if (projects.hasOwnProperty(techState)) {
      setTechProjects(projects[techState as keyof typeof projects]);
    } else {
      setTechProjects(projects["React.js"]);
    }
  }, [techState]);

  return (
    <Flex id="technologies">
      <TechArea>
        <Tittle>Tecnologias</Tittle>
        <Ul>
          <TechLi
            onMouseEnter={(e: any) => {
              setTechState(e.target.innerText);
            }}
          >
            React.js
          </TechLi>
          <TechLi
            onMouseEnter={(e: any) => {
              setTechState(e.target.innerText);
            }}
          >
            Node.js
          </TechLi>
          <TechLi
            onMouseEnter={(e: any) => {
              setTechState(e.target.innerText);
            }}
          >
            PostgreSQL
          </TechLi>
          <TechLi
            onMouseEnter={(e: any) => {
              setTechState(e.target.innerText);
            }}
          >
            MongoDB
          </TechLi>
          <TechLi
            onMouseEnter={(e: any) => {
              setTechState(e.target.innerText);
            }}
          >
            Docker
          </TechLi>
          <TechLi
            onMouseEnter={(e: any) => {
              setTechState(e.target.innerText);
            }}
          >
            AWS
          </TechLi>
        </Ul>
      </TechArea>
      <Projects>
        <Tittle>Projetos utilizando {techState}: </Tittle>
        <ProjectList>
          {techProjects.map((techProject) => {
            return <ProjectLi key={techProject}>{techProject}</ProjectLi>;
          })}
        </ProjectList>
      </Projects>
    </Flex>
  );
}
