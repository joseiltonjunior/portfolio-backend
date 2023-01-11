import { Router } from 'express';

import { createAboutController } from '../modules/about/useCases/createAbout';
import { listAboutController } from '../modules/about/useCases/listAbout';

const aboutRoutes = Router();

aboutRoutes.post('/', (req, res) => {
  return createAboutController.handle(req, res);
});

aboutRoutes.get('/', (req, res) => {
  return listAboutController.handle(req, res);
});

export { aboutRoutes };
