import express from 'express';
import 'dotenv/config';
import dbConnect from './src/config/mongo.js';
import cors from 'cors';
import { createRoles } from './src/config/initial.setup.js';

import carsRoutes from './src/routes/cars.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import userRoutes from './src/routes/users.routes.js';
import clientRoutes from './src/routes/clients.routes.js';

const PORT = process.env.PORT || 3001;

const app = express();
createRoles();
app.use(cors());
app.use(express.json());

app.use(carsRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(clientRoutes);

dbConnect().then(() => console.log('Conected to Database'));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
