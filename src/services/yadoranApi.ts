import axios from 'axios';

const yadoranApi = axios.create({
  baseURL: 'http://localhost:3333',
});

export default yadoranApi;
