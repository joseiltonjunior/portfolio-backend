import { AboutRepository } from '../../repositories/implementations/AboutRepository';
import { EditAboutController } from './EditAboutController';
import { EditAboutUseCase } from './EditAboutUseCase';

const aboutRepository = AboutRepository.getInstance();

const editAboutUseCase = new EditAboutUseCase(aboutRepository);

const editAboutController = new EditAboutController(editAboutUseCase);

export { editAboutController };
