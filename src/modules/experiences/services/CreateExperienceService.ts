import { IExperiencesRepository } from '../repositories/IExperiencesRepository';

interface IRequest {
  name: string;
  office: string;
  activities: string;
  technologies: string;
  time: Date;
}

class CreateExperienceService {
  constructor(private experiencesRepository: IExperiencesRepository) {}

  execute({ name, office, activities, technologies, time }: IRequest) {
    const experienceAlreadyExists = this.experiencesRepository.findByName(
      name,
      office,
    );

    if (experienceAlreadyExists) {
      throw new Error('Experience already exists!');
    }

    this.experiencesRepository.create({
      name,
      office,
      activities,
      technologies,
      time,
    });
  }
}

export { CreateExperienceService };
