import { About } from "../Model/aboutModel.js";
import fs from "fs";
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
    const profilePicture = req.file
      ? "http://localhost:8000/" + req.file.path.replaceAll("\\", "/")
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
      error: error.message,
    });
  }
};

export const updateAbout = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { fullName, jobTitle, description, mediaLinks } = req.body;
    const oldData = await About.findById(id);

    let fileName;
    if (req.file) {
      let oldFilePath = oldData.profilePicture;
      let localHostUrl = "http://localhost:8000/".length;
      let path = oldFilePath.slice(localHostUrl);
      fs.unlink(path, (err) => {
        if (err) {
          console.log("failed");
        } else {
          console.log("delete");
        }
      });
      fileName = `${process.env.https + req.file.path.replaceAll("\\", "/")}`;
      console.log(fileName);
    }
    const update = await About.findByIdAndUpdate(
      id,
      {
        fullName,
        jobTitle,
        description,
        mediaLinks,
        profilePicture: fileName,
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
