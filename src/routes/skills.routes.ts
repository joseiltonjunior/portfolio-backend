import { Router } from 'express';

import { createSkillController } from '../modules/skills/useCases/createSkill';
import { deleteSkillController } from '../modules/skills/useCases/deleteSkill';
import { listSkillController } from '../modules/skills/useCases/listSkills';

const skillsRoutes = Router();

skillsRoutes.post('/', (req, res) => {
  return createSkillController.handle(req, res);
});

skillsRoutes.get('/', (req, res) => {
  return listSkillController.handle(req, res);
});

skillsRoutes.delete('/', (req, res) => {
  return deleteSkillController.handle(req, res);
});

export { skillsRoutes };
