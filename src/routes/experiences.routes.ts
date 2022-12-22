import { Router } from 'express';

import { ExperiencesRepository } from '../repositories/ExperiencesRepository';
import { CreateExperienceService } from '../services/CreateExperienceService';

const experiencesRoutes = Router();
const experiencesRepository = new ExperiencesRepository();

experiencesRoutes.post('/', (req, res) => {
  const { name, office, activities, technologies, time } = req.body;

  const createExperienceService = new CreateExperienceService(
    experiencesRepository,
  );

  createExperienceService.execute({
    name,
    office,
    activities,
    technologies,
    time,
  });

  return res.status(201).json({ message: 'Successfully created experience' });
});

experiencesRoutes.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

  const all = experiencesRepository.list();

  return res.json(all);
});

export { experiencesRoutes };
