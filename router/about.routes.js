//import express and handlers or controlers
import express from "express";
import {
  createAbout,
  deleteAbout,
  getAbout,
  getAboutById,
  updateAbout,
} from "../controllers/aboutControllers.js";
const Routes = express.Router();

//define Routers
Routes.get("/v1/api/abouts", getAbout);
Routes.get("/v1/api/abouts/:id", getAboutById);
Routes.post("/v1/api/abouts", createAbout);
Routes.put("/v1/api/abouts/:id", updateAbout);
Routes.delete("/v1/api/abouts/:id", deleteAbout);


//export routers
export default Routes;
