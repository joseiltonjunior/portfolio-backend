import { Request, Response } from 'express';
import { DeleteExperienceUseCase } from './DeleteExperienceUseCase';

class DeleteExperienceController {
  constructor(private deleteExperienceUseCase: DeleteExperienceUseCase) {}

  handle(req: Request, res: Response) {
    const { id } = req.params;

    this.deleteExperienceUseCase.execute({ id });

    return res
      .status(200)
      .json({ message: 'Successfully deleted experience.' });
  }
}

export { DeleteExperienceController };
