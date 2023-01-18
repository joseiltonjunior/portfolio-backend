import { Request, Response, Router } from 'express';
import { validationResult } from 'express-validator';

import { createProfileController } from '../modules/profile/useCases/createProfile';
import { deleteProfileController } from '../modules/profile/useCases/deleteProfile';

import { editProfileController } from '../modules/profile/useCases/editProfile';
import { listProfileController } from '../modules/profile/useCases/listProfile';
import { profileValidator } from '../validations/profile';

const profileRoutes = Router();

profileRoutes.post('/', profileValidator, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return createProfileController.handle(req, res);
});

profileRoutes.put('/', profileValidator, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return editProfileController.handle(req, res);
});

profileRoutes.get('/', (req, res) => {
  return listProfileController.handle(req, res);
});

profileRoutes.delete('/', (req, res) => {
  return deleteProfileController.handle(req, res);
});

export { profileRoutes };
