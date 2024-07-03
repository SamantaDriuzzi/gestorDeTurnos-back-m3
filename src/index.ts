import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preLoadData } from "./helpers/preloadData";

AppDataSource.initialize().then((res) => {
  console.log("Conectada a la base de datos correctamente");

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
