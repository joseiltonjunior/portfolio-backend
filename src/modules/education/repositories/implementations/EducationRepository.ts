import { EducationModel } from '../../model/Education';
import {
  ICreateEducationDTO,
  IEditEducationDTO,
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

  edit({ name, course, description, time, id }: IEditEducationDTO): void {
    this.education.map(education => {
      if (education.id == id) {
        education.name = name;
        education.course = course;
        education.description = description;
        education.time = time;
      }

      return;
    });
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

  findById(id: string): EducationModel {
    const education = this.education.find(education => education.id == id);
    return education;
  }

  delete(id: string): void {
    const filter = this.education.filter(education => education.id != id);

    this.education = filter;
  }
}

export { EducationRepository };
