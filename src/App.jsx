import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import MedicalTeam from "./views/MedicalTeam";
import Appointments from "./views/Appointments";
import EquipoMedico from "./views/EquipoMedico";
import Servicios from "./views/Servicios";
import logo from "./assets/logo-horizontal.png";
import DoctorList from "./components/DoctorList";
import React, { useState } from "react";
import ProtectedRoute from './routes/ProtectedRoute';
import Login from "./views/Login";

function App() {
  // Estado simulado de autenticación (más adelante lo conectaremos con login real)
  const [isAuthenticated, setIsAuthenticated] = useState(true); // cambiar a false para probar redirección

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <img
            src={logo}
            alt="Logo del Hospital"
            style={{ display: "inline-block", width: "150px" }}
          />
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/equipo-medico">Equipo Médico</Link></li>
            <li><Link to="/citas">Citas</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            {/* Botón de login en la navbar */}
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <div>
          <DoctorList />
        </div>

        {/* Configuración de Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Rutas protegidas */}
          <Route 
            path="/equipo-medico" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <EquipoMedico />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/citas" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Appointments />
              </ProtectedRoute>
            } 
          />

          {/* Rutas públicas */}
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
