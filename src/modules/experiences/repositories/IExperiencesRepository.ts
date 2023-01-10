import { ExperienceModel } from '../model/Experience';

export interface ICreateExperienceDTO {
  name: string;
  office: string;
  activities: string;
  technologies: string;
  time: Date;
}

export interface IEditExperienceDTO {
  name: string;
  office: string;
  activities: string;
  technologies: string;
  time: Date;
  id: string;
}

interface IExperiencesRepository {
  findByName(name: string, office: string): ExperienceModel;
  findById(id: string): ExperienceModel;
  list(): ExperienceModel[];
  create({
    name,
    office,
    activities,
    technologies,
    time,
  }: ICreateExperienceDTO): void;
  delete(id: string): void;
  edit({
    name,
    activities,
    id,
    office,
    technologies,
    time,
  }: IEditExperienceDTO): void;
}

export { IExperiencesRepository };
