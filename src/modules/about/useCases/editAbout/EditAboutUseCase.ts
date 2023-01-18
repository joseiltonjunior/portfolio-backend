import { IAboutRepository } from '../../repositories/IAboutRepository';

interface IRequest {
  description: string;
}

class EditAboutUseCase {
  constructor(private AboutRepository: IAboutRepository) {}

  execute({ description }: IRequest) {
    this.AboutRepository.edit({
      description,
    });
  }
}

export { EditAboutUseCase };
