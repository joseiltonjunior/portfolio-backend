import { SkillModel } from '../model/Skill';
import { ICreateSkillDTO, ISkillsRepository } from './ISkillsRepository';

class SkillsRepository implements ISkillsRepository {
  private Skills: SkillModel[];

  constructor() {
    this.Skills = [];
  }

  create({ name, url }: ICreateSkillDTO): void {
    const Skill = new SkillModel();

    Object.assign(Skill, {
      name,
      url,
    });

    this.Skills.push(Skill);
  }

  list(): SkillModel[] {
    return this.Skills;
  }

  findByName(name: string): SkillModel {
    const Skill = this.Skills.find(Skill => Skill.name === name);
    return Skill;
  }
}

export { SkillsRepository };
