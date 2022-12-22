import express from 'express';
import { experiencesRoutes } from './routes/experiences.routes';

const app = express();

app.use(express.json());

app.use('/experiences', experiencesRoutes);

app.listen(3333, () => console.log('Server is running!'));
