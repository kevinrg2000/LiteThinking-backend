import express from "express";
const router = express.Router();
import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";

import checkAuth from "../middleware/checkAuth.js";
// Autenticación, Registro y Confirmación de Usuarios
router.post("/registrar", registrar); // Crea un nuevo usuario
router.post("/login", autenticar); // autentifica al usuario
router.get("/confirmar/:token", confirmar); // confirma la cuenta del usuario
router.post("/olvide-password", olvidePassword); //primer paso para recuperar la contraseña
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);// recuperar la contraseña con el token obtenido 
router.get("/perfil", checkAuth, perfil); // obtener un usuario 

export default router;
