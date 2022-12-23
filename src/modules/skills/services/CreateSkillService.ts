import { ISkillsRepository } from '../repositories/ISkillsRepository';

interface IRequest {
  name: string;
  url: string;
}

class CreateSkillservice {
  constructor(private SkillsRepository: ISkillsRepository) {}

  execute({ name, url }: IRequest) {
    const experienceAlreadyExists = this.SkillsRepository.findByName(name);

    if (experienceAlreadyExists) {
      throw new Error('Experience already exists!');
    }

    this.SkillsRepository.create({
      name,
      url,
    });
  }
}

export { CreateSkillservice };
