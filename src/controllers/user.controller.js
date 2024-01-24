import UserModel from '../models/User.model.js';
import handleHttp from '../utils/error.handle.js';

export const createUser = async (req, res) => {};

export const getUsers = async (req, res) => {
  try {
    const response = await UserModel.find({});
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CARS', e);
  }
};
