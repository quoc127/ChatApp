import express from "express";
const route = express.Router();
import { login, register } from "../controller/AuthController.js";

route.post("/register", register);
route.post("/login", login);

export default route;
