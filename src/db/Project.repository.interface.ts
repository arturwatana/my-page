import { ProjectProps } from "./Project.repository";

export interface IProjectRepository {
  showAll(): ProjectProps[];
  findById(id: string): ProjectProps | null;
}
