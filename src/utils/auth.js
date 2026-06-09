const AUTH_KEY = "yuusell_authenticated";

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function loginUser() {
  localStorage.setItem(AUTH_KEY, "true");
}

export function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
}
