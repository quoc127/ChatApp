import  authRoutes  from "./AuthRoutes.js";
import contactRoutes from "./ContactRoute.js"
import messagesRoutes from "./MessagesRoute.js"
import channelsRoutes from "./ChannelRoutes.js"

export const IndexRoutes = (app) => {
  // Auth User
  app.use("/api/user", authRoutes);
  app.use("/api/contacts", contactRoutes);
  app.use("/api/messages", messagesRoutes);
  app.use("/api/channel", channelsRoutes);
};
