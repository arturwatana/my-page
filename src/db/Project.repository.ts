import schedule from "../assets/Schedule/Main1920x1080.png";
import scheduleMobile from "../assets/Schedule/Mobile.png";
import gamerBook from "../assets/GamrBook/Main1920x1080.png";
import todolist from "../assets/todolist.png";
import { IProjectRepository } from "./Project.repository.interface";
import spotifyLogin from "../assets/SpotifyClone/Login.png";
import spotifyMain from "../assets/SpotifyClone/Main1920x10808.png";
import webchat from "../assets/webchat/main.png";
import webchatimg from "../assets/webchat/chat.png";
import finances4uMain from "../assets/finances4u/main.png";
import finances4uMain1 from "../assets/finances4u/main1.png";
import finances4uTransactions from "../assets/finances4u/transactions.png";
import finances4uLogin from "../assets/finances4u/login.png";
import finances4uAccount from "../assets/finances4u/account.png";
import financesModal from "../assets/finances4u/modal.png";
import finances4uMainMobile from "../assets/finances4u/mob-PhotoRoom.png-PhotoRoom.png";
import currencyQueryMain from "../assets/CurrencyQuery/main.png";
import currencyQuerySearches from "../assets/CurrencyQuery/MySearches.png";
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
        "NoSQL",
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
        "SQL",
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
      name: "Schedule React",
      description:
        "Este projeto foi uma oportunidade para aprimorar minhas habilidades em React. Ao desenvolver a aplicação, explorei o conceito de Single-Page Application (SPA), criando uma interface interativa e responsiva para os usuários. Utilizei React.js, CSS e Vite para construir o front-end, enquanto o back-end foi implementado com Node.js, Express e PostgreSQL. A aplicação também conta com uma versão mobile para oferecer uma experiência otimizada em dispositivos móveis",
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
        "SQL",
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
    {
      id: "5",
      name: "WebChat",
      description:
        "Aprimorei minhas habilidades em React e adquiri experiência prática com a biblioteca Socket.io neste projeto. O WebChat é uma aplicação de chat em tempo real desenvolvida com as tecnologias Next.js, Tailwind CSS, Express e Socket.io. Ele permite uma comunicação instantânea entre os usuários, proporcionando uma experiência de chat fluida e interativa.",
      shortDescription:
        "Desenvolvido com Next.js, Tailwind CSS, Express e Socket.io, o WebChat é um chat em tempo real que proporciona comunicação instantânea entre usuários.",
      techs: [
        "React.js",
        "Next.js",
        "TailWind CSS",
        "Node.js",
        "TypeScript",
        "Express",
        "Socket.io",
      ],
      img: webchat,
      photosGallery: [webchat, webchatimg],
      tags: ["Desktop"],
      repoFrontEnd: "https://github.com/arturwatana/webchat",
      repoBackEnd: "https://github.com/arturwatana/webchat-backend",
    },

    {
      id: "6",
      name: "Finances4u",
      description:
        "Desenvolvido com React.js, Vite, Chakra UI, NestJS, Prisma,  PostgreSQL e JWT, este projeto foi impulsionado pelo meu estudo em UI/UX, resultando em uma aplicação intuitiva e visualmente atraente. O React.js proporcionou uma estrutura sólida, o Vite otimizou o desempenho, o Chakra UI aprimorou a aparência, o NestJS ofereceu uma API escalável, o PostgreSQL garantiu o armazenamento de dados confiável, e o JWT proporcionou a autenticação segura dos usuários.",
      shortDescription:
        "Desenvolvi uma aplicação de gestão financeira utilizando tecnologias modernas como React.js, Vite, Chakra UI, NestJS, PostgreSQL e JWT. Destaquei meu estudo em UI/UX para criar uma interface intuitiva e agradável aos usuários.",
      techs: [
        "React.js",
        "Vite",
        "Chakra.ui",
        "Node.js",
        "TypeScript",
        "Nest.js",
        "PostgreSQL",
        "SQL",
        "Prisma",
      ],
      img: finances4uMain,
      photosGallery: [
        finances4uMain1,
        finances4uLogin,
        finances4uTransactions,
        financesModal,
        finances4uAccount,
        finances4uMainMobile,
      ],
      tags: ["Desktop", "Mobile", "API"],
      deployLink: "https://finances4u.vercel.app/",
      repoFrontEnd: "https://github.com/arturwatana/finances4u",
      repoBackEnd: "https://github.com/arturwatana/finances4u-backend",
    },
    {
      id: "7",
      name: "Currencies query",
      description:
        "Currency Query é um aplicativo projetado para consulta de valores de diversas moedas, como EUR, USD e GBP. As tecnologias empregadas nesse projeto incluem Next.js 13 para a base da aplicação, Tailwind CSS para o estilo, GraphQL com Apollo Client e Apollo Server para integração de dados, TypeScript para segurança no código, JWT e bcrypt para autenticação, MongoDB para o armazenamento de dados e Node.js para a execução do ambiente. API integrada para consulta dos valores: https://economia.awesomeapi.com.br/json/last/",
      shortDescription:
        "Currency Query é um aplicativo de consulta de valores de moedas, utilizando tecnologias como Next.js 13, Tailwind CSS, GraphQL com Apollo Client e Apollo Server, TypeScript, JWT, bcrypt, MongoDB e Node.js. ",
      techs: [
        "React.js",
        "Next.js",
        "TailWind CSS",
        "Node.js",
        "TypeScript",
        "GraphQL",
        "Apollo Client",
        "Apollo Server",
        "MongoDB",
        "Mongoose",
        "NoSQL",
      ],
      img: currencyQueryMain,
      photosGallery: [currencyQueryMain, currencyQuerySearches],
      tags: ["Desktop", "API"],
      repoFrontEnd: "https://github.com/arturwatana/currency-front",
      repoBackEnd: "https://github.com/arturwatana/currency-graphql",
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
