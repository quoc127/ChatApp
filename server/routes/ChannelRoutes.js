import { Router } from "express";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import { createChannel } from "../controller/ChannelController.js";

const ChannelRoues = Router();

ChannelRoues.post("/create-channel", verifyToken, createChannel);

export default ChannelRoues;
