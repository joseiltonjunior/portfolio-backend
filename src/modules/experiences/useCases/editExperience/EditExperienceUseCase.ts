import { IExperiencesRepository } from '../../repositories/IExperiencesRepository';

interface IRequest {
  name: string;
  office: string;
  activities: string;
  technologies: string;
  time: Date;
  id: string;
}

class EditExperienceUseCase {
  constructor(private ExperiencesRepository: IExperiencesRepository) {}

  execute({ id, name, office, activities, technologies, time }: IRequest) {
    const experienceAlreadyExists = this.ExperiencesRepository.findById(id);

    const experienceNameUsed = this.ExperiencesRepository.findByName(
      name,
      office,
    );

    if (!experienceAlreadyExists) {
      throw new Error('experience not exists.');
    }

    if (experienceNameUsed && experienceNameUsed.id !== id) {
      throw new Error('experience name is already in use.');
    }

    this.ExperiencesRepository.edit({
      id,
      name,
      activities,
      office,
      technologies,
      time,
    });
  }
}

export { EditExperienceUseCase };
