import axios from 'axios';

const API = axios.create({
  baseURL: 'https://course-backend.herokuapp.com', // URL back
});

export default API;
