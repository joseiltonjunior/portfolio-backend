import { ExperienceModel } from '../model/Experience';

interface IExperiencesRepository {
  findByName(name: string, office: string): ExperienceModel;
  list(): ExperienceModel[];
  create(
    name: string,
    office: string,
    activities: string,
    technologies: string,
    time: string,
  ): string;
}

export { IExperiencesRepository };
