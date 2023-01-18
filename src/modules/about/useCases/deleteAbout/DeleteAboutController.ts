import { Request, Response } from 'express';

import { DeleteAboutUseCase } from './DeleteAboutUseCase';

class DeleteAboutController {
  constructor(private deleteAboutUseCase: DeleteAboutUseCase) {}

  handle(req: Request, res: Response) {
    this.deleteAboutUseCase.execute();

    return res.status(200).json({ message: 'Successfully deleted about.' });
  }
}

export { DeleteAboutController };
