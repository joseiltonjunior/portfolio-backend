import { Request, Response } from 'express';
import { ListEducationUseCase } from './ListEducationUseCase';

class ListEducationController {
  constructor(private listEducationUseCase: ListEducationUseCase) {}

  handle(req: Request, res: Response) {
    const all = this.listEducationUseCase.execute();

    if (all.length === 0) {
      return res.json({ message: 'There is no education or courses.' });
    }

    return res.json(all);
  }
}

export { ListEducationController };
