import '../../../styles/index.scss';
import './registryDonateForm.scss';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createPayment } from '../../../api/services';
import PropTypes from 'prop-types';

export const RegistryDonateForm = ({ setModal }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(100);
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAmount = (pln) => setAmount(pln);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      amount: amount * 100,
      email,
      referrer: 'gala',
      returnUrl: 'https://gala.fundacja.hematologiczna.org/rejestracja',
    };

    try {
      const response = await createPayment(payload);

      console.log(response);

      if (response && response.url) {
        setAmount(100);
        setEmail('');
        window.open(response.url, '_blank');
      } else {
        setModal({
          isOpen: true,
          event: 'payment-failed',
        });
      }
    } catch (error) {
      console.log(error);
      setModal({
        isOpen: true,
        event: 'payment-failed',
      });
    }
  };

  return (
    <form className="RegistryDonateForm" id="platnosci" onSubmit={handleSubmit}>
      <div className="container RegistryDonateForm-container">
        <h2 className="RegistryDonateForm-title">
          {' '}
          {t('REGISTRATION.DONATE_TITLE')}
        </h2>
        <p className="RegistryDonateForm-description">
          {t('REGISTRATION.DONATE_DESCRIPTION')}
        </p>

        <div className="RegistryDonateForm__buttons">
          {[100, 200, 250, 400, 500, 1000].map((value) => (
            <button
              type="button"
              key={value}
              onClick={() => handleAmount(value)}
              className={`RegistryDonateForm__buttons-button ${
                amount === value
                  ? 'RegistryDonateForm__buttons-button--active'
                  : ''
              }`}>
              {`${value} zł`}
            </button>
          ))}
        </div>

        <div className="RegistryDonateForm__field">
          <label className="RegistryDonateForm__field-label">
            {t('REGISTRATION.DONATE_INPUT_AMOUNT')}
          </label>
          <input
            className="RegistryDonateForm__field-input"
            type="number"
            name="amount"
            min="1"
            value={amount}
            onChange={(e) => handleAmount(Number(e.target.value))}
            required
          />
        </div>

        <div className="RegistryDonateForm__field">
          <label className="RegistryDonateForm__field-label">
            {t('REGISTRATION.FORM_EMAIL')}
          </label>
          <input
            className="RegistryDonateForm__field-input"
            type="email"
            name="donate-email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <button className="RegistryDonateForm-button" type="submit">
          {t('REGISTRATION.DONATE_BUTTON')}
        </button>
      </div>
    </form>
  );
};

RegistryDonateForm.propTypes = {
  setModal: PropTypes.func.isRequired,
};
