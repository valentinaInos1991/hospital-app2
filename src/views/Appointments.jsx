import React, { useState, useEffect } from "react";

const Appointments = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !fecha) {
      setMensaje("Por favor, completa todos los campos.");
    } else {
      setMensaje(`Cita agendada para ${nombre} el ${fecha}`);
      setNombre("");
      setFecha("");
    }
  };

  return (
    <div>
      <h1>Agendar Citas</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </label>
        <br />
        <label>
          Fecha:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Agendar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
    
  );
};

export default Appointments;
