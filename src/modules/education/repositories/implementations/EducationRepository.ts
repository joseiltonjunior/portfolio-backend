import { EducationModel } from '../../model/Education';
import {
  ICreateEducationDTO,
  IEducationRepository,
} from '../IEducationRepository';

class EducationRepository implements IEducationRepository {
  private education: EducationModel[];

  private static INSTANCE: EducationRepository;

  private constructor() {
    this.education = [];
  }

  public static getInstance(): EducationRepository {
    if (!EducationRepository.INSTANCE) {
      EducationRepository.INSTANCE = new EducationRepository();
    }

    return EducationRepository.INSTANCE;
  }

  create({ name, course, description, time }: ICreateEducationDTO): void {
    const education = new EducationModel();

    Object.assign(education, { name, course, description, time });

    this.education.push(education);
  }

  list(): EducationModel[] {
    return this.education;
  }

  findByName(name: string): EducationModel {
    const education = this.education.find(
      experience => experience.name === name,
    );
    return education;
  }
}

export { EducationRepository };
