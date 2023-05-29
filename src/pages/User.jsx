import React, { useState, useEffect } from "react";
import "../styles/PagesStyles/AdministrarInfo.css";
import { Navigate } from "react-router-dom";

const User = ({ usuario }) => {
  const [name, setName] = useState(usuario.name);
  const [isEditing, SetIsEditing] = useState(false);
  const editarUsuario = (name) => {
    console.log("Editando usuario:", nombre);
  };
  const eliminarUsuario = (nombre) => {
    console.log("Eliminando usuario:", nombre);
  };
  return (
    <div key={usuario.nombre} className="usuarioFinal">
      <div className="usuarioUnidoID">
        <div className="usuarioIzq">
          <i class="fa-solid fa-user fs-1 me-3 opciones"></i>
        </div>
        <div className="usuarioDer">
          <div className="datosUsuario">
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>Nombre: </p>
              <input disabled={!isEditing} type="text" value={name} />
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>CI: </p>
              <input disabled type="text" value={usuario.nit} />
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>Teléfono: </p>
              <input disabled type="text" value={usuario.phone} />
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>Correo: </p>
              <input disabled type="text" value={usuario.email} />
            </div>
          </div>
        </div>
      </div>
      <div className="botonUsuario">
        <button
          class="btn btn-primary m-2"
          onClick={() => editarUsuario(usuario.nombre)}
        >
          Editar
        </button>
        <button
          class="btn btn-primary m-2"
          onClick={() => eliminarUsuario(usuario.nombre)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default User;
