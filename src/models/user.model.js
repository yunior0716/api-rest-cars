import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },

    password: {
      required: true,
      type: String,
    },

    email: {
      required: true,
      type: String,
      unique: true,
    },

    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model('User', UserSchema);
export default UserModel;
