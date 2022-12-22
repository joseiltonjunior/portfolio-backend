import { ExperienceModel } from '../model/Experience';

interface ICreateExperienceDTO {
  name: string;
  office: string;
  activities: string;
  technologies: string;
  time: Date;
}

class ExperiencesRepository {
  private experiences: ExperienceModel[];

  constructor() {
    this.experiences = [];
  }

  create({
    name,
    office,
    activities,
    technologies,
    time,
  }: ICreateExperienceDTO) {
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

  findyByName(name: string, office: string): ExperienceModel {
    const experience = this.experiences.find(
      experience => experience.name === name && experience.office === office,
    );
    return experience;
  }
}

export { ExperiencesRepository };
