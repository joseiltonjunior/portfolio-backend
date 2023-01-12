import { ISkillsRepository } from '../../repositories/ISkillsRepository';

interface IRequest {
  id: string;
}

class DeleteSkillUseCase {
  constructor(private SkillsRepository: ISkillsRepository) {}

  execute({ id }: IRequest) {
    this.SkillsRepository.delete(id);
  }
}

export { DeleteSkillUseCase };
