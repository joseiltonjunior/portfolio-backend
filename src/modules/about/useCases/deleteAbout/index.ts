import { AboutRepository } from '../../repositories/implementations/AboutRepository';
import { DeleteAboutController } from './DeleteAboutController';
import { DeleteAboutUseCase } from './DeleteAboutUseCase';

const aboutRepository = AboutRepository.getInstance();

const deleteAboutUseCase = new DeleteAboutUseCase(aboutRepository);

const deleteAboutController = new DeleteAboutController(deleteAboutUseCase);

export { deleteAboutController };
