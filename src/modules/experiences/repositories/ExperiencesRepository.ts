import { ExperienceModel } from '../model/Experience';
import {
  ICreateExperienceDTO,
  IExperiencesRepository,
} from './IExperiencesRepository';

class ExperiencesRepository implements IExperiencesRepository {
  private experiences: ExperienceModel[];

  private static INSTANCE: ExperiencesRepository;

  private constructor() {
    this.experiences = [];
  }

  public static getInstance(): ExperiencesRepository {
    if (!ExperiencesRepository.INSTANCE) {
      ExperiencesRepository.INSTANCE = new ExperiencesRepository();
    }

    return ExperiencesRepository.INSTANCE;
  }

  create({
    name,
    office,
    activities,
    technologies,
    time,
  }: ICreateExperienceDTO): void {
    const experience = new ExperienceModel();

    Object.assign(experience, {
      name,
      office,
      activities,
      technologies,
      time,
    });

    this.experiences.push(experience);
  }

  list(): ExperienceModel[] {
    return this.experiences;
  }

  findByName(name: string, office: string): ExperienceModel {
    const experience = this.experiences.find(
      experience => experience.name === name && experience.office === office,
    );
    return experience;
  }
}

export { ExperiencesRepository };
