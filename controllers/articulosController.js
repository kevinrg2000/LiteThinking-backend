import Empresa from "../models/Empresa.js";
import Articulos from "../models/articulos.js";

const agregarArticulo = async (req, res) => {
  const { empresa } = req.body;

  const existeEmpresa = await Empresa.findById(empresa);

  if (!existeEmpresa) {
    const error = new Error("El Empresa no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (existeEmpresa.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("No tienes los permisos para añadir articulos");
    return res.status(403).json({ msg: error.message });
  }

  try {
    const articuloAlmacenado = await Articulos.create(req.body);
    
    existeEmpresa.articulos.push(articuloAlmacenado._id);
    await existeEmpresa.save();
    res.json(articuloAlmacenado);
  } catch (error) {
    console.log(error);
  }
};


const obtenerArticulo = async (req, res) => {
  const { id } = req.params;

  const articulo = await Articulos.findById(id).populate("empresa");

  if (!articulo) {
    const error = new Error("Articulo no encontrada");
    return res.status(404).json({ msg: error.message });
  }

  if (articulo.empresa.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(403).json({ msg: error.message });
  }

  res.json(articulo);
};

const editarArticulo = async (req, res) => {
  const { id } = req.params;

  const articulos = await Articulos.findById(id).populate("empresa");

  if (!articulos) {
    const error = new Error("Articulos no encontrada");
    return res.status(404).json({ msg: error.message });
  }

  if (articulos.empresa.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(403).json({ msg: error.message });
  }

  articulos.nombre = req.body.nombre || articulos.nombre;
  
  try {
    const articuloAlmacenada = await articulos.save();
    res.json(articuloAlmacenada);
  } catch (error) {
    console.log(error);
  }
};

const eliminarArticulo = async (req, res) => {
  const { id } = req.params;

  const articulos = await Articulos.findById(id).populate("empresa");

  if (!articulos) {
    const error = new Error("Articulos no encontrada");
    return res.status(404).json({ msg: error.message });
  }

  if (articulos.empresa.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(403).json({ msg: error.message });
  }

  articulos.nombre = req.body.nombre || articulos.nombre;
  
  try {
    const articuloAlmacenada = await articulos.delete();
    res.json(articuloAlmacenada);
  } catch (error) {
    console.log(error);
  }
};



export {
  agregarArticulo,
  obtenerArticulo,
  editarArticulo,
  eliminarArticulo,
};
