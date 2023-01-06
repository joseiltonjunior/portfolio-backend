import { IAboutRepository } from '../../repositories/IAboutRepository';
import { ICreateAboutDTO } from '../../repositories/IAboutRepository';

class CreateAboutUseCase {
  constructor(private aboutRepository: IAboutRepository) {}

  execute({ description }: ICreateAboutDTO) {
    this.aboutRepository.create({
      description,
    });
  }
}

export { CreateAboutUseCase };
