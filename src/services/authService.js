import users from "../data/users.json";

// Esta función simula el login
export function loginUser(username, password) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Simulamos un "token" y guardamos también el rol
    const token = `fake-jwt-token-${user.id}`;
    localStorage.setItem("token", token);
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("user", JSON.stringify(user));

    return { success: true, user, token };
  } else {
    return { success: false, message: "Credenciales incorrectas" };
  }
}
