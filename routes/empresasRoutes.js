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
  .get(checkAuth, obtenerEmpresas)
  .post(checkAuth, nuevoEmpresa);

router
  .route("/:id")
  .get(checkAuth, obtenerEmpresa)
  .put(checkAuth, editarEmpresa)
  .delete(checkAuth, eliminarEmpresa);

export default router;
