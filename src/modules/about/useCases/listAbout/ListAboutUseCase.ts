import { IAboutRepository } from '../../repositories/IAboutRepository';
import { AboutModel } from '../../model/About';

class ListAboutUseCase {
  constructor(private AboutRepository: IAboutRepository) {}

  execute(): AboutModel {
    const About = this.AboutRepository.list();

    return About;
  }
}

export { ListAboutUseCase };
