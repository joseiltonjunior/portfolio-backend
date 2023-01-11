import { ExperiencesRepository } from '../../repositories/implementations/ExperiencesRepository';
import { DeleteExperienceController } from './DeleteExperienceController';
import { DeleteExperienceUseCase } from './DeleteExperienceUseCase';

const experiencesRepository = ExperiencesRepository.getInstance();

const deleteExperienceUseCase = new DeleteExperienceUseCase(
  experiencesRepository,
);

const deleteExperienceController = new DeleteExperienceController(
  deleteExperienceUseCase,
);

export { deleteExperienceController };
