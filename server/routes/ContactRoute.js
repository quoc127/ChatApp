import { Router } from "express";
const ContactRoutes = Router();
import { getAllContacts, getContactsForDMList, searchContacts } from "../controller/ContactController.js";
import { verifyToken } from "../middleware/AuthMiddleware.js";

ContactRoutes.post("/search", verifyToken, searchContacts);
ContactRoutes.get("/get-contacts-for-dm", verifyToken, getContactsForDMList);
ContactRoutes.get("/get-all-contacts", verifyToken, getAllContacts)

export default ContactRoutes;
