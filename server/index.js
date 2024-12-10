import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { DBconnect } from "./config/DBconnect.js";
import { IndexRoutes } from "./routes/IndexRoutes.js";

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

app.use(cookieParser());
app.use(express.json());

// Routes
IndexRoutes(app)

// Database
DBconnect();

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
