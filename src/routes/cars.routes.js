import { Router } from 'express';
import {
  getCar,
  getCars,
  createCar,
  updateCar,
  deleteCar,
} from '../controllers/car.controller.js';

const router = Router();

router.post('/car', createCar);
router.get('/cars', getCars);
router.get('/car/:id', getCar);
router.put('/car/:id', updateCar);
router.delete('/car/:id', deleteCar);

export default router;
