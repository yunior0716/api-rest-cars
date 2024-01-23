import { Router } from 'express';
import UserModel from '../models/user.model.js';

const user = Router();

user.post('/register', async (req, res) => {
  const body = req.body;
  const response = await UserModel.create(body);
  res.send(response);
});

export default user;
