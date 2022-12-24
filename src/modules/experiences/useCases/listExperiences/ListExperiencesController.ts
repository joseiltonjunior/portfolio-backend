import { Request, Response } from 'express';
import { ListExperiencesUseCase } from './ListExperiencesUseCase';

class ListExperiencesController {
  constructor(private listExperiencesUseCase: ListExperiencesUseCase) {}

  handle(req: Request, res: Response) {
    const all = this.listExperiencesUseCase.execute();

    if (all.length === 0) {
      return res.json({ message: 'There are no items to display.' });
    }

    return res.json(all);
  }
}

export { ListExperiencesController };
