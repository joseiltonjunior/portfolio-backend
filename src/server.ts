import express from 'express';
import { experiencesRoutes } from './routes/experiences.routes';
import { skillsRoutes } from './routes/skills.routes';

const app = express();

app.use(express.json());

app.use('/experiences', experiencesRoutes);
app.use('/skills', skillsRoutes);

app.listen(3333, () => console.log('Server is running!'));
