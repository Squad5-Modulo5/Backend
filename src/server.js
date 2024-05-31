import express from "express";
import {routes} from "./Routes/index.route.js";
import { testConnection } from "./database/connection.js";
import cors from "cors"
const app = express();
const port = 4979;
app.use(express.json());
app.use(cors({origin: "*"}))
app.use(routes);


app.listen(port, () => {
    testConnection()
    console.log(`Servidor rodando na porta ${port}`)})