import { ISkillsRepository } from '../../repositories/ISkillsRepository';

interface IRequest {
  name: string;
  url: string;
}

class CreateSkillUseCase {
  constructor(private SkillsRepository: ISkillsRepository) {}

  execute({ name, url }: IRequest) {
    this.SkillsRepository.create({
      name,
      url,
    });
  }
}

export { CreateSkillUseCase };
