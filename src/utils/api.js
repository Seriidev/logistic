const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const api = async (path, options = {}) => {
  const token = localStorage.getItem("yuusell_token");

  const res = await fetch(BASE_URL + path, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Request failed" }));
    throw error;
  }

  return res.json();
};
