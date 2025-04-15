import React, { useState } from "react";
import DoctorCard from "../components/DoctorCard";

const MedicalTeam = () => {
  const doctors = [
    { id: 1, nombre: "Dr. Carlos", especialidad: "Cardiología" },
    { id: 2, nombre: "Dra. Ana", especialidad: "Pediatría" },
    { id: 3, nombre: "Dr. Roberto", especialidad: "Neurología" },
  ];

  const [filtro, setFiltro] = useState("");

  const filtrarDoctores = doctors.filter((doctor) =>
    doctor.especialidad.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h1>Equipo Médico</h1>
      <label>
        Filtrar por Especialidad:
        <input
          type="text"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Ejemplo: Cardiología"
        />
      </label>
      <div>
        {filtrarDoctores.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default MedicalTeam;

