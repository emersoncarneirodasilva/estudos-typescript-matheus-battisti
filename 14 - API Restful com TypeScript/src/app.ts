// variáveis de ambiente
require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();
const PORT = config.get<number>("port");

// JSON Middleware
app.use(express.json());

// Middleware
app.use(morganMiddleware);

// Routes
app.use("/api/", router);

app.listen(PORT, async () => {
  await db();

  Logger.info(`Aplicação está funcionando na porta: ${PORT}`);
});
