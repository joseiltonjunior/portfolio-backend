import { EducationRepository } from '../../repositories/implementations/EducationRepository';
import { EditEducationController } from './EditEducationController';
import { EditEducationUseCase } from './EditEducationUseCase';

const educationRepository = EducationRepository.getInstance();

const editEducationUseCase = new EditEducationUseCase(educationRepository);

const editEducationController = new EditEducationController(
  editEducationUseCase,
);

export { editEducationController };
