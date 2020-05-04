import axios from "axios";

 

const baseURL = process.env.NODE_ENV === ('development' || 'test') ? 'http://127.0.0.1:8000' : '';


export const axiosClient = axios.create({
  baseURL,
});
