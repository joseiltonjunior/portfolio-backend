import { EducationModel } from '../model/Education';

export interface ICreateEducationDTO {
  name: string;
  course: string;
  description: string;
  time: Date;
}

interface IEducationRepository {
  findByName(name: string): EducationModel;
  list(): EducationModel[];
  create({ name, course, description, time }: ICreateEducationDTO): void;
}

export { IEducationRepository };
