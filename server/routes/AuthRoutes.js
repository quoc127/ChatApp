import { Router } from "express";
const AuthRoutes = Router();
import {
  addProfileImage,
  getUserInfo,
  login,
  register,
  removeProfileImage,
  updateProfile,
  logout,
} from "../controller/AuthController.js";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import multer from "multer";

const upload = multer({ dest: "uploads/profiles" });

AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.get("/user-info", verifyToken, getUserInfo);
AuthRoutes.post("/update-profile", verifyToken, updateProfile);
AuthRoutes.post(
  "/add-profile-image",
  verifyToken,
  upload.single("profile-image"),
  addProfileImage
);
AuthRoutes.delete("/remove-profile-image", verifyToken, removeProfileImage);

AuthRoutes.post("/logout", verifyToken, logout);

export default AuthRoutes;
