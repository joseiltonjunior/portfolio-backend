import { ISkillsRepository } from '../../repositories/ISkillsRepository';

interface IRequest {
  id: string;
  name: string;
  url: string;
}

class EditSkillUseCase {
  constructor(private SkillsRepository: ISkillsRepository) {}

  execute({ id, name, url }: IRequest) {
    this.SkillsRepository.edit({
      id,
      name,
      url,
    });
  }
}

export { EditSkillUseCase };
