import { IExperiencesRepository } from '../../repositories/IExperiencesRepository';

interface IRequest {
  id: string;
}

class DeleteExperienceUseCase {
  constructor(private ExperiencesRepository: IExperiencesRepository) {}

  execute({ id }: IRequest) {
    const ExperienceAlreadyExists = this.ExperiencesRepository.findById(id);

    if (!ExperienceAlreadyExists) {
      throw new Error('Experience not exists.');
    }

    this.ExperiencesRepository.delete(id);
  }
}

export { DeleteExperienceUseCase };
