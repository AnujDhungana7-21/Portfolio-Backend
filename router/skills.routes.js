//import express and handlers or controlers
import express from "express";
import {
  getSkill,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillControllers.js";
const Routes = express.Router();

//define Routers
Routes.get("/v1/api/skill", getSkill);
Routes.get("/v1/api/skill/:id", getSkillById);
Routes.post("/v1/api/skill", createSkill);
Routes.patch("/v1/api/skill/:id", updateSkill);
Routes.delete("/v1/api/skill/:id", deleteSkill);

//export routers
export default Routes;
