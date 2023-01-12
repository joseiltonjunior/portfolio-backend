import { EducationModel } from '../model/Education';

export interface ICreateEducationDTO {
  name: string;
  course: string;
  description: string;
  time: Date;
}

export interface IEditEducationDTO {
  name: string;
  course: string;
  description: string;
  time: Date;
  id: string;
}

interface IEducationRepository {
  findByName(name: string): EducationModel;
  findById(id: string): EducationModel;
  list(): EducationModel[];
  create({ name, course, description, time }: ICreateEducationDTO): void;
  edit({ name, course, description, time }: IEditEducationDTO): void;
  delete(id: string): void;
}

export { IEducationRepository };
