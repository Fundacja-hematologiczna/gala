import axios from 'axios';
import { useState } from 'react';
//import { Button } from '@/components/ui/button';

export const PaymentButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const paymentData = {
      userId: '12345',
      referrer: 'gala',
      amount: 111,
      email: 'some@gmail.com',
      description: 'Testowa płatność',
      returnUrl: 'https://pnet.pl',
    };

    //const jsonData = JSON.stringify(paymentData);

    try {
      const response = await axios.post(
        'https://payments.fundacja.hematologiczna.org/api/payment/createPayment',
        paymentData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      console.log('Płatność rozpoczęta:', response.data);

      if (response.data?.url) {
        window.open(response.data.url, '_blank');
      }
    } catch (error) {
      console.error('Błąd płatności:', error);
      console.error('Błąd płatności:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? 'Przetwarzanie...' : 'Zapłać'}
    </button>
  );
};
