import { SkillModel } from '../model/Skill';

export interface ICreateSkillDTO {
  name: string;
  url: string;
}

interface ISkillsRepository {
  findByName(name: string): SkillModel;
  list(): SkillModel[];
  create({ name, url }: ICreateSkillDTO): void;
}

export { ISkillsRepository };
