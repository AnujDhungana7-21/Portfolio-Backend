import mongoose from "mongoose";
const aboutSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  description: {
    type: String,
  },
  mediaLinks: [String],
  profileImage: {
    type: String,
  },
  resume: {
    type: String,
  },
});
export const About = mongoose.model("About", aboutSchema);
