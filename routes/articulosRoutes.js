import express from "express";
import {
  agregarArticulo,
  obtenerArticulo,
  actualizarArticulo,
  eliminarArticulo,
  cambiarEstado,
} from "../controllers/articuloController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", checkAuth, agregarArticulo);
router
  .route("/:id")
  .get(checkAuth, obtenerArticulo)
  .put(checkAuth, actualizarArticulo)
  .delete(checkAuth, eliminarArticulo);

router.post("/estado/:id", checkAuth, cambiarEstado);
export default router;
