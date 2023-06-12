import styled from "styled-components";
import { ProjectProps } from "../../../db/Project.repository";
import Tag from "../Tag/Tag";

type ColorsProps = {
  lightMode: {
    "bg-primary": string;
    "font-primary": string;
  };
  darkMode: {
    "bg-primary": string;
    "font-primary": string;
  };
};

type ProjectCardProps = {
  project: ProjectProps;
  setRedirectToProject: React.Dispatch<React.SetStateAction<any>>;
  colors: ColorsProps;
  theme: string;
};

export default function NewProjectCard({
  project,
  setRedirectToProject,
  colors,
  theme,
}: ProjectCardProps) {
  const CardContainer = styled.div`
    display: flex;
    height: 32em;
    width: 50em;
    flex-direction: column;
    border: 1px solid
      ${theme === "light"
        ? colors.lightMode["font-primary"]
        : colors.darkMode["font-primary"]};
    transition: 0.5s;
    border-radius: 1em;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
    }
    div {
      &.imgBlock {
        width: 100%;
        height: 50%;
        overflow: hidden;
        transition: 0.5s;
        :hover {
          height: 100%;
        }
        img {
          width: 100%;
          object-fit: contain;
          border-radius: 1em 1em 0 0;
        }
      }

      &.projectDetails {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1em 2em;
        justify-content: space-evenly;
        color: ${theme === "light"
          ? colors.lightMode["font-primary"]
          : colors.darkMode["font-primary"]};

        p {
          font-size: 18px;
          text-align: left;
        }
      }

      &.projectTags {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 0.5em;
      }
    }
  `;

  return (
    <CardContainer
      onClick={() =>
        setRedirectToProject({
          id: project.id,
          redirect: true,
        })
      }
    >
      <div className="imgBlock">
        <img src={project.img} />
      </div>
      <div className="projectDetails">
        <h1>{project.name}</h1>
        <div className="projectTags">
          {project.tags.map((tag) => (
            <Tag name={tag} height="1.5em" width="4em" />
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </CardContainer>
  );
}
