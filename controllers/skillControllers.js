import { Skill } from "../Model/skillsModel.js";
export const getSkill = async (req, res, next) => {
  try {
    const fetch = await Skill.find();
    res.status(200).json({
      message: "sucessful",
      fetch,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed",
      error: error.message,
    });
  }
};
export const getSkillById = async (req, res, next) => {
  try {
    const id = req.pramas.id;
    const fetchById = await Skill.findById(id);
    return res.status(200).json({
      message: "sucessful",
      fetchById,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed",
      error: error.message,
    });
  }
};
export const createSkill = async (req, res, next) => {
  try {
    const { title } = req.body;
    const description = req.body.description;
    const postSkill = await Skill.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "sucessful",
      postSkill,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed",
      error: error.message,
    });
  }
};
export const updateSkill = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const findData = await Skill.findById(id);
    if (findData) {
      const update = await Skill.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return res.status(201).json({
        message: "Updated",
        update,
      });
    }
    return res.status(404).json({
      message: "Not Found",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed",
      error: error.message,
    });
  }
};
export const deleteSkill = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findData = await Skill.findById(id);
    if (findData) {
      await Skill.findByIdAndDelete(id);
      return res.status(204).send();
    }
    return res.status(404).json({
      message: "Not found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed",
      error: error.message,
    });
  }
};
