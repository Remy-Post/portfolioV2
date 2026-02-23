import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String },
  date: {
    year: { type: String },
    month: { type: String },
  },
  descriptionArray: [String],
});

workSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model("Work", workSchema);
