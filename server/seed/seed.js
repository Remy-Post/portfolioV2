import "dotenv/config";
import mongoose from "mongoose";
import { readFile } from "fs/promises";

import Project from "../models/Project.js";
import TechStack from "../models/TechStack.js";
import Work from "../models/Work.js";
import Contact from "../models/Contact.js";
import KeyWord from "../models/KeyWord.js";

const data = JSON.parse(
  await readFile(new URL("./data.json", import.meta.url), "utf-8")
);

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Clear all collections
  await Promise.all([
    Project.deleteMany(),
    TechStack.deleteMany(),
    Work.deleteMany(),
    Contact.deleteMany(),
    KeyWord.deleteMany(),
  ]);
  console.log("Cleared existing data");

  // Insert seed data
  await Project.insertMany(data.projects);
  console.log(`Inserted ${data.projects.length} projects`);

  await TechStack.insertMany(data.techStacks);
  console.log(`Inserted ${data.techStacks.length} tech stacks`);

  await Work.insertMany(data.work);
  console.log(`Inserted ${data.work.length} work entries`);

  await Contact.insertMany(data.contacts);
  console.log(`Inserted ${data.contacts.length} contacts`);

  await KeyWord.create({ values: data.keyWords });
  console.log(`Inserted ${data.keyWords.length} keywords`);

  console.log("Seeding complete!");
} catch (err) {
  console.error("Seeding failed:", err);
  process.exit(1);
} finally {
  await mongoose.connection.close();
}
