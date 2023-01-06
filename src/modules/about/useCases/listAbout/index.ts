import { AboutRepository } from '../../repositories/implementations/AboutRepository';
import { ListAboutController } from './ListAboutController';
import { ListAboutUseCase } from './ListAboutUseCase';

const aboutRepository = AboutRepository.getInstance();

const listAboutUseCase = new ListAboutUseCase(aboutRepository);

const listAboutController = new ListAboutController(listAboutUseCase);

export { listAboutController };
