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
