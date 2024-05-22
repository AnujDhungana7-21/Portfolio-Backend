//imports
import express from "express";
import Abouts from "./router/about.routes.js";
import "./config/db.js";
const app = express();

//routes and middleware
app.use(express.json());
app.use(Abouts);

//port
let Port = process.env.Port || 5000;
app.listen(Port, () => {
  console.log(`Server started at  http://localhost:${Port}/ `);
});
