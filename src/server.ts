import express from 'express';
import { experiencesRoutes } from './routes/experiences.routes';
import { skillsRoutes } from './routes/skills.routes';
import { educationRoutes } from './routes/education.routes';

const app = express();

app.use(express.json());

app.use('/experiences', experiencesRoutes);
app.use('/skills', skillsRoutes);
app.use('/education', educationRoutes);

app.listen(3333, () => console.log('Server is running!'));
