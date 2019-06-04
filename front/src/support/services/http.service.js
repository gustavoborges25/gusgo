import axios from 'axios';
import Login from 'Domain/Login/Login';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use((config) => {
  const configure = config;
  const token = Login.getToken();
  if (token) {
    configure.headers.Authorization = `Bearer ${token}`;
  }
  return configure;
});

export default instance;
