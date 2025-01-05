import { client } from './fetchClient.js';

export const addUser = (userData) => {
 // return client.post('/api/auth/register', userData);
 return client.post('/api/user/registerUser', userData);
};

export const getImages = () => {
  return client.get(`/api/photos`);
};
