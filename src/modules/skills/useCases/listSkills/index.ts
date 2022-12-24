import { SkillsRepository } from '../../repositories/SkillsRepository';
import { ListSkillsController } from './ListSkillsController';
import { ListSkillsUseCase } from './ListSkillsUseCase';

const skillsRepository = SkillsRepository.getInstance();

const listSkillUseCase = new ListSkillsUseCase(skillsRepository);

const listSkillController = new ListSkillsController(listSkillUseCase);

export { listSkillController };
