import express from "express";
import {
  agregarArticulo,
  obtenerArticulo,
  editarArticulo,
  eliminarArticulo,
} from "../controllers/articulosController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
  .post("/", checkAuth, agregarArticulo) //agrega un articulo a una empresa
  
router
  .route("/:id")
  .get(checkAuth, obtenerArticulo) // obtiene 1 articulo
  .put(checkAuth, editarArticulo) // edita 1 articlo 
  .delete(checkAuth, eliminarArticulo); // elimina 1 articulo 

export default router;
