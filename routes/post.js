import express from "express";
import clientPromise from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  const client = await clientPromise;
  const posts = await client.db("jobAppDB").collection("posts").find().sort({ createdAt: -1 }).toArray();
  res.json(posts);
});

router.post("/", async (req, res) => {
  const client = await clientPromise;
  const result = await client.db("jobAppDB").collection("posts").insertOne({
    ...req.body,
    createdAt: new Date()
  });
  res.status(201).json({ id: result.insertedId });
});

export default router;
