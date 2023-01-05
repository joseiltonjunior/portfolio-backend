import { EducationRepository } from '../../repositories/implementations/EducationRepository';
import { ListEducationController } from './ListEducationController';
import { ListEducationUseCase } from './ListEducationUseCase';

const educationRepository = EducationRepository.getInstance();

const listEducationUseCase = new ListEducationUseCase(educationRepository);

const listEducationController = new ListEducationController(
  listEducationUseCase,
);

export { listEducationController };
