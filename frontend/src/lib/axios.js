import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API,
//   withCredentials: true, 
  
// });
 

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? `${import.meta.env.VITE_API}/api` : "/api",
  withCredentials: true,
});