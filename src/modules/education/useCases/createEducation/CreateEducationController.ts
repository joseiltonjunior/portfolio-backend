import { Request, Response } from 'express';
import { EducationRepository } from '../../repositories/implementations/EducationRepository';
import { CreateEducationUseCase } from './CreateEducationUseCase';

class CreateEducationController {
  constructor(private createEducationUseCase: CreateEducationUseCase) {}

  handle(req: Request, res: Response) {
    const { name, description, course, time } = req.body;

    const educationRepository = EducationRepository.getInstance();
    const educationAlreadyExists = educationRepository.findByName(name);

    if (educationAlreadyExists) {
      return res
        .status(400)
        .json({ error: { message: 'education already exists.' } });
    }

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
