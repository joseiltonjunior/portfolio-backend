import { Request, Response } from 'express';
import { EducationRepository } from '../../repositories/implementations/EducationRepository';
import { DeleteEducationUseCase } from './DeleteEducationUseCase';

class DeleteEducationController {
  constructor(private deleteEducationUseCase: DeleteEducationUseCase) {}

  handle(req: Request, res: Response) {
    const { id } = req.params;
    const educationRepository = EducationRepository.getInstance();
    const EducationAlreadyExists = educationRepository.findById(id);

    if (!EducationAlreadyExists) {
      return res
        .status(400)
        .json({ error: { message: 'Education not exists.' } });
    }

    this.deleteEducationUseCase.execute({ id });

    return res.status(200).json({ message: 'Successfully deleted education.' });
  }
}

export { DeleteEducationController };
