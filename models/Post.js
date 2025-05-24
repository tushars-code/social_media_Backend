import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Post', PostSchema);
