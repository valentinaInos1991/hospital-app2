import React, { useState, useRef } from "react";
import { sanitizeInput } from "../utils/sanitizeInput";

const limpio = sanitizeInput(input);
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    fecha: "",
    doctor: "",
  });

  // Crea una referencia para el campo de "nombre"
  const nameInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita Agendada", formData);
    alert("Cita Agendada Correctamente");
  };

  // Función para enfocar el campo de nombre
  const focusNameField = () => {
    nameInputRef.current.focus();
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Agendar Cita</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          ref={nameInputRef} // Asocia la referencia al campo
          required
        />
      </label>
      <label>
        Fecha:
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Doctor:
        <input
          type="text"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Agendar</button>
      <button type="button" onClick={focusNameField}>
        Enfocar Nombre
      </button>
    </form>
  );
};

export default AppointmentForm;
