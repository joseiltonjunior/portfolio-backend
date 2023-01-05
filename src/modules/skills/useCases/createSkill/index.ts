import { SkillsRepository } from '../../repositories/implementations/SkillsRepository';
import { CreateSkillController } from './CreateSkillController';
import { CreateSkillUseCase } from './CreateSkillUseCase';

const skillsRepository = SkillsRepository.getInstance();

const createSkillUseCase = new CreateSkillUseCase(skillsRepository);

const createSkillController = new CreateSkillController(createSkillUseCase);

export { createSkillController };
