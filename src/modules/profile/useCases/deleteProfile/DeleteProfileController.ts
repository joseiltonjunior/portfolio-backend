import { Request, Response } from 'express';

import { DeleteProfileUseCase } from './DeleteProfileUseCase';

class DeleteProfileController {
  constructor(private deleteProfileUseCase: DeleteProfileUseCase) {}

  handle(req: Request, res: Response) {
    this.deleteProfileUseCase.execute();

    return res.status(200).json({ message: 'Successfully deleted Profile.' });
  }
}

export { DeleteProfileController };
