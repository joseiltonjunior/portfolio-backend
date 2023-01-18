import { ProfileRepository } from '../../repositories/implementations/ProfileRepository';
import { EditProfileController } from './EditProfileController';
import { EditProfileUseCase } from './EditProfileUseCase';

const profileRepository = ProfileRepository.getInstance();

const editProfileUseCase = new EditProfileUseCase(profileRepository);

const editProfileController = new EditProfileController(editProfileUseCase);

export { editProfileController };
