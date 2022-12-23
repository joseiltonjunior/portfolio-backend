import { Router } from 'express';
import { SkillsRepository } from '../modules/skills/repositories/SkillsRepository';
import { CreateSkillservice } from '../modules/skills/services/CreateSkillService';

const skillsRoutes = Router();
const skillsRepository = new SkillsRepository();

skillsRoutes.post('/', (req, res) => {
  const { name, url } = req.body;

  const createSkillservice = new CreateSkillservice(skillsRepository);

  createSkillservice.execute({
    name,
    url,
  });

  return res.status(201).json({ message: 'Successfully created experience' });
});

skillsRoutes.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

  const all = skillsRepository.list();

  return res.json(all);
});

export { skillsRoutes };
