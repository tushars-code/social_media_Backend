import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.status(201).json(newPost);
});

export default router;
