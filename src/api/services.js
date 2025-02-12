import axios from 'axios';
import { client } from './fetchClient.js';

const URL = import.meta.env.VITE_API_URL;

export const addUser = async (user) => {
  const response = await axios.post(URL + '/user/registerUser', user);

  return response.data;
};

export const getAcessToken = (credentials) => {
  return client.post('/api/admin/login', credentials);
};

export const getUsers = async () => {
  const token = sessionStorage.getItem('token');
  console.log(token);
  const response = await axios.get(URL + '/admin/users', {
    headers: { authorization: `Bearer ${token}` },
  });

  // const response = await axios.get('http://localhost:5000/api/admin/users');
  console.log(response.data);
  return response.data;
};

export const getImages = async () => {
  const token = sessionStorage.getItem('token');
  console.log(token);
  const response = await axios.get(URL + '/photos');

  // const response = await axios.get('http://localhost:5000/api/admin/users');
  console.log(response.data);
  return response.data;
};
