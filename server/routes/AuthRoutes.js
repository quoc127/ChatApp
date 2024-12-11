import express from "express";
const route = express.Router();
import { getUserInfo, login, register } from "../controller/AuthController.js";
import { verifyToken } from "../middleware/AuthMiddleware.js";

route.post("/register", register);
route.post("/login", login);
route.get("/user-info", verifyToken, getUserInfo);

export default route;
