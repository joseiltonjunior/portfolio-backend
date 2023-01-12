import { Request, Response } from 'express';
import { EducationRepository } from '../../repositories/implementations/EducationRepository';
import { EditEducationUseCase } from './EditEducationUseCase';

class EditEducationController {
  constructor(private editEducationUseCase: EditEducationUseCase) {}

  handle(req: Request, res: Response) {
    const { name, course, description, time } = req.body;
    const { id } = req.params;

    const educationRepository = EducationRepository.getInstance();
    const EducationAlreadyExists = educationRepository.findById(id);
    const educationNameUsed = educationRepository.findByName(name);

    if (!EducationAlreadyExists) {
      return res
        .status(400)
        .json({ error: { message: 'Education not exists.' } });
    }

    if (educationNameUsed && educationNameUsed.id !== id) {
      return res
        .status(400)
        .json({ error: { message: 'Education name is already in use.' } });
    }

    this.editEducationUseCase.execute({
      name,
      course,
      description,
      time,
      id,
    });

    return res.status(200).json({
      message: 'Successfully edit education.',
    });
  }
}

export { EditEducationController };
