import { About } from "../Model/aboutModel.js";
export const getAbout = async (req, res, next) => {
  try {
    const Data = await About.find();
    return res.status(200).json({
      message: "Sucessful",
      Data,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed",
    });
  }
};

export const getAboutById = async (req, res, next) => {
  try {
    const Data = await About.findById(req.params.id);
    return res.status(200).json({
      message: "Sucessful",
      Data,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed",
    });
  }
};

export const createAbout = async (req, res, next) => {
  try {
    const { fullName, jobTitle, description, mediaLinks } = req.body;
    console.log(req.file);
    const profilePicture = req.file
      ? req.file.path.replaceAll("\\", "/")
      : null;
    const Add = await About.create({
      fullName,
      jobTitle,
      description,
      mediaLinks,
      profilePicture,
    });
    return res.status(201).json({
      message: "Sucessful",
      Add,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed",
    });
  }
};

export const updateAbout = async (req, res, next) => {
  try {
    const id = req.params.id;
    const update = await About.findByIdAndUpdate(
      id,
      {
        fullName,
        jobTitle,
        description,
        mediaLinks,
      },
      {
        new: true,
      }
    );
    return res.status(201).json({
      message: "Sucessful",
      update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed",
    });
  }
};

export const deleteAbout = (req, res, next) => {};
