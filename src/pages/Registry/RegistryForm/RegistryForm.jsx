import '../../../styles/index.scss';
import '../registry.scss';
import './registryForm.scss';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { useTranslation } from 'react-i18next';
import { addUser } from '../../../api/services';
import PropTypes from 'prop-types';

export const RegistryForm = ({ setModal }) => {
  const { i18n, t } = useTranslation();
  const [isVerified, setIsVerified] = useState(false);
  const [captchaSize, setCaptchaSize] = useState('normal');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    street: '',
    buildingNumber: '',
    zipCode: '',
    city: '',
    lang: i18n.language,
    consents: {
      privacyPolicyAndRegulaminAccepted: false,
      dataProcessingConsentAccepted: false,
      marketingConsentAccepted: false,
    },
  });

  const hCaptchaSiteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

  const handleConsentChange = (e) => {
    const { name, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      consents: {
        ...prevData.consents,
        [name]: checked,
      },
    }));
  };

  const handleHCaptcha = () => {
    const res = hcaptchaRef.current.getResponse();

    if (res) {
      setIsVerified(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const hcaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      return alert('Proszę potwierdzić, że jesteś człowiekiem.');
    }

    try {
      const response = await addUser(formData);

      if (response && response.status === 'success') {
        setModal({
          isOpen: true,
          event: 'registration-success',
          url: response.paymentUrl,
        });
        setFormData({
          name: '',
          email: '',
          street: '',
          buildingNumber: '',
          zipCode: '',
          city: '',
          lang: i18n.language,
          consents: {
            privacyPolicyAndRegulaminAccepted: false,
            dataProcessingConsentAccepted: false,
            marketingConsentAccepted: false,
          },
        });
      } else {
        setModal({
          isOpen: true,
          event: 'registration-failed',
        });
      }
    } catch (error) {
      setModal({
        isOpen: true,
        event: 'registration-failed',
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCaptchaSize(window.innerWidth < 1200 ? 'compact' : 'normal');
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="RegistryForm">
      <div className="container RegistryForm-container">
        <h2 className="RegistryForm-title">{t('REGISTRATION.FORM_TITLE')}</h2>

        <form onSubmit={handleSubmit}>
          <div className="RegistryForm__fieldsGrid">
            {[
              {
                label: t('REGISTRATION.FORM_FULLNAME'),
                name: 'name',
                type: 'text',
              },
              {
                label: t('REGISTRATION.FORM_EMAIL'),
                name: 'email',
                type: 'email',
              },
              {
                label: t('REGISTRATION.FORM_STREET'),
                name: 'street',
                type: 'text',
              },
              {
                label: t('REGISTRATION.FORM_BUILDING'),
                name: 'buildingNumber',
                type: 'text',
              },
              {
                label: t('REGISTRATION.FORM_INDEX'),
                name: 'zipCode',
                type: 'text',
              },
              {
                label: t('REGISTRATION.FORM_CITY'),
                name: 'city',
                type: 'text',
              },
            ].map(({ label, name, type }) => (
              <div className="RegistryForm-field" key={name}>
                <label className="RegistryForm-label">{label}</label>
                <input
                  className="RegistryForm-input"
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          </div>

          <div className="RegistryForm__checkbox">
            <Checkbox
              name="privacyPolicyAndRegulaminAccepted"
              checked={formData.consents.privacyPolicyAndRegulaminAccepted}
              onChange={handleConsentChange}
            />
            <p className="RegistryForm__checkbox-description">
              {t(`REGISTRATION.FORM_RIGHTS.1.1`)}

              <NavLink
                className="RegistryForm__checkbox-description 
                  RegistryForm__checkbox-description--link"
                to={'/klauzula-informacyjna'}>
                {t(`REGISTRATION.FORM_RIGHTS.1.2`)}
              </NavLink>

              {t(`REGISTRATION.FORM_RIGHTS.1.3`)}

              <NavLink
                className="RegistryForm__checkbox-description 
                  RegistryForm__checkbox-description--link"
                to={'/regulamin'}>
                {t(`REGISTRATION.FORM_RIGHTS.1.4`)}
              </NavLink>

              {t(`REGISTRATION.FORM_RIGHTS.1.5`)}
            </p>
          </div>

          <div className="RegistryForm__checkbox">
            <Checkbox
              name="dataProcessingConsentAccepted"
              checked={formData.consents.dataProcessingConsentAccepted}
              onChange={handleConsentChange}
            />

            <p className="RegistryForm__checkbox-description">
              {t(`REGISTRATION.FORM_RIGHTS.2`)}
            </p>
          </div>

          <div className="RegistryForm__checkbox">
            <Checkbox
              name="marketingConsent"
              checked={formData.consents.marketingConsentAccepted}
              onChange={handleConsentChange}
              required={false}
            />
            <p className="RegistryForm__checkbox-description">
              {t(`REGISTRATION.FORM_RIGHTS.3`)}
            </p>
          </div>

          <p className="RegistryForm-description">
            {t('REGISTRATION.MESSAGE_TEXT')}
          </p>

          <p className="RegistryForm-required">
            {t('REGISTRATION.MESSAGE_REQUIRED')}
          </p>

          <HCaptcha
            className="h-captcha"
            sitekey={hCaptchaSiteKey} // trzeba założyc konto fundacyjne na hcaptcha.com i pobrac sitekey
            ref={hcaptchaRef}
            onVerify={handleHCaptcha}
            size={captchaSize}
          />

          <button className="RegistryForm-button" type="submit">
            {t('REGISTRATION.FORMS_BUTTON')}
          </button>
        </form>
      </div>
    </section>
  );
};

RegistryForm.propTypes = {
  setModal: PropTypes.func.isRequired,
};
