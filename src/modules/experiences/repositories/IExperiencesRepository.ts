import { ExperienceModel } from '../model/Experience';

export interface ICreateExperienceDTO {
  name: string;
  office: string;
  activities: string;
  technologies: string;
  time: Date;
}

interface IExperiencesRepository {
  findByName(name: string, office: string): ExperienceModel;
  list(): ExperienceModel[];
  create({
    name,
    office,
    activities,
    technologies,
    time,
  }: ICreateExperienceDTO): void;
}

export { IExperiencesRepository };
