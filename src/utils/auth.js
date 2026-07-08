import { api } from "./api";

const TOKEN_KEY = "yuusell_token";
const USER_KEY = "yuusell_user";

export async function loginUser(email, password) {
  const data = await api("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  localStorage.setItem(TOKEN_KEY, data.accessToken);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  return data.user;
}

export async function registerUser(email, password, phone) {
  const data = await api("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, phone }),
  });
  localStorage.setItem(TOKEN_KEY, data.accessToken);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  return data.user;
}

export async function logoutUser() {
  try {
    await api("/auth/logout", { method: "POST" });
  } catch (_) {}
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || "null");
  } catch {
    return null;
  }
}
