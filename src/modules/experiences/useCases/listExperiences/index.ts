import { ExperiencesRepository } from '../../repositories/ExperiencesRepository';
import { ListExperiencesController } from './ListExperiencesController';
import { ListExperiencesUseCase } from './ListExperiencesUseCase';

const experiencesRepository = ExperiencesRepository.getInstance();

const listExperienceUseCase = new ListExperiencesUseCase(experiencesRepository);

const listExperienceController = new ListExperiencesController(
  listExperienceUseCase,
);

export { listExperienceController };
