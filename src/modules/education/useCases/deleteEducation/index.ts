import { EducationRepository } from '../../repositories/implementations/EducationRepository';
import { DeleteEducationController } from './DeleteEducationController';
import { DeleteEducationUseCase } from './DeleteEducationUseCase';

const educationRepository = EducationRepository.getInstance();

const deleteEducationUseCase = new DeleteEducationUseCase(educationRepository);

const deleteEducationController = new DeleteEducationController(
  deleteEducationUseCase,
);

export { deleteEducationController };
