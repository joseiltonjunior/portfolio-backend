import { Request, Response } from 'express';
import { DeleteSkillUseCase } from './DeleteSkillUseCase';

class DeleteSkillController {
  constructor(private deleteSkillUseCase: DeleteSkillUseCase) {}

  handle(req: Request, res: Response) {
    const { id } = req.params;

    this.deleteSkillUseCase.execute({ id });

    return res.status(200).json({ message: 'Successfully deleted skill.' });
  }
}

export { DeleteSkillController };
