// src/components/AppointmentForm.jsx
import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    motivo: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!formData.nombre || !formData.fecha) {
        alert("Todos los campos son obligatorios");
        return;
      }
      // Simulación de envío
      console.log("Enviando datos:", formData);
    } catch (error) {
      console.error("Error al enviar cita:", error);
      alert("Hubo un problema al agendar la cita.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre del paciente" />
      <input name="fecha" value={formData.fecha} onChange={handleChange} placeholder="Fecha de cita" />
      <input name="motivo" value={formData.motivo} onChange={handleChange} placeholder="Motivo" />
      <button type="submit">Agendar</button>
    </form>
  );
};

export default AppointmentForm;
