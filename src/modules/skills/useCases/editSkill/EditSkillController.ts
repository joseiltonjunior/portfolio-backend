import { Request, Response } from 'express';
import { EditSkillUseCase } from './EditSkillUseCase';

class EditSkillController {
  constructor(private editSkillUseCase: EditSkillUseCase) {}

  handle(req: Request, res: Response) {
    const { name, url } = req.body;
    const { id } = req.params;

    this.editSkillUseCase.execute({ name, url, id });

    return res.status(200).json({ message: 'Successfully edit skill.' });
  }
}

export { EditSkillController };
