import { SkillModel } from '../model/Skill';

export interface ICreateSkillDTO {
  name: string;
  url: string;
  id?: string;
}

export interface IEditSkillDTO {
  name: string;
  url: string;
  id: string;
}

interface ISkillsRepository {
  findByName(name: string): SkillModel;
  findById(id: string): SkillModel;
  list(): SkillModel[];
  create({ name, url }: ICreateSkillDTO): void;
  delete(id: string): void;
  edit({ name, url, id }: IEditSkillDTO): void;
}

export { ISkillsRepository };
