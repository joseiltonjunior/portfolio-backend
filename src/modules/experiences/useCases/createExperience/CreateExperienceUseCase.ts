import { IExperiencesRepository } from '../../repositories/IExperiencesRepository';
import { ICreateExperienceDTO } from '../../repositories/IExperiencesRepository';

class CreateExperienceUseCase {
  constructor(private experiencesRepository: IExperiencesRepository) {}

  execute({
    name,
    office,
    activities,
    technologies,
    time,
  }: ICreateExperienceDTO) {
    this.experiencesRepository.create({
      name,
      office,
      activities,
      technologies,
      time,
    });
  }
}

export { CreateExperienceUseCase };
