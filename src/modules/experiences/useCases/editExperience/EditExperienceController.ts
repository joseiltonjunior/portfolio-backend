import { Request, Response } from 'express';
import { EditExperienceUseCase } from './EditExperienceUseCase';

class EditExperienceController {
  constructor(private editExperienceUseCase: EditExperienceUseCase) {}

  handle(req: Request, res: Response) {
    const { name, office, activities, technologies, time } = req.body;
    const { id } = req.params;

    this.editExperienceUseCase.execute({
      name,
      office,
      activities,
      technologies,
      time,
      id,
    });

    return res.status(200).json({ message: 'Successfully edit experience.' });
  }
}

export { EditExperienceController };
