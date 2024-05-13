import express, { json } from "express";
import cors from "cors";
import { corsFunction } from "./utils/cors.js";
import { createRequire } from "module";
import swaggerUi from "swagger-ui-express";
import contactRoutes from "./routes/contact.routes.js";
import newsletterRoutes from "./routes/newsletter.routes.js";

const require = createRequire(import.meta.url);
const swaggerJson = require("../swagger.json");
export const app = express();

app.use(cors());
app.use(corsFunction);
app.use(json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use("/contact-us", contactRoutes);
app.use("/newsletter", newsletterRoutes);

export default app;
