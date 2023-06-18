import styled from "styled-components";
import { ProjectProps } from "../../../db/Project.repository";
import Tag from "../Tag/Tag";
import { ColorsProps } from "../../../App";

type ProjectCardProps = {
  project: ProjectProps;
  setRedirectToProject: React.Dispatch<React.SetStateAction<any>>;
  colors: ColorsProps;
  theme: string;
};

const CardContainer = styled.div<{ $theme: string; $colors: ColorsProps }>`
  display: flex;
  height: 32em;
  width: 51.5em;
  flex-direction: column;
  box-shadow: 0.2em 0.2em 1em
    ${(props) =>
      props.$theme === "light"
        ? props.$colors.lightMode["font-primary"]
        : props.$colors.darkMode["font-primary"]};
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
      color: ${(props) =>
        props.$theme === "light"
          ? props.$colors.lightMode["font-primary"]
          : props.$colors.darkMode["font-primary"]};
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
export default function NewProjectCard({
  project,
  setRedirectToProject,
  colors,
  theme,
}: ProjectCardProps) {
  return (
    <CardContainer
      $colors={colors}
      $theme={theme}
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
            <Tag theme={theme} name={tag} height="1.5em" width="4em">
              {tag}
            </Tag>
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </CardContainer>
  );
}
