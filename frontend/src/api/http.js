import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3003/api/todos';

const http = axios.create({
  baseURL: BASE_URL
});

export default http;
