import { ISkillsRepository } from '../../repositories/ISkillsRepository';

interface IRequest {
  name: string;
  url: string;
}

class CreateSkillUseCase {
  constructor(private SkillsRepository: ISkillsRepository) {}

  execute({ name, url }: IRequest) {
    const skillAlreadyExists = this.SkillsRepository.findByName(name);

    if (skillAlreadyExists) {
      throw new Error('Skill already exists.');
    }

    this.SkillsRepository.create({
      name,
      url,
    });
  }
}

export { CreateSkillUseCase };
