import axios from 'axios';
import { client } from './fetchClient.js';

export const addUser = (userData) => {
  return client.post('/api/user/registerUser', userData);
};

export const getImages = () => {
  return client.get(`/api/photos`);
};

export const getAcessToken = (credentials) => {
  return client.post('/api/admin/login', credentials);
};

// export const getUsers = () => {
//   return client.get('/api/admin/users');
// };

export const getUsers = async () => {
  const token = sessionStorage.getItem('token');
  console.log(token);
  const response = await axios.get('http://localhost:5000/api/admin/users', {
    headers: { authorization: `Bearer ${token}` },
  });

  // const response = await axios.get('http://localhost:5000/api/admin/users');
  console.log(response.data);
  return response.data;
};
