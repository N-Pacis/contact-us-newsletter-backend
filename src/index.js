import app from "./app.js";
import { config } from "dotenv";
import mongoose from "mongoose";

config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.DATABASE_ATLAS_CONNECTION_LINK;

mongoose.connect(MONGODB_URI).then(() => {
  console.log("Connected to database successfully");
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch(error => {
  console.error("Error connecting to database:", error);
});
