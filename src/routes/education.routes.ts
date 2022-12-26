import { Router } from 'express';

import { createEducationController } from '../modules/education/useCases/createEducation';
import { listEducationController } from '../modules/education/useCases/listEducation';

const educationRoutes = Router();

educationRoutes.post('/', (req, res) => {
  return createEducationController.handle(req, res);
});

educationRoutes.get('/', (req, res) => {
  return listEducationController.handle(req, res);
});

export { educationRoutes };
