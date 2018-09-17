"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const permisoxTipoUsuarioSchema = Schema(
  {
    IDTipoUsuario: Number,
    Modulos: [
      {
        ID: String,
        SubModulos: [
          {
            ID: String
          }
        ]
      }
    ]
  },
  { collection: "PermisosxTiposUsuarios" }
);

module.exports = mongoose.model(
  "PermisoxTipoUsuario",
  permisoxTipoUsuarioSchema
);
