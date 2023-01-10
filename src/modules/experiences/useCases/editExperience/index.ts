import { ExperiencesRepository } from '../../repositories/implementations/ExperiencesRepository';
import { EditExperienceController } from './EditExperienceController';
import { EditExperienceUseCase } from './EditExperienceUseCase';

const experienceRepository = ExperiencesRepository.getInstance();

const editExperienceUseCase = new EditExperienceUseCase(experienceRepository);

const editExperienceController = new EditExperienceController(
  editExperienceUseCase,
);

export { editExperienceController };
