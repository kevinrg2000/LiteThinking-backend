import express from "express";
const router = express.Router();

 import {obtenerEmpresas,
 nuevoEmpresa,
 obtenerEmpresa,
 editarEmpresa,
 eliminarEmpresa,}   from "../controllers/empresasController.js";
import checkAuth from "../middleware/checkAuth.js";


router
  .route("/")
  .get(checkAuth, obtenerEmpresas) //obtiene todas las empresas de un usuario
  .post(checkAuth, nuevoEmpresa); // crea una empresa

router
  .route("/:id")
  .get(checkAuth, obtenerEmpresa) // obtiene una empresa por id
  .put(checkAuth, editarEmpresa) // modificar 1 empresa
  .delete(checkAuth, eliminarEmpresa); // elimina 1 empresa por id

export default router;
