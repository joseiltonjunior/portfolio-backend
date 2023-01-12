import { Request, Response } from 'express';
import { SkillsRepository } from '../../repositories/implementations/SkillsRepository';
import { EditSkillUseCase } from './EditSkillUseCase';

class EditSkillController {
  constructor(private editSkillUseCase: EditSkillUseCase) {}

  handle(req: Request, res: Response) {
    const { name, url } = req.body;
    const { id } = req.params;

    const skillsRepository = SkillsRepository.getInstance();
    const SkillAlreadyExists = skillsRepository.findById(id);
    const skillNameUsed = skillsRepository.findByName(name);

    if (!SkillAlreadyExists) {
      return res.status(400).json({ message: 'Skill not exists.' });
    }

    if (skillNameUsed && skillNameUsed.id !== id) {
      return res
        .status(400)
        .json({ error: { message: 'Skill name is already in use.' } });
    }

    this.editSkillUseCase.execute({ name, url, id });

    return res.status(200).json({ message: 'Successfully edit skill.' });
  }
}

export { EditSkillController };
