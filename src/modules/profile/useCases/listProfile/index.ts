import { ProfileRepository } from '../../repositories/implementations/ProfileRepository';
import { ListProfileController } from './ListProfileController';
import { ListProfileUseCase } from './ListProfileUseCase';

const profileRepository = ProfileRepository.getInstance();

const listProfileUseCase = new ListProfileUseCase(profileRepository);

const listProfileController = new ListProfileController(listProfileUseCase);

export { listProfileController };
