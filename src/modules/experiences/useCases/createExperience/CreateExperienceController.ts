import { Request, Response } from 'express';
import { CreateExperienceUseCase } from './CreateExperienceUseCase';

class CreateExperienceController {
  constructor(private createExperienceUseCase: CreateExperienceUseCase) {}

  handle(req: Request, res: Response) {
    const { name, office, activities, technologies, time } = req.body;

    // if (!name) {
    //   throw new Error('name is required.');
    // }

    // if (!office) {
    //   throw new Error('office is required.');
    // }

    // if (!activities) {
    //   throw new Error('activities is required.');
    // }

    // if (!technologies) {
    //   throw new Error('technologies is required.');
    // }

    // if (!time) {
    //   throw new Error('time is required.');
    // }

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
