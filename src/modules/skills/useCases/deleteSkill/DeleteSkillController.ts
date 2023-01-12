import { Request, Response } from 'express';
import { SkillsRepository } from '../../repositories/implementations/SkillsRepository';
import { DeleteSkillUseCase } from './DeleteSkillUseCase';

class DeleteSkillController {
  constructor(private deleteSkillUseCase: DeleteSkillUseCase) {}

  handle(req: Request, res: Response) {
    const { id } = req.params;

    const skillsRepository = SkillsRepository.getInstance();
    const SkillAlreadyExists = skillsRepository.findById(id);

    if (!SkillAlreadyExists) {
      return res.status(400).json({ error: { message: 'Skill not exists.' } });
    }

    this.deleteSkillUseCase.execute({ id });

    return res.status(200).json({ message: 'Successfully deleted skill.' });
  }
}

export { DeleteSkillController };
