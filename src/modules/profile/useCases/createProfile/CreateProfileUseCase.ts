import { IProfileRepository } from '../../repositories/IProfileRepository';
import { ICreateProfileDTO } from '../../repositories/IProfileRepository';

class CreateProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  execute({ links, name, office, pic }: ICreateProfileDTO) {
    this.profileRepository.create({ links, name, office, pic });
  }
}

export { CreateProfileUseCase };
