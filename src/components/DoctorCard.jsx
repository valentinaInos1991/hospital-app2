import React, { useContext, memo } from "react";
import { HospitalContext } from "../HospitalContext";
import withCounter from "../hoc/withCounter";

const DoctorCard = memo(({ count, incrementCount }) => {
  const { doctors } = useContext(HospitalContext);

  return (
    <div>
      <h3>Lista de Doctores</h3>
      {doctors.map((doctor) => (
        <div key={doctor.id} onClick={incrementCount} style={{ cursor: "pointer" }}>
          <h3>{doctor.name}</h3>
          <p>Especialidad: {doctor.specialty}</p>
        </div>
      ))}
      <p>Clicks en doctores: {count}</p>
    </div>
  );
});

export default withCounter(DoctorCard);



