import { AboutModel } from '../../model/About';
import { ICreateAboutDTO, IAboutRepository } from '../IAboutRepository';

class AboutRepository implements IAboutRepository {
  private about: AboutModel;

  private static INSTANCE: AboutRepository;

  private constructor() {
    this.about = { description: '' };
  }

  public static getInstance(): AboutRepository {
    if (!AboutRepository.INSTANCE) {
      AboutRepository.INSTANCE = new AboutRepository();
    }

    return AboutRepository.INSTANCE;
  }

  create({ description }: ICreateAboutDTO): void {
    const about = new AboutModel();

    Object.assign(about, { description });

    this.about = about;
  }

  edit({ description }: ICreateAboutDTO): void {
    this.about.description = description;
  }

  list(): AboutModel {
    return this.about;
  }

  delete(): void {
    this.about.description = '';
  }
}

export { AboutRepository };
