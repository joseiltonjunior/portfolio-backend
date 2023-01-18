import {
  IEditEducationDTO,
  IEducationRepository,
} from '../../repositories/IEducationRepository';

class EditEducationUseCase {
  constructor(private EducationRepository: IEducationRepository) {}

  execute({ id, name, course, description, time }: IEditEducationDTO) {
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
