import {
  ICreateProfileDTO,
  IProfileRepository,
} from '../../repositories/IProfileRepository';

class EditProfileUseCase {
  constructor(private ProfileRepository: IProfileRepository) {}

  execute({ links, name, office, pic }: ICreateProfileDTO) {
    this.ProfileRepository.edit({ links, name, office, pic });
  }
}

export { EditProfileUseCase };
