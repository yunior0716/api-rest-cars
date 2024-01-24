import Role from '../models/Role.model.js';
import UserModel from '../models/User.model.js';
import handleHttp from '../utils/error.handle.js';
import { verifyToken } from '../utils/jwt.handle.js';

export const checkJwt = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) return res.status(401).json({ message: 'NO_TOKEN_PROVIDED' });

    const decoded = await verifyToken(token);
    req.userId = decoded.id;

    const user = await UserModel.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: 'USER_NOT_FOUND' });

    next();
  } catch (e) {
    handleHttp(res, 'UNAUTORIZED', e);
  }
};

export const isAdmin = async (req, res, next) => {
  const user = await UserModel.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'admin') {
      next();
      return;
    }
  }

  return handleHttp(res, 'REQUIRE_ADMIN_ROLE', 'NOT_ADMIN');
};
