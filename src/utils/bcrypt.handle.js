import bcrypt from 'bcryptjs';
const { hash, compare } = bcrypt;

const encrypt = async (password) => {
  const passwordHash = await hash(password, 8);
  return passwordHash;
};

const verified = async (password, passwordHash) => {
  const isCorrect = await compare(password, passwordHash);
  return isCorrect;
};

export { encrypt, verified };
