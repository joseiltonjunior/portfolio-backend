import {
  IAboutRepository,
  ICreateAboutDTO,
} from '../../repositories/IAboutRepository';

class EditAboutUseCase {
  constructor(private AboutRepository: IAboutRepository) {}

  execute({ description }: ICreateAboutDTO) {
    this.AboutRepository.edit({
      description,
    });
  }
}

export { EditAboutUseCase };
