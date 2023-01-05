import { ISkillsRepository } from '../../repositories/ISkillsRepository';

interface IRequest {
  id: string;
}

class DeleteSkillUseCase {
  constructor(private SkillsRepository: ISkillsRepository) {}

  execute({ id }: IRequest) {
    const skillAlreadyExists = this.SkillsRepository.findById(id);

    if (!skillAlreadyExists) {
      throw new Error('Skill not exists.');
    }

    this.SkillsRepository.delete(id);
  }
}

export { DeleteSkillUseCase };
