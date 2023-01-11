import { Request, Response } from 'express';
import { ListAboutUseCase } from './ListAboutUseCase';

class ListAboutController {
  constructor(private listAboutUseCase: ListAboutUseCase) {}

  handle(req: Request, res: Response) {
    const description = this.listAboutUseCase.execute();

    return res.json(description);
  }
}

export { ListAboutController };
