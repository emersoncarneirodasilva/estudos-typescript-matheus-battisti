import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conexão ao banco de dado realizada com sucesso!");
  } catch (error) {
    Logger.error("Não foi possivel a conexão ao banco de dados");
    Logger.error(`Erro: ${error}`);
    process.exit(1);
  }
}

export default connect;
