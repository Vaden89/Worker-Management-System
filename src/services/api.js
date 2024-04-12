import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_WORKER_MGT_URL ?? "http://localhost:8000",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

//TODO: make auth and export this to set tokens
// const setAuthorizationToken = (token) => {
//   api.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
