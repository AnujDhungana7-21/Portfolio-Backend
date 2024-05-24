//import express and handlers or controlers
import express from "express";
import {
  createAbout,
  deleteAbout,
  getAbout,
  getAboutById,
  updateAbout,
} from "../controllers/aboutControllers.js";
import upload from "../middlewares/multerConfig.js";
const Routes = express.Router();

//define Routers
Routes.get("/v1/api/about", getAbout);
Routes.get("/v1/api/about/:id", getAboutById);
Routes.post("/v1/api/about", upload.single("profilePicture"), createAbout);
Routes.patch("/v1/api/about/:id", upload.single("profilePicture"), updateAbout);
Routes.delete("/v1/api/about/:id", deleteAbout);

//export routers
export default Routes;
