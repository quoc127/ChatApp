import { Router } from "express";

import { verifyToken } from "../middleware/AuthMiddleware.js";
import { getMessages } from "../controller/MessagesController.js";

const MessagesRoutes = Router();

MessagesRoutes.post("/get-messages", verifyToken, getMessages)

export default MessagesRoutes;