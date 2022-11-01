import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import empresasRoutes from "./routes/empresasRoutes.js";
import articulosRoutes from "./routes/articulosRoutes.js";
import cors from "cors"

const app = express()
app.use(express.json())

dotenv.config()
conectarDB();



// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    console.log('origin:',origin);
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

//routing

app.use("/api/usuarios", usuarioRoutes)
app.use("/api/empresas", empresasRoutes)
app.use("/api/articulos", articulosRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT,() =>{
    console.log(`Servidor corriendo en: ${PORT}`);
})
