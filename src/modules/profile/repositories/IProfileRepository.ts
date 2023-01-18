import { ProfileModel } from '../model/Profile';

interface LinkModel {
  name: string;
  url: string;
  icon: string;
}

export interface ICreateProfileDTO {
  office: string;
  name: string;
  pic: string;
  links: LinkModel[];
}

interface IProfileRepository {
  list(): ProfileModel;
  create({ links, name, office, pic }: ICreateProfileDTO): void;
  delete(): void;
  edit({ links, name, office, pic }: ICreateProfileDTO): void;
}

export { IProfileRepository };
