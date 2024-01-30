import { Schema, model } from 'mongoose';

const ClientSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },

    email: {
      required: true,
      type: String,
      unique: true,
    },

    phone: {
      required: true,
      type: String,
    },

    address: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ClientModel = model('Client', ClientSchema);
export default ClientModel;
