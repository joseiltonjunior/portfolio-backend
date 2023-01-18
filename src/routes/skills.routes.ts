import { Request, Response, Router } from 'express';
import { validationResult } from 'express-validator';

import { createSkillController } from '../modules/skills/useCases/createSkill';
import { deleteSkillController } from '../modules/skills/useCases/deleteSkill';
import { editSkillController } from '../modules/skills/useCases/editSkill';
import { listSkillController } from '../modules/skills/useCases/listSkills';
import { skillValidator } from '../validations/skills';

const skillsRoutes = Router();

skillsRoutes.post('/', skillValidator, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return createSkillController.handle(req, res);
});

skillsRoutes.get('/', (req, res) => {
  return listSkillController.handle(req, res);
});

skillsRoutes.delete('/:id', (req, res) => {
  return deleteSkillController.handle(req, res);
});

skillsRoutes.put('/:id', skillValidator, (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return editSkillController.handle(req, res);
});

export { skillsRoutes };
