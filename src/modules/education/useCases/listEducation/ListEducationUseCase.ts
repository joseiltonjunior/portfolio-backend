import { IEducationRepository } from '../../repositories/IEducationRepository';
import { EducationModel } from '../../model/Education';

class ListEducationUseCase {
  constructor(private EducationRepository: IEducationRepository) {}

  execute(): EducationModel[] {
    const Education = this.EducationRepository.list();

    return Education;
  }
}

export { ListEducationUseCase };
