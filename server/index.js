import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { DBconnect } from "./config/DBconnect.js";
import { IndexRoutes } from "./routes/IndexRoutes.js";
import setupSocket from "./socket.js";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: [
      "Content-type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

//Upload
app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads/files", express.static("uploads/files"));

app.use(cookieParser());
app.use(express.json());

// Routes
IndexRoutes(app);

// Database
DBconnect();

const server = app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

//SocketIO
setupSocket(server)