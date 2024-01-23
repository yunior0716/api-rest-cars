import { Router } from 'express';
import CarModel from '../models/car.model.js';
import handleHttp from '../utils/error.handle.js';

const car = Router();

car.post('/car', async (req, res) => {
  try {
    const body = req.body;
    const response = await CarModel.create(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_POST_CAR', e);
  }
});

car.get('/cars', async (req, res) => {
  try {
    const response = await CarModel.find({});
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CARS', e);
  }
});

car.get('/car/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await CarModel.findById(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CAR', e);
  }
});

car.put('/car/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await CarModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_CAR', e);
  }
});

car.delete('/car/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await CarModel.findByIdAndDelete(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_CAR', e);
  }
});

export default car;
