import mongoose from "mongoose";
const aboutSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mediaLinks: [String],
    profilePicture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const About = mongoose.model("About", aboutSchema);
