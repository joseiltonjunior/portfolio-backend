import { IAboutRepository } from '../../repositories/IAboutRepository';

class DeleteAboutUseCase {
  constructor(private AboutRepository: IAboutRepository) {}

  execute() {
    this.AboutRepository.delete();
  }
}

export { DeleteAboutUseCase };
