import express from "express";
import {
  obtenerArticulos,
  agregarArticulo,
  obtenerArticulo,
  editarArticulo,
  eliminarArticulo,
} from "../controllers/articuloController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
  .post("/", checkAuth, agregarArticulo)
  .get("/", checkAuth, obtenerArticulos)
  
router
  .route("/:id")
  .get(checkAuth, obtenerArticulo)
  .put(checkAuth, editarArticulo)
  .delete(checkAuth, eliminarArticulo);

export default router;
