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
  !empresa? res.status(400).json({msg: "No Encontrado"}): 
  res.json(empresa);
  

};

const editarEmpresa = async (req, res) => {
  const {id} = req.params;
  const empresa = await Empresa.findById(id)
  if(!empresa) 
    res.status(400).json({msg: "No Encontrado"})
    else{
      empresa.nombre = req.body.nombre || empresa.nombre
      empresa.direccion = req.body.direccion || empresa.direccion
      empresa.nit = req.body.nit || empresa.nit
      empresa.telefono = req.body.telefono || empresa.telefono
    }
    try {
      const empresaAlmacenada = await empresa.save()
      res.json(empresa);
  } catch (error) {
    console.log(error);
  }
};

const eliminarEmpresa = async (req, res) => {
  const {id} = req.params;
  const empresa = await Empresa.findById(id)
  if(!empresa) 
    res.status(400).json({msg: "No Encontrado"})
    else{
      empresa.nombre = req.body.nombre || empresa.nombre
      empresa.direccion = req.body.direccion || empresa.direccion
      empresa.nit = req.body.nit || empresa.nit
      empresa.telefono = req.body.telefono || empresa.telefono
    }
    try {
      await empresa.deleteOne()
      res.json({msg: "empresa eliminada"});
  } catch (error) {
    console.log(error);
  }
  
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
