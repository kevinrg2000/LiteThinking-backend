import Empresa from "../models/Empresa.js";
import Usuario from "../models/Usuario.js";

const nuevoEmpresa = async (req, res) => {
  console.log('si entra');
  const empresa = new Proyecto(req.body);
  empresa.creador = req.usuario._id;

  try {
    const empresaAlmacenado = await empresa.save();
    res.json(empresaAlmacenado);
  } catch (error) {
    console.log(error);
  }
  
};
const obtenerEmpresas = async (req, res) => {
  
};


const obtenerEmpresa = async (req, res) => {
  
};

const editarEmpresa = async (req, res) => {
  
  
};

const eliminarEmpresa = async (req, res) => {
  
  
};

const buscarArticulo = async (req, res) => {
  
};

const agregarArticulo = async (req, res) => {
  
};

const eliminarArticulo = async (req, res) => {
  
};

export {
  obtenerEmpresas,
  nuevoEmpresa,
  obtenerEmpresa,
  editarEmpresa,
  eliminarEmpresa,
  buscarArticulo,
  agregarArticulo,
  eliminarArticulo,
};
