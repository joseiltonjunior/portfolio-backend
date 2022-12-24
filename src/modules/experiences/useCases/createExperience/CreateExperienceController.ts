import { Request, Response } from 'express';
import { CreateExperienceUseCase } from './CreateExperienceUseCase';

class CreateExperienceController {
  constructor(private createExperienceUseCase: CreateExperienceUseCase) {}

  handle(req: Request, res: Response) {
    const { name, office, activities, technologies, time } = req.body;

    this.createExperienceUseCase.execute({
      name,
      office,
      activities,
      technologies,
      time,
    });

    return res
      .status(201)
      .json({ message: 'Successfully created experience.' });
  }
}

export { CreateExperienceController };
