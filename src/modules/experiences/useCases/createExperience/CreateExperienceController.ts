import { Request, Response } from 'express';
import { ExperiencesRepository } from '../../repositories/implementations/ExperiencesRepository';
import { CreateExperienceUseCase } from './CreateExperienceUseCase';

class CreateExperienceController {
  constructor(private createExperienceUseCase: CreateExperienceUseCase) {}

  handle(req: Request, res: Response) {
    const { name, office, activities, technologies, time } = req.body;

    const experiencesRepository = ExperiencesRepository.getInstance();
    const experienceAlreadyExists = experiencesRepository.findByName(
      name,
      office,
    );

    if (experienceAlreadyExists) {
      return res.status(400).json({ message: 'Experience already exists.' });
    }

    this.createExperienceUseCase.execute({
      name,
      office,
      activities,
      technologies,
      time,
    });

    return res.status(201).json({
      message: 'Successfully created experience.',
    });
  }
}

export { CreateExperienceController };
