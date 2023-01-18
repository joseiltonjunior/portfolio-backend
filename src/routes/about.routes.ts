import { Router, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { createAboutController } from '../modules/about/useCases/createAbout';
import { deleteAboutController } from '../modules/about/useCases/deleteAbout';
import { editAboutController } from '../modules/about/useCases/editAbout';
import { listAboutController } from '../modules/about/useCases/listAbout';
import { aboutValidations } from '../validations/about';

const aboutRoutes = Router();

aboutRoutes.post('/', aboutValidations, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return createAboutController.handle(req, res);
});

aboutRoutes.get('/', (req, res) => {
  return listAboutController.handle(req, res);
});

aboutRoutes.delete('/', (req, res) => {
  return deleteAboutController.handle(req, res);
});

aboutRoutes.put('/', aboutValidations, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return editAboutController.handle(req, res);
});

export { aboutRoutes };
