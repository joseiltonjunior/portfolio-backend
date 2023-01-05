import { Request, Response } from 'express';
import { CreateEducationUseCase } from './CreateEducationUseCase';

class CreateEducationController {
  constructor(private createEducationUseCase: CreateEducationUseCase) {}

  handle(req: Request, res: Response) {
    const { name, description, course, time } = req.body;

    this.createEducationUseCase.execute({
      name,
      description,
      course,
      time,
    });

    return res.status(201).json({ message: 'Successfully created Education.' });
  }
}

export { CreateEducationController };
