import React, { useState, useEffect } from "react";
import { servicios } from "../data/data"; // Asegúrate de que la ruta sea correcta

const Servicios = () => {
  const [listaServicios, setListaServicios] = useState([]);

  useEffect(() => {
    // Simular la carga de datos
    const cargarServicios = () => {
      setTimeout(() => {
        setListaServicios(servicios); // Cargar los datos estáticos
      }, 500); // Simular un retraso
    };

    cargarServicios();
  }, []);

  if (listaServicios.length === 0) return <p>Cargando servicios...</p>;

  return (
    <div>
      <h2>Servicios</h2>
      <ul>
        {listaServicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
      </ul>
    </div>
  );
};

export default Servicios;
