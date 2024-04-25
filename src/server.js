import express from "express";

import { testConnection } from "./database/conection.js";

const app = express();
const port = 4897;


app.listen(port, () => {
    testConnection()
    console.log(`Servidor rodando na porta ${port}`)})