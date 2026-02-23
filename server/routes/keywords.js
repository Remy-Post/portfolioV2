import { Router } from "express";
import KeyWord from "../models/KeyWord.js";

const router = Router();

router.get("/", async (_req, res) => {
  const doc = await KeyWord.findOne();
  res.json(doc ? doc.values : []);
});

export default router;
