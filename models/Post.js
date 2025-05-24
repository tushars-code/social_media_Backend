
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  userId: String,
  content: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Post', PostSchema);
