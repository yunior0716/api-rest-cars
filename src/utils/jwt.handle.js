import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = (id) => {
  const token = sign({ id }, JWT_SECRET, {
    expiresIn: 86400,
  });
  return token;
};

const verifyToken = async (token) => {
  try {
    const decoded = await verify(token, JWT_SECRET);
    return decoded;
  } catch (e) {
    return null;
  }
};

export { generateToken, verifyToken };
