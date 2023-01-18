import { IProfileRepository } from '../../repositories/IProfileRepository';
import { ProfileModel } from '../../model/Profile';

class ListProfileUseCase {
  constructor(private ProfileRepository: IProfileRepository) {}

  execute(): ProfileModel {
    const Profile = this.ProfileRepository.list();

    return Profile;
  }
}

export { ListProfileUseCase };
