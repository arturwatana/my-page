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
  height: 30em;
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

  @media (max-width: 1000px) {
    height: 100%;
  }
  div {
    &.imgBlock {
      height: 50%;
      width: 100%;
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
  }
`;

const ProjectDetails = styled.div<{ $theme: string; $colors: ColorsProps }>`
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em 2em;
  color: ${(props) =>
    props.$theme === "light"
      ? props.$colors.lightMode["font-primary"]
      : props.$colors.darkMode["font-primary"]};

  @media (max-width: 1000px) {
    height: 100%;
    gap: 1em;
  }

  div {
    &.details {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      height: 40%;
    }
    &.projectTags {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      gap: 0.5em;
    }
  }
  h1 {
    width: 100%;
    @media (max-width: 500px) {
      font-size: 30px;
    }
    @media (max-width: 350px) {
      font-size: 26px;
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  font-weight: lighter;
  text-align: left;
  line-height: 24px;
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
      <ProjectDetails $colors={colors} $theme={theme}>
        <h1>{project.name}</h1>
        <div className="projectTags">
          {project.tags.map((tag) => (
            <Tag theme={theme} name={tag} height="1.5em" width="4em" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
        <ProjectDescription>{project.shortDescription}</ProjectDescription>
      </ProjectDetails>
    </CardContainer>
  );
}
