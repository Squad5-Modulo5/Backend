import express from "express";
import {routes} from "./Routes/index.route.js";
import {errorHandler} from "./Middlewares/error/erro.middleware.js";
import { testConnection } from "./database/connection.js";
import cors from "cors"
const app = express();
const port = 4979;
app.use(express.json());
app.use(cors({origin: "*"}))
app.use(routes);
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Permite qualquer origem
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
app.use(errorHandler);

app.listen(port, () => {
    testConnection()
    console.log(`Servidor rodando na porta ${port}`)})
 