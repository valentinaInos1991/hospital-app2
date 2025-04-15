// src/components/DoctorList.jsx
import React, { useState, useEffect } from 'react';
import API from '../api/api';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/doctores')
      .then(res => setDoctors(res.data))
      .catch(err => console.error("Error al cargar doctores:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <ul>
      {doctors.map(doc => (
        <li key={doc.id}>{doc.nombre}</li>
      ))}
    </ul>
  );
};

export default DoctorList;
