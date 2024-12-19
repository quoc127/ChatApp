import { Router } from "express";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import { createChannel, getUserChannel } from "../controller/ChannelController.js";

const ChannelRoues = Router();

ChannelRoues.post("/create-channel", verifyToken, createChannel);
ChannelRoues.get("/get-user-channel", verifyToken, getUserChannel);

export default ChannelRoues;
