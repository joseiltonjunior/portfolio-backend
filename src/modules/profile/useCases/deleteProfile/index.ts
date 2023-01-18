import { ProfileRepository } from '../../repositories/implementations/ProfileRepository';
import { DeleteProfileController } from './DeleteProfileController';
import { DeleteProfileUseCase } from './DeleteProfileUseCase';

const profileRepository = ProfileRepository.getInstance();

const deleteProfileUseCase = new DeleteProfileUseCase(profileRepository);

const deleteProfileController = new DeleteProfileController(
  deleteProfileUseCase,
);

export { deleteProfileController };
