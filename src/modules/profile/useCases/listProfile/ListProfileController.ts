import { Request, Response } from 'express';
import { ListProfileUseCase } from './ListProfileUseCase';

class ListProfileController {
  constructor(private listProfileUseCase: ListProfileUseCase) {}

  handle(req: Request, res: Response) {
    const description = this.listProfileUseCase.execute();

    return res.json(description);
  }
}

export { ListProfileController };
