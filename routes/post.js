// routes/posts.js
import express from 'express';
import Post from '../models/Post.js'; // Ensure path is correct

const router = express.Router();

// GET all posts (sorted by latest first)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// POST a new post
router.post('/', async (req, res) => {
  const { userId, content, imageUrl } = req.body;

  if (!userId || !content) {
    return res.status(400).json({ error: 'userId and content are required' });
  }

  try {
    const newPost = new Post({
      userId,
      content,
      imageUrl, // Optional, from Supabase
    });

    const savedPost = await newPost.save();
    res.status(201).json({ id: savedPost._id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

export default router;
