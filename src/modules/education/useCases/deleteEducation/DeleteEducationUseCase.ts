import { IEducationRepository } from '../../repositories/IEducationRepository';

interface IRequest {
  id: string;
}

class DeleteEducationUseCase {
  constructor(private EducationRepository: IEducationRepository) {}

  execute({ id }: IRequest) {
    this.EducationRepository.delete(id);
  }
}

export { DeleteEducationUseCase };
