import { Router } from "express";
const route = Router();
import {
  addProfileImage,
  getUserInfo,
  login,
  register,
  removeProfileImage,
  updateProfile,
} from "../controller/AuthController.js";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import multer from "multer";

const upload = multer({ dest: "uploads/profiles" });

route.post("/register", register);
route.post("/login", login);
route.get("/user-info", verifyToken, getUserInfo);
route.post("/update-profile", verifyToken, updateProfile);
route.post(
  "/add-profile-image",
  verifyToken,
  upload.single("profile-image"),
  addProfileImage
);
route.delete("/remove-profile-image", verifyToken, removeProfileImage);

export default route;
