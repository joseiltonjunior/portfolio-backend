import { Request, Response } from 'express';
import { ExperiencesRepository } from '../../repositories/implementations/ExperiencesRepository';
import { DeleteExperienceUseCase } from './DeleteExperienceUseCase';

class DeleteExperienceController {
  constructor(private deleteExperienceUseCase: DeleteExperienceUseCase) {}

  handle(req: Request, res: Response) {
    const { id } = req.params;
    const experiencesRepository = ExperiencesRepository.getInstance();
    const ExperienceAlreadyExists = experiencesRepository.findById(id);

    if (!ExperienceAlreadyExists) {
      return res
        .status(400)
        .json({ error: { message: 'Experience not exists.' } });
    }

    this.deleteExperienceUseCase.execute({ id });

    return res
      .status(200)
      .json({ message: 'Successfully deleted experience.' });
  }
}

export { DeleteExperienceController };
