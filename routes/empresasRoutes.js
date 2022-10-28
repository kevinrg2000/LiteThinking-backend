import express from "express";
const router = express.Router();

import { obtenerEmpresas, nuevoEmpresa  } from "../controllers/empresasController.js";
import checkAuth from "../middleware/checkAuth.js";


// router
//   .route("/")
//   .get(checkAuth, obtenerEmpresas)
//   .post(checkAuth, nuevoEmpresa);

// router
//   .route("/:id")
//   .get(checkAuth, obtenerEmpresa)
//   .put(checkAuth, editarEmpresa)
//   .delete(checkAuth, eliminarEmpresa);

// router.post("/articulos", checkAuth, buscarArticulo);
// router.post("/articulos/:id", checkAuth, agregarArticulo);
//router.post("/eliminar-articulo/:id", checkAuth, eliminarArticulo);

export default router;
