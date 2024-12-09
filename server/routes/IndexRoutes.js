import  authRoutes  from "./AuthRoutes.js";

export const IndexRoutes = (app) => {
  // Auth User
  app.use("/api/user", authRoutes);
};
