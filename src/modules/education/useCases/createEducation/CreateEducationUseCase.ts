import { IEducationRepository } from '../../repositories/IEducationRepository';
import { ICreateEducationDTO } from '../../repositories/IEducationRepository';

class CreateEducationUseCase {
  constructor(private educationRepository: IEducationRepository) {}

  execute({ name, course, description, time }: ICreateEducationDTO) {
    const educationAlreadyExists = this.educationRepository.findByName(name);

    if (educationAlreadyExists) {
      throw new Error('Education already exists!');
    }

    this.educationRepository.create({
      name,
      course,
      description,
      time,
    });
  }
}

export { CreateEducationUseCase };
