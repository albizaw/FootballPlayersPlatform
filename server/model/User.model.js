import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  file: {
    type: String,
    required: false,
    unique: false,
  },
});

export default mongoose.model('User', UserSchema);
