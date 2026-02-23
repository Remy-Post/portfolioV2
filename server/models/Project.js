import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  role: { type: String },
  highlights: { type: String },
  techStack: [String],
  githubLink: { type: String },
  hostingLink: { type: String },
});

projectSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model("Project", projectSchema);
