import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import empresasRoutes from "./routes/empresasRoutes.js";

const app = express()
app.use(express.json())

dotenv.config()
conectarDB();


//routing
app.use("/api/usuarios", usuarioRoutes)
app.use("/api/empresas", empresasRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT,() =>{
    console.log(`Servidor corriendo en: ${PORT}`);
})
