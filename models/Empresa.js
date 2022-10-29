import mongoose from "mongoose";



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
        required: true,
        trim: true,
      },
      creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
      },
      articulos:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Usuario",
        },
      ],
      
    },
    {
      timestamps: true,
    }
  );

const Empresa = mongoose.model("Empresa", empresaSchema);
export default Empresa;
