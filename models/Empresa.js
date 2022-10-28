import mongoose from "mongoose";
import bcrypt from "bcrypt";


const empresaSchema = mongoose.Schema(
    {
      nombre: {
        type: String,
        required: true,
        trim: true,
      },
      direccion: {
        type: String,
        required: true,
        trim: true,
      },
      nit: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      telefono: {
        type: Number,
      },
    },
    {
      timestamps: true,
    }
  );

const Empresa = mongoose.model("Empresa", empresaSchema);
export default Empresa;
