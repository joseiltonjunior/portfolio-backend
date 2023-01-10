import { ExperienceModel } from '../../model/Experience';
import {
  ICreateExperienceDTO,
  IEditExperienceDTO,
  IExperiencesRepository,
} from '../IExperiencesRepository';

class ExperiencesRepository implements IExperiencesRepository {
  private Experiences: ExperienceModel[];

  private static INSTANCE: ExperiencesRepository;

  private constructor() {
    this.Experiences = [];
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

    this.Experiences.push(experience);
  }

  list(): ExperienceModel[] {
    return this.Experiences;
  }

  edit({
    name,
    activities,
    id,
    office,
    technologies,
    time,
  }: IEditExperienceDTO): void {
    this.Experiences.map(experience => {
      if (experience.id === id) {
        experience.name = name;
        experience.activities = activities;
        experience.office = office;
        experience.technologies = technologies;
        experience.time = time;
      }

      return;
    });
  }

  findByName(name: string, office: string): ExperienceModel {
    const experience = this.Experiences.find(
      experience => experience.name === name && experience.office === office,
    );
    return experience;
  }

  findById(id: string): ExperienceModel {
    const experience = this.Experiences.find(
      experience => experience.id === id,
    );
    return experience;
  }

  delete(id: string): void {
    const remove = this.Experiences.find(experience => experience.id === id);
    const index = this.Experiences.indexOf(remove, 1);

    this.Experiences.splice(index, 1);
  }
}

export { ExperiencesRepository };
