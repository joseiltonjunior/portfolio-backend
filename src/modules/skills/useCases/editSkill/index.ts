import { SkillsRepository } from '../../repositories/implementations/SkillsRepository';
import { EditSkillController } from './EditSkillController';
import { EditSkillUseCase } from './EditSkillUseCase';

const skillsRepository = SkillsRepository.getInstance();

const editSkillUseCase = new EditSkillUseCase(skillsRepository);

const editSkillController = new EditSkillController(editSkillUseCase);

export { editSkillController };
