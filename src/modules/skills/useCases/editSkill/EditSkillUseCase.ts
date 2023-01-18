import {
  IEditSkillDTO,
  ISkillsRepository,
} from '../../repositories/ISkillsRepository';

class EditSkillUseCase {
  constructor(private SkillsRepository: ISkillsRepository) {}

  execute({ id, name, url }: IEditSkillDTO) {
    this.SkillsRepository.edit({
      id,
      name,
      url,
    });
  }
}

export { EditSkillUseCase };
