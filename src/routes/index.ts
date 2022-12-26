import { Router } from 'express';

import { experiencesRoutes } from './experiences.routes';
import { skillsRoutes } from './skills.routes';
import { educationRoutes } from './education.routes';

const router = Router();

router.use('/experiences', experiencesRoutes);
router.use('/skills', skillsRoutes);
router.use('/education', educationRoutes);

export { router };
