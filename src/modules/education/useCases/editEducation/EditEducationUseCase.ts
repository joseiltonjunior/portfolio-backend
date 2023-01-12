import { IEducationRepository } from '../../repositories/IEducationRepository';

interface IRequest {
  name: string;
  course: string;
  description: string;
  time: Date;
  id: string;
}

class EditEducationUseCase {
  constructor(private EducationRepository: IEducationRepository) {}

  execute({ id, name, course, description, time }: IRequest) {
    this.EducationRepository.edit({
      id,
      name,
      description,
      course,
      time,
    });
  }
}

export { EditEducationUseCase };
