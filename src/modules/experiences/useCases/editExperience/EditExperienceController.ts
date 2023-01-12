import { Request, Response } from 'express';
import { ExperiencesRepository } from '../../repositories/implementations/ExperiencesRepository';
import { EditExperienceUseCase } from './EditExperienceUseCase';

class EditExperienceController {
  constructor(private editExperienceUseCase: EditExperienceUseCase) {}

  handle(req: Request, res: Response) {
    const { name, office, activities, technologies, time } = req.body;
    const { id } = req.params;

    const experiencesRepository = ExperiencesRepository.getInstance();
    const ExperienceAlreadyExists = experiencesRepository.findById(id);
    const experienceNameUsed = experiencesRepository.findByName(name, office);

    if (!ExperienceAlreadyExists) {
      return res
        .status(400)
        .json({ error: { message: 'Experience not exists.' } });
    }

    if (experienceNameUsed && experienceNameUsed.id !== id) {
      return res
        .status(400)
        .json({ error: { message: 'Experience name is already in use.' } });
    }

    this.editExperienceUseCase.execute({
      name,
      office,
      activities,
      technologies,
      time,
      id,
    });

    return res.status(200).json({
      message: 'Successfully edit experience.',
    });
  }
}

export { EditExperienceController };
