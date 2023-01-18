import { ProfileRepository } from '../../repositories/implementations/ProfileRepository';
import { CreateProfileController } from './CreateProfileController';
import { CreateProfileUseCase } from './CreateProfileUseCase';

const profileRepository = ProfileRepository.getInstance();

const createProfileUseCase = new CreateProfileUseCase(profileRepository);

const createProfileController = new CreateProfileController(
  createProfileUseCase,
);

export { createProfileController };
