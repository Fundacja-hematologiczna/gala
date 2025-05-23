import '../../styles/index.scss';
import './registry.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { checkPaymentStatus } from '../../api/services';
import Modal from './Modal/Modal.jsx';
import { RegistryDonateForm } from './RegistryDonateForm/RegistryDonateForm.jsx';

import { RegistryForm } from './RegistryForm/RegistryForm.jsx';

const Registry = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [modal, setModal] = useState({
    isOpen: false,
    event: '',
  });

  useEffect(() => {
    const transactionId = searchParams.get('transactionId');
    const status = searchParams.get('status');

    if (transactionId && status) {
      setModal({ isOpen: true, event: 'payment-pending' });
      pollPaymentStatus(transactionId);
    }
  }, []);

  const p24Images = Array.from({ length: 25 }, (_, i) => i + 1);

  const pollPaymentStatus = async (transactionId) => {
    const maxAttempts = 15;
    let attempts = 0;

    const interval = setInterval(async () => {
      attempts++;

      if (attempts >= maxAttempts) {
        clearInterval(interval);

        setModal({ isOpen: true, event: 'payment-failed' });
      }

      try {
        const res = await checkPaymentStatus(transactionId);

        const currentStatus = res?.data?.status;

        if (currentStatus === 'success') {
          clearInterval(interval);
          setModal({ isOpen: true, event: 'payment-success' });
        } else if (currentStatus === 'failure') {
          clearInterval(interval);
          setModal({ isOpen: true, event: 'payment-failed' });
        }
      } catch (err) {
        console.error('Błąd przy sprawdzaniu statusu płatności:');
      }
    }, 60 * 1000);
  };

  return (
    <main className="Registry">
      <div className="Registry-container">
        <div className="Registry__topContainer">
          <div className="Registry__topContainer-img" />

          <div className="Registry__topContainer-content">
            <h1 className="Registry__topContainer-title">
              {t('REGISTRATION.HEADER_TITLE')}
            </h1>
            <p className="Registry__topContainer-description">
              {t('REGISTRATION.HEADER_BODY')}
            </p>
          </div>
        </div>
      </div>

      <RegistryForm setModal={setModal} />
      <RegistryDonateForm setModal={setModal} />

      <section className="Registry__logos">
        <div className="container">
          <div className="Registry__logos__p24">
            <p className="Registry__logos__p24-text">
              {t('REGISTRATION.PAYMENTSUPPORT')}
            </p>
            <img
              className="Registry__logos__p24-img"
              src="Przelewy24-logo/P24-logo.webp"
              alt="logo-p24"
            />
          </div>

          <div className="Registry__logos__paymentImages">
            {p24Images.map((i) => (
              <img
                className="Registry__logos__paymentImages-img"
                src={`./Przelewy24-logo/P24-method-${i}.png`}
                alt={`p24-method ${i}`}
                key={`p24-method img ${i}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <Modal
        event={modal.event}
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false })}
      />
    </main>
  );
};

export default Registry;
