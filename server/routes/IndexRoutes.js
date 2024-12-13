import  authRoutes  from "./AuthRoutes.js";
import contactRoutes from "./ContactRoute.js"

export const IndexRoutes = (app) => {
  // Auth User
  app.use("/api/user", authRoutes);
  app.use("/api/contacts", contactRoutes);
};
