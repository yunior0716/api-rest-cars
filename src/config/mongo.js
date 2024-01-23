import { connect, set } from 'mongoose';
import 'dotenv/config';

const dbConnect = async () => {
  set('strictQuery', true);
  const DB_URI = process.env.DB_URI;
  await connect(DB_URI);
};

export default dbConnect;
