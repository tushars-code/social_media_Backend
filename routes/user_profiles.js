import express from "express";
import clientPromise from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const client = await clientPromise;
  const collection = client.db("jobAppDB").collection("user_profiles");
  const profile = await collection.findOne({ _id: new ObjectId(req.params.id) });
  profile ? res.json(profile) : res.status(404).json({ error: "Not found" });
});

router.post("/", async (req, res) => {
  const client = await clientPromise;
  const collection = client.db("jobAppDB").collection("user_profiles");
  const result = await collection.insertOne(req.body);
  res.status(201).json({ id: result.insertedId });
});

router.put("/:id", async (req, res) => {
  const client = await clientPromise;
  const { name, bio, college, course, imageUrl } = req.body;
  const result = await client.db("jobAppDB").collection("user_profiles").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { name, bio, college, course, imageUrl } }
  );
  res.json({ message: "Updated", result });
});

export default router;
