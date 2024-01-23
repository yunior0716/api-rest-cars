import { Schema, model } from 'mongoose';

const CarSchema = new Schema({
  color: {
    required: true,
    type: String,
  },

  year: {
    required: true,
    type: Number,
  },

  brand: {
    required: true,
    type: String,
  },

  model: {
    required: true,
    type: String,
  },

  price: {
    required: true,
    type: Number,
  },
});

const CarModel = model('Car', CarSchema);
export default CarModel;
