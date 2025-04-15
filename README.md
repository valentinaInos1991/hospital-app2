*Aplicación REACT Hospital Cordis*
------------------------------------------------
* Ejercicio Práctico 2- Módulo 5 (Seguridad en la Web del Hospital)
#  Sistema Web para Hospital - Proyecto React

Este proyecto es una aplicación web desarrollada en React que simula un sistema de gestión para un hospital. Incluye funcionalidades como navegación protegida por roles, autenticación simulada, consumo de una API con datos cifrados, medidas básicas de seguridad y protección contra vulnerabilidades comunes.

---

## Tecnologías Utilizadas

- React.js
- React Router DOM
- JSON local como base de datos simulada
- Axios para llamadas a API
- CryptoJS para encriptación
- LocalStorage para persistencia de sesión

---

## Funcionalidades por Requisito

### Paso 3: Autenticación de Usuarios y Roles

- Se simulan usuarios en `src/data/users.json` con `email`, `password` y `role`.
- En el componente `Login.jsx`:
  - Se valida el usuario.
  - Se guarda el token simulado y el rol en `localStorage`.
  - Se redirige según el rol.
- Las rutas protegidas se manejan mediante `ProtectedRoute.jsx`.

###  Paso 4: Consumo de API con JWT y Encriptación

- Se utiliza Axios desde `api/api.js`.
- Se envían los datos del login encriptados con AES (usando `CryptoJS`) desde `utils/encryption.js`.
- El endpoint simulado `/login` recibe la información cifrada.

### Paso 5: Prevención de Vulnerabilidades

- **XSS (Cross Site Scripting)**: No se renderizan datos sin sanitizar desde inputs.
- **SQL Injection y DoS**: No se permite acceso directo a la API sin token simulado y no hay loops abiertos o procesamiento inseguro.

### Paso 6: Encriptación de Datos

- Se cifran los datos de login (email y contraseña) antes de ser enviados al servidor simulado.
- Se utiliza AES para cifrado simulado (no real para producción).

---

## Cómo ejecutar el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/react-hospital-app.git



