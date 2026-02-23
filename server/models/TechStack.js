import mongoose from "mongoose";

const techStackSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  proficiency: { type: String },
  image: { type: String },
  projects: [Number],
  description: [String],
});

techStackSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model("TechStack", techStackSchema);
