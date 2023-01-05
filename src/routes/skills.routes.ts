import { Router } from 'express';

import { createSkillController } from '../modules/skills/useCases/createSkill';
import { deleteSkillController } from '../modules/skills/useCases/deleteSkill';
import { editSkillController } from '../modules/skills/useCases/editSkill';
import { listSkillController } from '../modules/skills/useCases/listSkills';

const skillsRoutes = Router();

skillsRoutes.post('/', (req, res) => {
  return createSkillController.handle(req, res);
});

skillsRoutes.get('/', (req, res) => {
  return listSkillController.handle(req, res);
});

skillsRoutes.delete('/:id', (req, res) => {
  return deleteSkillController.handle(req, res);
});

skillsRoutes.put('/:id', (req, res) => {
  return editSkillController.handle(req, res);
});

export { skillsRoutes };
