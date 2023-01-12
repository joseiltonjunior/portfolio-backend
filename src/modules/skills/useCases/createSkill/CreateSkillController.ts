import { Request, Response } from 'express';
import { SkillsRepository } from '../../repositories/implementations/SkillsRepository';
import { CreateSkillUseCase } from './CreateSkillUseCase';

class CreateSkillController {
  constructor(private createSkillUseCase: CreateSkillUseCase) {}

  handle(req: Request, res: Response) {
    const { name, url } = req.body;

    const skillsRepository = SkillsRepository.getInstance();
    const skillAlreadyExists = skillsRepository.findByName(name);

    if (skillAlreadyExists) {
      return res
        .status(400)
        .json({ error: { message: 'Skill name already exists.' } });
    }

    this.createSkillUseCase.execute({ name, url });

    return res.status(201).json({ message: 'Successfully created skill.' });
  }
}

export { CreateSkillController };
