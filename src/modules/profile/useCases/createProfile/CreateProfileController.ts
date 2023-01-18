import { Request, Response } from 'express';
import { CreateProfileUseCase } from './CreateProfileUseCase';

class CreateProfileController {
  constructor(private createProfileUseCase: CreateProfileUseCase) {}

  handle(req: Request, res: Response) {
    const { links, name, office, pic } = req.body;

    this.createProfileUseCase.execute({ links, name, office, pic });

    return res.status(201).json({ message: 'Successfully created Profile.' });
  }
}

export { CreateProfileController };
