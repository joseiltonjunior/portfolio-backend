import { SkillsRepository } from '../../repositories/implementations/SkillsRepository';
import { DeleteSkillController } from './DeleteSkillController';
import { DeleteSkillUseCase } from './DeleteSkillUseCase';

const skillsRepository = SkillsRepository.getInstance();

const deleteSkillUseCase = new DeleteSkillUseCase(skillsRepository);

const deleteSkillController = new DeleteSkillController(deleteSkillUseCase);

export { deleteSkillController };
