import { SkillModel } from '../model/Skill';
import { ICreateSkillDTO, ISkillsRepository } from './ISkillsRepository';

class SkillsRepository implements ISkillsRepository {
  private Skills: SkillModel[];

  private static INSTANCE: SkillsRepository;

  private constructor() {
    this.Skills = [];
  }
  public static getInstance(): SkillsRepository {
    if (!SkillsRepository.INSTANCE) {
      SkillsRepository.INSTANCE = new SkillsRepository();
    }

    return SkillsRepository.INSTANCE;
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
