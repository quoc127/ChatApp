import express from "express";
const route = express.Router();
import { register } from "../controller/AuthController.js";

route.post("/register", register);

export default route;
