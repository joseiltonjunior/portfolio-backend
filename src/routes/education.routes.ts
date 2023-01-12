import { Request, Response, Router } from 'express';
import { validationResult } from 'express-validator';

import { createEducationController } from '../modules/education/useCases/createEducation';
import { deleteEducationController } from '../modules/education/useCases/deleteEducation';
import { DeleteEducationController } from '../modules/education/useCases/deleteEducation/DeleteEducationController';
import { editEducationController } from '../modules/education/useCases/editEducation';
import { listEducationController } from '../modules/education/useCases/listEducation';
import { educationValidations } from '../validations/education';

const educationRoutes = Router();

educationRoutes.post(
  '/',
  educationValidations,
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return createEducationController.handle(req, res);
  },
);

educationRoutes.put(
  '/:id',
  educationValidations,
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return editEducationController.handle(req, res);
  },
);

educationRoutes.get('/', (req, res) => {
  return listEducationController.handle(req, res);
});

educationRoutes.delete('/:id', (req, res) => {
  return deleteEducationController.handle(req, res);
});

export { educationRoutes };
