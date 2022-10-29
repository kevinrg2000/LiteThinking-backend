import mongoose from "mongoose";
import bcrypt from "bcrypt";


const articulosSchema = mongoose.Schema(
    {
      nombre: {
        type: String,
        required: true,
        trim: true,
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

const Articulos = mongoose.model("Articulos", articulosSchema);
export default Articulos;
