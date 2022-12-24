import { Router } from 'express';

import { createExperienceController } from '../modules/experiences/useCases/createExperience';
import { listExperienceController } from '../modules/experiences/useCases/listExperiences';

const experiencesRoutes = Router();

experiencesRoutes.post('/', (req, res) => {
  return createExperienceController.handle(req, res);
});

experiencesRoutes.get('/', (req, res) => {
  return listExperienceController.handle(req, res);
});

export { experiencesRoutes };
