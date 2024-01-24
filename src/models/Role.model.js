import { Schema, model } from 'mongoose';

export const ROLES = ['user', 'admin'];

const RoleSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export default model('Role', RoleSchema);
