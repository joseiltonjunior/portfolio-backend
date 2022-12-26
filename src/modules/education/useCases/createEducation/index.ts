import { EducationRepository } from '../../repositories/implementations/EducationRepository';
import { CreateEducationController } from './CreateEducationController';
import { CreateEducationUseCase } from './CreateEducationUseCase';

const educationRepository = EducationRepository.getInstance();

const createEducationUseCase = new CreateEducationUseCase(educationRepository);

const createEducationController = new CreateEducationController(
  createEducationUseCase,
);

export { createEducationController };
