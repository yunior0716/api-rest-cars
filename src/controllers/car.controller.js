import CarModel from '../models/Car.model.js';
import handleHttp from '../utils/error.handle.js';

export const createCar = async (req, res) => {
  try {
    const body = req.body;
    const response = await CarModel.create(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_POST_CAR', e);
  }
};

export const getCars = async (req, res) => {
  try {
    const response = await CarModel.find({});
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CARS', e);
  }
};

export const getCar = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await CarModel.findById(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CAR', e);
  }
};

export const updateCar = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await CarModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_CAR', e);
  }
};

export const deleteCar = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await CarModel.findByIdAndDelete(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_CAR', e);
  }
};
