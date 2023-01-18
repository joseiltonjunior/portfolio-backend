import { IProfileRepository } from '../../repositories/IProfileRepository';

class DeleteProfileUseCase {
  constructor(private ProfileRepository: IProfileRepository) {}

  execute() {
    this.ProfileRepository.delete();
  }
}

export { DeleteProfileUseCase };
