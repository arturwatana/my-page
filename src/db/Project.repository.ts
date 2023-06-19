import schedule from "../assets/Schedule/Main1920x1080.png";
import scheduleMobile from "../assets/Schedule/Mobile.png";
import gamerBook from "../assets/GamrBook/Main1920x1080.png";
import todolist from "../assets/todolist.png";
import { IProjectRepository } from "./Project.repository.interface";
import spotifyLogin from "../assets/SpotifyClone/Login.png";
import spotifyMain from "../assets/SpotifyClone/Main1920x10808.png";

export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
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
      shortDescription:
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
      shortDescription:
        "Esta API é um projeto que visa desenvolver um sistema de cadastro de jogadores e jogos, utilizando as seguintes tecnologias e conceitos: Node.js, Express, TypeScript, PostgreSQL, Neon (PostgreSQL), Prisma ORM, Swagger, Vercel, Vitest e SOLID.",
      description:
        "Este projeto de API marca minha primeira incursão na criação de uma API do início ao fim. Consiste em uma API para criação de um sistema de cadastro de jogadores e jogos. Utilizando Node.js, Express e TypeScript como base, a API permite cadastrar jogadores, cadastrar jogos, buscar jogadores pelo e-mail, excluir jogadores e adicionar/remover jogos de jogadores. O banco de dados PostgreSQL é utilizado para armazenar as informações. Além disso, foram aplicados conceitos do SOLID e tecnologias como Prisma ORM para manipulação de dados, Swagger para documentação da API, Vercel para hospedagem e Vitest para testes automatizados.",
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
      photosGallery: [gamerBook],
      tags: ["API"],
      repoBackEnd: "https://github.com/arturwatana/gamerBook",
      deployLink: "https://gamer-book.vercel.app/docs/",
    },
    {
      id: "3",
      name: "To Do List",
      shortDescription:
        "Esta é uma aplicação de lista de tarefas com sistema de registro e login. Front-end construido com HTML, CSS e JS. Back-end construido com Node.js e TypeScript utilizando MongoDB.",
      description:
        "No frontend, decidi construí-lo utilizando apenas HTML, CSS e JavaScript puro (Vanilla JS). Me desafiei a desenvolver a interface visual e implementar a lógica de interação usando apenas essas tecnologias básicas da web. Aprendi muito sobre manipulação do DOM, estilização de elementos e criação de funcionalidades interativas com JavaScript. No backend, optei por utilizar Node.js e TypeScript para construir o servidor da aplicação. Com TypeScript, pude trazer a tipagem estática ao meu código, o que me ajudou a evitar erros e tornar o desenvolvimento mais seguro. Ao utilizar a autenticação via JWT, pude aprender sobre os processos de geração, validação e utilização dos tokens JWT, bem como sua importância na proteção das rotas e informações sensíveis do aplicativo.",
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
      photosGallery: [todolist],

      tags: ["Desktop", "API"],
      repoFrontEnd: "https://github.com/arturwatana/to-do-list",
      repoBackEnd: "https://github.com/arturwatana/to-do-list",
      deployLink: "https://to-do-list-artur.vercel.app/",
    },
    {
      id: "4",
      name: "Spotify Clone",
      shortDescription:
        "Esta é uma aplicação para clonar a UI do Spotify utilizando React e TailWind CSS.",
      description:
        "Neste projeto, decidi utilizar o Tailwind CSS para criar uma aplicação que clona a interface do Spotify. O objetivo foi aprender e explorar os recursos e funcionalidades oferecidos pelo Tailwind CSS, combinados com o framework React.",
      techs: ["React.js", "TypeScript", "TailWind CSS", "Vite"],
      img: spotifyMain,
      photosGallery: [spotifyMain, spotifyLogin],
      tags: ["Desktop"],
      repoFrontEnd: "https://github.com/arturwatana/Spotify-clone",
      deployLink: "https://spotify-clone-kappa-taupe.vercel.app/",
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
