import { IExperiencesRepository } from '../../repositories/IExperiencesRepository';

interface IRequest {
  id: string;
}

class DeleteExperienceUseCase {
  constructor(private ExperiencesRepository: IExperiencesRepository) {}

  execute({ id }: IRequest) {
    this.ExperiencesRepository.delete(id);
  }
}

export { DeleteExperienceUseCase };
