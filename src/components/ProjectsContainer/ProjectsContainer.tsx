import styled from "styled-components";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import schedule from "../../assets/Schedule.png";
import gamerBook from "../../assets/gamerBook.png";
import todolist from "../../assets/todolist.png";
import { useEffect } from "react";

import AOS from "aos";

export default function ProjectsContainer() {
  const ProjectContainer = styled.div`
    border: 2px solid #222;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 2em;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    padding: 3em 0 3em 0;
    margin-bottom: 2em;
    margin-top: 2em;

    @media (max-width: 1180px) {
      padding: 3em 1em 3em 1em;
    }
  `;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <ProjectContainer data-aos="fade-up">
      <ProjectInfo
        name="Schedule React"
        description="Aplicacao construida com o intuito de gerenciar tarefas. Front-end construido com React e css. Back-end construido com Node.JS utilizando Express e uma instancia de PostgreSQL aberta na AWS. Possui também versão mobile.
        "
        techs="React.js, Vite, CSS, Node.js, TypeScript, Express, PostgreSQL, TypeORM, JWT, AWS"
        img={schedule}
        repoFrontend="https://github.com/arturwatana/schedule-react"
        repoBackend="https://github.com/arturwatana/schedule-backend"
        deployLink="https://schedule-react-nu.vercel.app/"
      />
      <ProjectInfo
        name="Gamer Book"
        description="Esta API é um projeto para criar um sistema de cadastro de jogadores e jogos. As funcionalidades implementadas incluem cadastrar jogadores, verificação de e-mail único, buscar jogadores pelo e-mail e excluir jogadores. Além disso, também foi implementado o cadastro de jogos, não sendo possível cadastrar um jogo com o mesmo nome e podendo adicionar ou remover um jogo de um jogador.  "
        techs="Node.js, Express, TypeScript, Docker, PostgreSQL, Prisma, Swagger, Vitest"
        img={gamerBook}
        row="row-reverse"
        deployLink="https://gamer-book.vercel.app/docs/"
        repoBackend="https://github.com/arturwatana/gamerBook"
      />
      <ProjectInfo
        name="To Do List"
        description="Esta é uma aplicação de lista de tarefas com sistema de registro e login. Front-end construido com HTML, CSS e JS. Back-end construido com Node.js e TypeScript utilizando MongoDB."
        techs="Node.js, TypeScript, Express, JWT, MongoDB, Mongoose, HTML, CSS, JavaScript, Axios"
        img={todolist}
        deployLink="https://to-do-list-artur.vercel.app/"
        repoFrontend="https://github.com/arturwatana/to-do-list"
        repoBackend="https://github.com/arturwatana/to-do-list"
      />
    </ProjectContainer>
  );
}
