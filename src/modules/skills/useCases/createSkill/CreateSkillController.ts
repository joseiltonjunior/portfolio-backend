import { Request, Response } from 'express';
import { CreateSkillUseCase } from './CreateSkillUseCase';

class CreateSkillController {
  constructor(private createSkillUseCase: CreateSkillUseCase) {}

  handle(req: Request, res: Response) {
    const { name, url } = req.body;

    this.createSkillUseCase.execute({ name, url });

    return res.status(201).json({ message: 'Successfully created skill.' });
  }
}

export { CreateSkillController };
