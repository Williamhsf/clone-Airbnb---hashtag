import "dotenv/config"
import { app } from "./server.js" 
//import { fileURLToPath } from "url";
//import { dirname } from "node:path";

const { PORT } = process.env;

//export const __filename = fileURLToPath(import.meta.url)
//export const __dirname = dirname(__filename)


app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})