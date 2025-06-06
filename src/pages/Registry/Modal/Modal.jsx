import './modal.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, event }) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const { t } = useTranslation();

  const target = document.getElementById('platnosci');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {event === 'registration-success' && (
        <div className="modal">
          <h2 className="modal-title" style={{ whiteSpace: 'pre-line' }}>
            {t('REGISTRATION.MODAL.REGISTRATION_SUCCESS_TITLE')}
          </h2>
          <p className="modal-description">
            {t('REGISTRATION.MODAL.REGISTRATION_SUCCESS_DESC')}
          </p>
          <button
            className="modal-button modal-button--white"
            onClick={onClose}>
            {t('REGISTRATION.MODAL.PAY_LATER')}
          </button>
          <button
            className="modal-button modal-button--green"
            onClick={() => {
              onClose();
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            {t('REGISTRATION.MODAL.PAY_NOW')}
          </button>
        </div>
      )}

      {event === 'registration-failed' && (
        <div className="modal">
          <h2 className="modal-title">
            {t('REGISTRATION.MODAL.REGISTRATION_FAILED_TITLE')}
          </h2>
          <p className="modal-description">
            {t('REGISTRATION.MODAL.REGISTRATION_FAILED_DESC')}
          </p>
          <button
            className="modal-button modal-button--white"
            onClick={onClose}>
            {t('REGISTRATION.MODAL.BACK')}
          </button>
        </div>
      )}

      {event === 'payment-success' && (
        <div className="modal">
          <h2 className="modal-title">
            {t('REGISTRATION.MODAL.PAYMENT_SUCCESS_TITLE')}
          </h2>
          <p className="modal-description">
            {t('REGISTRATION.MODAL.PAYMENT_SUCCESS_DESC')}
          </p>
          <button
            className="modal-button modal-button--white"
            onClick={onClose}>
            {t('REGISTRATION.MODAL.BACK')}
          </button>
        </div>
      )}

      {event === 'payment-pending' && (
        <div className="modal">
          <h2 className="modal-title">
            {t('REGISTRATION.MODAL.PAYMENT_PENDING_TITLE')}
          </h2>
          <p className="modal-description">
            {t('REGISTRATION.MODAL.PAYMENT_PENDING_DESC')}
          </p>
          <div className="modal-timer">
            {t('REGISTRATION.MODAL.TIME_LEFT')}:{' '}
            <strong>{formatTime(timeLeft)}</strong>
          </div>
          <div className="loader" />
          <button
            className="modal-button modal-button--white"
            onClick={onClose}>
            {t('REGISTRATION.MODAL.BACK')}
          </button>
        </div>
      )}

      {event === 'payment-failed' && (
        <div className="modal">
          <h2 className="modal-title">
            {t('REGISTRATION.MODAL.PAYMENT_FAILED_TITLE')}
          </h2>
          <p className="modal-description">
            {t('REGISTRATION.MODAL.PAYMENT_FAILED_DESC')}
          </p>
          <button
            className="modal-button modal-button--white"
            onClick={onClose}>
            {t('REGISTRATION.MODAL.BACK')}
          </button>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  url: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.oneOf([
    'registration-success',
    'registration-failed',
    'payment-success',
    'payment-pending',
    'payment-failed',
    '',
  ]).isRequired,
};

export default Modal;
