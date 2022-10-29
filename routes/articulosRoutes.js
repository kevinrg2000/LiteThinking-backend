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
  .post("/", checkAuth, agregarArticulo)
  
router
  .route("/:id")
  .get(checkAuth, obtenerArticulo)
  .put(checkAuth, editarArticulo)
  .delete(checkAuth, eliminarArticulo);

export default router;
