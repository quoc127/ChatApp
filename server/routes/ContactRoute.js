import { Router } from "express";
const ContactRoutes = Router();
import { searchContacts } from "../controller/ContactController.js";
import { verifyToken } from "../middleware/AuthMiddleware.js";

ContactRoutes.post("/search", verifyToken, searchContacts);

export default ContactRoutes;
