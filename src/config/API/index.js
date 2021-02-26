import axios from "axios";


export const API = axios.create({
  baseURL: "http://localhost:4000/v1"
});

export const GET_DATA = async (name, page) => {
  const result = await API.get(`/${name}?page=${page}&perPage=2`).then((res) => res)
    .catch((error) => error.response);
  return result
}

export const UPDATE_DATA = async (name, form, header) => {
  const result = await API.post(`/${name}`, form, header).then((res) => res)
    .catch((error) => error.response);
  return result
}