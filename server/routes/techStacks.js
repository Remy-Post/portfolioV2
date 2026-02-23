import { Router } from "express";
import TechStack from "../models/TechStack.js";

const router = Router();

router.get("/", async (_req, res) => {
  const stacks = await TechStack.find().sort({ id: 1 });
  res.json(stacks);
});

router.get("/:id", async (req, res) => {
  const stack = await TechStack.findOne({ id: Number(req.params.id) });
  if (!stack) return res.status(404).json({ error: "Tech stack not found" });
  res.json(stack);
});

export default router;
