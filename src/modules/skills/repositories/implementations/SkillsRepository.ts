import { SkillModel } from '../../model/Skill';
import {
  ICreateSkillDTO,
  IEditSkillDTO,
  ISkillsRepository,
} from '../ISkillsRepository';

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

  edit({ name, url, id }: IEditSkillDTO): void {
    this.Skills.map(skill => {
      if (skill.id === id) {
        skill.name = name;
        skill.url = url;
      }

      return;
    });
  }

  list(): SkillModel[] {
    return this.Skills;
  }

  findByName(name: string): SkillModel {
    const Skill = this.Skills.find(
      Skill => Skill.name.toUpperCase() === name.toUpperCase(),
    );
    return Skill;
  }

  findById(id: string): SkillModel {
    const Skill = this.Skills.find(Skill => Skill.id == id);
    return Skill;
  }

  delete(id: string): void {
    const filter = this.Skills.filter(Skill => Skill.id != id);
    this.Skills = filter;
  }
}

export { SkillsRepository };
