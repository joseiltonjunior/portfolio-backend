import { Request, Response } from 'express';
import { ListSkillsUseCase } from '../listSkills/ListSkillsUseCase';

class ListSkillsController {
  constructor(private listSkillsUseCase: ListSkillsUseCase) {}

  handle(req: Request, res: Response) {
    const all = this.listSkillsUseCase.execute();

    if (all.length === 0) {
      return res.json({ message: 'There are no items to display.' });
    }

    return res.json(all);
  }
}

export { ListSkillsController };
