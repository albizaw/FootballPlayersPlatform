import mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema(
  {
    id: {
      required: true,
      type: String,
    },

    common_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
    image_path: {
      type: String,
      required: false,
    },
    weight: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Card', CardSchema);
