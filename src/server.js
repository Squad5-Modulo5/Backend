import express from "express";
import { routes } from "./Routes/index.route.js";
import { errorHandler } from "./Middlewares/error/erro.middleware.js";
import { testConnection } from "./database/connection.js";
import cors from "cors";

const app = express();
const port = 4979;

// Middlewares
app.use(express.json());
app.use(cors({ origin: "*" })); // Configuração simplificada do CORS

// Routes
app.use(routes);

// Error handler (deve vir após as rotas)
app.use(errorHandler);

// Inicia o servidor
app.listen(port, async () => {
    try {
        await testConnection();
        console.log(`Servidor rodando na porta ${port}`);
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit(1); // Encerra o processo com erro
    }
});