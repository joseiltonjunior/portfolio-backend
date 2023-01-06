import { AboutRepository } from '../../repositories/implementations/AboutRepository';
import { CreateAboutController } from './CreateAboutController';
import { CreateAboutUseCase } from './CreateAboutUseCase';

const aboutRepository = AboutRepository.getInstance();

const createAboutUseCase = new CreateAboutUseCase(aboutRepository);

const createAboutController = new CreateAboutController(createAboutUseCase);

export { createAboutController };
