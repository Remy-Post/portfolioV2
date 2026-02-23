import express from "express";
import cors from "cors";

import projectsRouter from "./routes/projects.js";
import techStacksRouter from "./routes/techStacks.js";
import workRouter from "./routes/work.js";
import contactsRouter from "./routes/contacts.js";
import keywordsRouter from "./routes/keywords.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/projects", projectsRouter);
app.use("/api/techstacks", techStacksRouter);
app.use("/api/work", workRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/keywords", keywordsRouter);

export default app;
