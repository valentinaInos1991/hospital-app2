import React, { useState, useEffect } from "react";
import axios from "axios";

const EquipoMedico = () => {
  const [equipo, setEquipo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular la carga de datos
    const fetchDoctores = async () => {
      try{
        const response = await axios.get("https://677f1b210476123f76a5688e.mockapi.io/api1/doctors");
        setEquipo(response.data);
        setLoading(false);
      } catch (error){
        console.error("Error al cargar los doctores", error);
        setLoading(false);
      }
  };
  fetchDoctores();
}, []);
if (loading) return <p>Cargando datos...</p>

  return (
    <div>
      <h2>Equipo Médico</h2>
      {equipo.map((doctor) => (
        <div key={doctor.id}>
          <h3>Nombre:{doctor.Nombre}</h3>
          <p>Especialidad: {doctor.Especialidad}</p>
          <p>Años de Experiencia: {doctor.Experiencia}</p>
        </div>
      ))}
    </div>
  );
};

export default EquipoMedico;
