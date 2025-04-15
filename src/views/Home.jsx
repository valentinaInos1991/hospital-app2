import React, { useRef } from "react";

const Home = () => {
  const serviciosRef = useRef(null);
  const infoRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToSection(infoRef)}>Información del Hospital</button>
        <button onClick={() => scrollToSection(serviciosRef)}>Servicios Destacados</button>
      </nav>
      <section ref={infoRef} style={{ margin: "50px 0", padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h1>Información del Hospital</h1>
        <p>
          Somos un hospital comprometido con la salud y el bienestar de nuestros pacientes.
          Contamos con personal altamente capacitado y la mejor tecnología médica.
        </p>
      </section>
      <section ref={serviciosRef} style={{ margin: "50px 0", padding: "20px", backgroundColor: "#e8f8f5" }}>
        <h2>Servicios Destacados</h2>
        <ul>
          <li>Cardiología</li>
          <li>Pediatría</li>
          <li>Neurología</li>
          <li>Radiología</li>
        </ul>
      </section>
    </>
  );
};

export default Home;
