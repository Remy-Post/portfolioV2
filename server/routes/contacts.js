import { Router } from "express";
import Contact from "../models/Contact.js";

const router = Router();

router.get("/", async (_req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

export default router;
