import api from "services/api";

export default async function signInService({ password }) {
  const response = await api.post("/sessions", { password });
  return response;
}
