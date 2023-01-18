import {
  IEditExperienceDTO,
  IExperiencesRepository,
} from '../../repositories/IExperiencesRepository';

class EditExperienceUseCase {
  constructor(private ExperiencesRepository: IExperiencesRepository) {}

  execute({
    id,
    name,
    office,
    activities,
    technologies,
    time,
  }: IEditExperienceDTO) {
    this.ExperiencesRepository.edit({
      id,
      name,
      activities,
      office,
      technologies,
      time,
    });
  }
}

export { EditExperienceUseCase };
