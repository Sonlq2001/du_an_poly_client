import axios from 'axios';

const requestInterceptor = (req) => {
  return req;
};

const responseInterceptor = (res) => {
  return res;
};

const api = axios.create({
  baseURL: 'http://api.duanpoly.ml/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(responseInterceptor);

export default api;
