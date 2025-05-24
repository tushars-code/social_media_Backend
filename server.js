import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/post.js';
import userRoutes from './routes/user_profiles.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error('DB connection error:', err));
