import { ExperiencesRepository } from '../../repositories/implementations/ExperiencesRepository';
import { CreateExperienceController } from './CreateExperienceController';
import { CreateExperienceUseCase } from './CreateExperienceUseCase';

const experienceRepository = ExperiencesRepository.getInstance();

const createExperienceUseCase = new CreateExperienceUseCase(
  experienceRepository,
);

const createExperienceController = new CreateExperienceController(
  createExperienceUseCase,
);

export { createExperienceController };
