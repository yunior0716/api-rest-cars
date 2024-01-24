import UserModel from '../models/User.model.js';
import { encrypt, verified } from '../utils/bcrypt.handle.js';
import { generateToken } from '../utils/jwt.handle.js';
import Role from '../models/Role.model.js';

export const signUp = async (req, res) => {
  const { name, email, password, roles } = req.body;
  try {
    const checkUser = await UserModel.findOne({ email });
    if (checkUser) return 'ALREADY_EXISTS';

    const newUser = new UserModel({
      name,
      email,
      password: await encrypt(password),
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: 'user' });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    const token = generateToken(savedUser._id);

    res.status(200).json({ token, user: savedUser });
  } catch (e) {
    handleHttp(res, 'ERROR_REGISTER_USER', e);
  }
};

export const signIn = async (req, res) => {
  const userFound = await UserModel.findOne({ email: req.body.email }).populate(
    'roles'
  );

  if (!userFound) return res.status(400).json({ message: 'USER_NOT_FOUND' });

  const matchPassword = await verified(req.body.password, userFound.password);

  if (!matchPassword)
    return res.status(401).json({ message: 'INVALID_PASSWORD' });

  const token = generateToken(userFound._id);
  res.json({ token, user: 'LOGGED_IN' });
};
