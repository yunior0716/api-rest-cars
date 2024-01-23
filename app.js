import express from 'express';
import 'dotenv/config';
import dbConnect from './src/config/mongo.js';
import cors from 'cors';

import user from './src/controllers/user.controller.js';
import car from './src/controllers/car.controller.js';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use(user);
app.use(car);

dbConnect().then(() => console.log('Conected to Database'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
