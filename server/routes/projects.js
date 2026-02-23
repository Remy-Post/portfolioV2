import { Router } from "express";
import Project from "../models/Project.js";

const router = Router();

router.get("/", async (_req, res) => {
  const projects = await Project.find().sort({ id: 1 });
  res.json(projects);
});

router.get("/:id", async (req, res) => {
  const project = await Project.findOne({ id: Number(req.params.id) });
  if (!project) return res.status(404).json({ error: "Project not found" });
  res.json(project);
});

export default router;
