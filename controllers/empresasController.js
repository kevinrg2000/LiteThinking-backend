import Articulos from "../models/Articulos.js";
import Empresa from "../models/Empresa.js";
import {jsPDF} from "jspdf"

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
  const articulos = await Articulos.find().where("empresas").equals(empresa._id) 
  const doc = new jsPDF()
  if(!empresa) 
    res.status(400).json({msg: "No Encontrado"}) 
    else{
      let jsonObject = {empresa, articulos}
      
      for(let i=0; i<articulos.length; i++){
        doc.text(10, 10 + (i * 10),
        " NOMBRE : "+ articulos[i].nombre+
        " empresa : "+ empresa.nombre);
      };
      const pdfName = empresa.nombre+'.pdf'
      doc.save(pdfName)
      res.json({empresa, articulos});
    }
  

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



export {
  obtenerEmpresas,
  nuevoEmpresa,
  obtenerEmpresa,
  editarEmpresa,
  eliminarEmpresa,
};
