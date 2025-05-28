import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;
const PAYMENT_API_URL = import.meta.env.VITE_PAYMENT_API_URL;

export const getAcessToken = async (credentials) => {
  const response = await axios.post(`${URL}/admin/login`, credentials);
  return response.data;
};

export const getUsers = async () => {
  const token = sessionStorage.getItem('token');
  console.log(token);
  const response = await axios.get(URL + '/admin/users', {
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const getImages = async () => {
  const response = await axios.get(URL + '/photos');

  return response.data;
};

export const getLogos = async () => {
  const data = await axios.get(
    'https://fundacja.hematologiczna.org/api/supporters',
  );
  return data;
};

export const checkPaymentStatus = async (transactionId) => {
  const data = await axios.get(
    `${PAYMENT_API_URL}/payment/status/${transactionId}`,
  );
  return data;
};

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${URL}/user/contact`, {
      form: {
        fullName: formData.name,
        email: formData.email,
        message: formData.message,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Błąd przy wysyłaniu formularza kontaktowego:', error);
    throw error.response?.data || { status: 'failed', error: 'Nieznany błąd' };
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${URL}/user/registerUser`, userData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Błąd płatności:');
  }
};

export const createPayment = async (payload) => {
  try {
    const response = await axios.post(
      `${PAYMENT_API_URL}/payment/createPayment`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Błąd płatności:', error);
  }
};
