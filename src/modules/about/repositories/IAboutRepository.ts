import { AboutModel } from '../model/About';

export interface ICreateAboutDTO {
  description: string;
}

interface IAboutRepository {
  list(): AboutModel;
  create({ description }: ICreateAboutDTO): void;
}

export { IAboutRepository };
