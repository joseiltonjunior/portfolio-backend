import { Request, Response } from 'express';
import { EditAboutUseCase } from './EditAboutUseCase';

class EditAboutController {
  constructor(private editAboutUseCase: EditAboutUseCase) {}

  handle(req: Request, res: Response) {
    const { description } = req.body;

    this.editAboutUseCase.execute({ description });

    return res.status(200).json({ message: 'Successfully edit About.' });
  }
}

export { EditAboutController };
