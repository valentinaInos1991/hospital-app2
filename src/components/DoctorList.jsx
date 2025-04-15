import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloadFlag, setReloadFlag] = useState(false); // Estado para controlar recargas

  const fetchDoctores = async () => {
    setLoading(true); // Mostrar estado de carga
    setError(null); // Limpiar errores previos
    try {
      const response = await axios.get("https://677f1b210476123f76a5688e.mockapi.io/api1/doctors");
      setDoctors(response.data); // Actualizar el estado con los datos recibidos
    } catch (err) {
      setError("Error al cargar los datos. Por favor, intenta de nuevo."); // Mostrar el error en caso de falla
    } finally {
      setLoading(false); // Ocultar estado de carga
    }
  };

  // Optimización de useEffect
  useEffect(() => {
    fetchDoctores();
  }, [reloadFlag]); // Se ejecuta solo cuando reloadFlag cambia

  const handleReload = () => {
    setReloadFlag((prev) => !prev); // Cambia el estado para activar el useEffect
  };

  return (
    <div>
      <h2>Lista de doctores</h2>

      {/* Botón para recargar la lista */}
      <button onClick={handleReload} style={{ marginBottom: "10px" }}>
        Recargar datos doctores
      </button>

      {/* Mostrar mensaje de carga */}
      {loading && <p>Cargando datos...</p>}

      {/* Mostrar error si ocurre */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar lista de doctores */}
      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              {doctor.Nombre} - {doctor.Especialidad} - {doctor.Experiencia} años de experiencia
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No hay datos para mostrar. Haz clic en "Recargar".</p>
      )}
    </div>
  );
};

export default DoctorList;
