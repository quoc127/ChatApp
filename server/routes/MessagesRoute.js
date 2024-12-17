import { Router } from "express";
import multer from "multer";

import { verifyToken } from "../middleware/AuthMiddleware.js";
import { getMessages, uploadFile } from "../controller/MessagesController.js";

const MessagesRoutes = Router();

const upload = multer({ dest: "uploads/files" });

MessagesRoutes.post("/get-messages", verifyToken, getMessages);
MessagesRoutes.post(
  "/upload-file",
  verifyToken,
  upload.single("file"),
  uploadFile
);

export default MessagesRoutes;
