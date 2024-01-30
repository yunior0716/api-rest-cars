import ClientModel from '../models/Client.model.js';
import handleHttp from '../utils/error.handle.js';

export const createClient = async (req, res) => {
  try {
    const body = req.body;
    const response = await ClientModel.create(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_POST_CLIENT', e);
  }
};

export const getClients = async (req, res) => {
  try {
    const response = await ClientModel.find({});
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CLIENTS', e);
  }
};

export const getClient = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await ClientModel.findById(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_CLIENT', e);
  }
};

export const updateClient = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await ClientModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_CLIENT', e);
  }
};

export const deleteClient = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await ClientModel.findByIdAndDelete(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_CLIENT', e);
  }
};
