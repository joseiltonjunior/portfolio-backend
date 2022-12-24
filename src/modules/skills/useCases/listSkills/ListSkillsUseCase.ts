import { ISkillsRepository } from '../../repositories/ISkillsRepository';
import { SkillModel } from '../../model/Skill';

class ListSkillsUseCase {
  constructor(private skillsRepository: ISkillsRepository) {}

  execute(): SkillModel[] {
    const skills = this.skillsRepository.list();

    return skills;
  }
}

export { ListSkillsUseCase };
