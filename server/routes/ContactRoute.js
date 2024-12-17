import { Router } from "express";
const ContactRoutes = Router();
import { getContactsForDMList, searchContacts } from "../controller/ContactController.js";
import { verifyToken } from "../middleware/AuthMiddleware.js";

ContactRoutes.post("/search", verifyToken, searchContacts);
ContactRoutes.get("/get-contacts-for-dm", verifyToken, getContactsForDMList);

export default ContactRoutes;
