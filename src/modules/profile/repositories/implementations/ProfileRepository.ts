import { ProfileModel } from '../../model/Profile';
import { ICreateProfileDTO, IProfileRepository } from '../IProfileRepository';

class ProfileRepository implements IProfileRepository {
  private profile: ProfileModel;

  private static INSTANCE: ProfileRepository;

  private constructor() {
    this.profile = { links: [], name: '', office: '', pic: '' };
  }

  public static getInstance(): ProfileRepository {
    if (!ProfileRepository.INSTANCE) {
      ProfileRepository.INSTANCE = new ProfileRepository();
    }

    return ProfileRepository.INSTANCE;
  }

  create({ links, name, office, pic }: ICreateProfileDTO): void {
    const profile = new ProfileModel();

    Object.assign(profile, { links, name, office, pic });

    this.profile = profile;
  }

  edit({ links, name, office, pic }: ICreateProfileDTO): void {
    Object.assign(this.profile, { links, name, office, pic });

    this.profile = this.profile;
  }

  list(): ProfileModel {
    return this.profile;
  }

  delete(): void {
    this.profile = { links: [], name: '', office: '', pic: '' };
  }
}

export { ProfileRepository };
