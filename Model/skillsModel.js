import mongoose from "mongoose";
const skillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: [{ String }],
  },
  {
    timestamps: true,
  }
);

export const Skill = mongoose.model("Skill", skillSchema);
