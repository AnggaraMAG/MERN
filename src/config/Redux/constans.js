import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:4000/v1"
});

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_DATA_BLOG = 'UPDATE_DATA_BLOG'
export const UPDATE_PAGE = 'UPDATE_PAGE'