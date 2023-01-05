import { ISkillsRepository } from '../../repositories/ISkillsRepository';

interface IRequest {
  id: string;
  name: string;
  url: string;
}

class EditSkillUseCase {
  constructor(private SkillsRepository: ISkillsRepository) {}

  execute({ id, name, url }: IRequest) {
    const skillAlreadyExists = this.SkillsRepository.findById(id);

    const skillNameUsed = this.SkillsRepository.findByName(name);

    if (!skillAlreadyExists) {
      throw new Error('Skill not exists.');
    }

    if (skillNameUsed && skillNameUsed.id !== id) {
      throw new Error('skill name is already in use.');
    }

    this.SkillsRepository.edit({
      id,
      name,
      url,
    });
  }
}

export { EditSkillUseCase };
