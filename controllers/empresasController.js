import Empresa from "../models/Empresa.js";
import Usuario from "../models/Usuario.js";

const nuevoEmpresa = async (req, res) => {
  const empresa = new Empresa(req.body);
  empresa.creador = req.usuario._id;

  try {
    const empresaAlmacenado = await empresa.save();
    res.json(empresaAlmacenado);
  } catch (error) {
    console.log(error);
  }
  
};
const obtenerEmpresas = async (req, res) => {
  const empresas = await Empresa.find().where('creador').equals(req.usuario)
  res.json(empresas);
};


const obtenerEmpresa = async (req, res) => {
  const {id} = req.params;
  const empresa = await Empresa.findById(id)
  !proyecto? res.status(400).json({msg: "No Encontrado"}): 
  res.json(empresa);
  

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
