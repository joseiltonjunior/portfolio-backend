import { Request, Response } from 'express';
import { EditProfileUseCase } from './EditProfileUseCase';

class EditProfileController {
  constructor(private editProfileUseCase: EditProfileUseCase) {}

  handle(req: Request, res: Response) {
    const { links, name, office, pic } = req.body;

    this.editProfileUseCase.execute({ links, name, office, pic });

    return res.status(200).json({ message: 'Successfully edit Profile.' });
  }
}

export { EditProfileController };
