import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// 1. Crear el contexto
export const HospitalContext = createContext();

// 2. Proveer el contexto
export const HospitalProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Juan Pérez", role: "Paciente" });
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. López", specialty: "Cardiología" },
    { id: 2, name: "Dra. Gómez", specialty: "Pediatría" },
  ]);

  const [services, setServices] = useState([
    "Consulta General",
    "Cirugía Menor",
    "Laboratorio Clínico",
  ]);

  return (
    <HospitalContext.Provider value={{ user, doctors, services }}>
      {children}
    </HospitalContext.Provider>
  );
};
// Validar con PropTypes
HospitalProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };