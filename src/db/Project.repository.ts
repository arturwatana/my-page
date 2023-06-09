import schedule from "../assets/Schedule.png";
import scheduleMobile from "../assets/Schedule/Mobile.png";
import gamerBook from "../assets/gamerBook.png";
import todolist from "../assets/todolist.png";
import { IProjectRepository } from "./Project.repository.interface";

export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  techs: string[];
  img: any;
  photosGallery?: any[];
  repoFrontEnd?: string;
  repoBackEnd?: string;
  deployLink?: string;
};

export class ProjectsRepository implements IProjectRepository {
  items: ProjectProps[] = [
    {
      id: "1",
      name: "Schedule React",
      description:
        "Aplicacao construida com o intuito de gerenciar tarefas. Front-end construido com React e css. Back-end construido com Node.JS utilizando Express e uma instancia de PostgreSQL aberta na AWS. Possui também versão mobile.",
      techs: [
        "React.js",
        "Vite",
        "CSS",
        "Node.js",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "TypeORM",
        "JWT",
        "AWS",
      ],
      img: schedule,
      photosGallery: [schedule, scheduleMobile],
      tags: ["Desktop", "Mobile", "API"],
      repoFrontEnd: "https://github.com/arturwatana/schedule-react",
      repoBackEnd: "https://github.com/arturwatana/schedule-backend",
      deployLink: "https://schedule-react-nu.vercel.app/",
    },
    {
      id: "2",
      name: "Gamer Book",
      description:
        "Esta API é um projeto para criar um sistema de cadastro de jogadores e jogos. As funcionalidades implementadas incluem cadastrar jogadores, verificação de e-mail único, buscar jogadores pelo e-mail e excluir jogadores. Além disso, também foi implementado o cadastro de jogos, não sendo possível cadastrar um jogo com o mesmo nome e podendo adicionar ou remover um jogo de um jogador.",
      techs: [
        "Node.js",
        "Express",
        "TypeScript",
        "Docker",
        "PostgreSQL",
        "Prisma",
        "Swagger",
        "Vitest",
      ],
      img: gamerBook,
      tags: ["API"],
      repoBackEnd: "https://github.com/arturwatana/gamerBook",
      deployLink: "https://gamer-book.vercel.app/docs/",
    },
    {
      id: "3",
      name: "To Do List",
      description:
        "Esta é uma aplicação de lista de tarefas com sistema de registro e login. Front-end construido com HTML, CSS e JS. Back-end construido com Node.js e TypeScript utilizando MongoDB.",
      techs: [
        "Node.js",
        "TypeScript",
        "Express",
        "JWT",
        "MongoDB",
        "Mongoose",
        "HTML",
        "CSS",
        "Vanilla JS",
        "Axios",
      ],
      img: todolist,
      tags: ["Desktop", "API"],
      repoFrontEnd: "https://github.com/arturwatana/to-do-list",
      repoBackEnd: "https://github.com/arturwatana/to-do-list",
      deployLink: "https://to-do-list-artur.vercel.app/",
    },
  ];
  showAll(): ProjectProps[] {
    return this.items;
  }
  findById(id: string): ProjectProps | null {
    const project = this.items.find((project) => project.id === id);
    return project || null;
  }
}
