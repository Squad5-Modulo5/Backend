import express from "express";
import {routes} from "./Routes/index.route.js";
import {errorHandler} from "./Middlewares/error/erro.middleware.js";
import { testConnection } from "./database/connection.js";

const app = express();
const port = 4979;
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
    testConnection()
    console.log(`Servidor rodando na porta ${port}`)})
