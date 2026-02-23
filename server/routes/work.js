import { Router } from "express";
import Work from "../models/Work.js";

const router = Router();

router.get("/", async (_req, res) => {
  const work = await Work.find();
  res.json(work);
});

export default router;
