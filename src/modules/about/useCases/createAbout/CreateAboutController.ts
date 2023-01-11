import { Request, Response } from 'express';
import { CreateAboutUseCase } from './CreateAboutUseCase';

class CreateAboutController {
  constructor(private createAboutUseCase: CreateAboutUseCase) {}

  handle(req: Request, res: Response) {
    const { description } = req.body;

    this.createAboutUseCase.execute({
      description,
    });

    return res.status(201).json({ message: 'Successfully created About.' });
  }
}

export { CreateAboutController };
