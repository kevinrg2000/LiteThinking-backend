import mongoose from "mongoose";
import bcrypt from "bcrypt";


const articulosSchema = mongoose.Schema(
    {
      nombre: {
        type: String,
        required: true,
        trim: true,
      },
      estado: {
        type: Boolean,
        default: false,
      },
      descripcion: {
        type: String,
        trim: true,
        required: true,
      },
      precio:{
        type: Number,
        trim:true,
        required:true
      },
      empresa:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
      }
    },
    {
      timestamps: true,
    }
  );

const Articulos = mongoose.model("Articulo", articulosSchema);
export default Articulos;