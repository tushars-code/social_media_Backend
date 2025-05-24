import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  bio: String,
  imageUrl: String,
});

export default mongoose.model('User', UserSchema);
