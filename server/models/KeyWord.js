import mongoose from "mongoose";

const keyWordSchema = new mongoose.Schema({
  values: [String],
});

keyWordSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model("KeyWord", keyWordSchema);
