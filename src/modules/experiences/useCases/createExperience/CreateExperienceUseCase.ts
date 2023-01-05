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

export { CreateExperienceUseCase };
