import axios from 'axios';

const API = axios.create({
  baseURL: "https://api.tuhospital.com", // cambia por tu URL real
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "TU_API_KEY_AQUI" // simulado o real
  }
});

// Interceptar para agregar el token JWT automáticamente
API.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
