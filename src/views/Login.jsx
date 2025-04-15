// src/views/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";
import { encryptData } from "../utils/encryption";
import API from "../api/api";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      const token = "fake-jwt-token";
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);
      setIsAuthenticated(true);

      // 🔐 Enviar datos cifrados al backend simulado
      const encrypted = encryptData({ email, password });
      try {
        await API.post("/login", { data: encrypted });
      } catch (err) {
        console.error("Error en el login:", err);
      }

      // Redirigir según el rol
      if (user.role === "admin") {
        navigate("/equipo-medico");
      } else {
        navigate("/citas");
      }
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
