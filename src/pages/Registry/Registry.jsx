import '../../styles/index.scss';
import './registry.scss';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useTranslation } from 'react-i18next';
import { addUser } from '../../api/services';

const Registry = () => {
  const [donate, setDonate] = useState(10);
  const { t } = useTranslation();
  const [isVerified, setIsVerified] = useState(false);
  const [captchaSize, setCaptchaSize] = useState('normal');
  const hCaptchaSiteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;
  const p24Images = Array.from({ length: 25 }, (_, i) => i + 1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    street: '',
    buildingNumber: '',
    zipCode: '',
    city: '',
  });

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

    addUser(formData);
  };

  const handleClick = (pln) => setDonate(pln);

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

      <section className="Registry__form">
        <div className="container Registry__form-container">
          <h2 className="Registry__form-title">
            {t('REGISTRATION.FORM_TITLE')}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="Registry__form__fieldsGrid">
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
                <div className="Registry__form-field" key={name}>
                  <label className="Registry__form-label">{label}</label>
                  <input
                    className="Registry__form-input"
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>

            <div className="Registry__form__checkbox">
              <Checkbox />
              <p className="Registry__form__checkbox-description">
                {t(`REGISTRATION.FORM_RIGHTS.1.1`)}

                <NavLink
                  className="Registry__form__checkbox-description 
                  Registry__form__checkbox-description--link"
                  to={'/klauzula-informacyjna'}>
                  {t(`REGISTRATION.FORM_RIGHTS.1.2`)}
                </NavLink>

                {t(`REGISTRATION.FORM_RIGHTS.1.3`)}

                <NavLink
                  className="Registry__form__checkbox-description 
                  Registry__form__checkbox-description--link"
                  to={'/regulamin'}>
                  {t(`REGISTRATION.FORM_RIGHTS.1.4`)}
                </NavLink>

                {t(`REGISTRATION.FORM_RIGHTS.1.5`)}
              </p>
            </div>

            {[2, 3].map((item) => (
              <div className="Registry__form__checkbox" key={item}>
                <Checkbox />
                <p className="Registry__form__checkbox-description">
                  {t(`REGISTRATION.FORM_RIGHTS.${item}`)}
                </p>
              </div>
            ))}

            <p className="Registry__form-description">
              {t('REGISTRATION.MESSAGE_TEXT')}
            </p>

            <p className="Registry__form-required">
              {t('REGISTRATION.MESSAGE_REQUIRED')}
            </p>

            <HCaptcha
              className="h-captcha"
              sitekey={hCaptchaSiteKey} // trzeba założyc konto fundacyjne na hcaptcha.com i pobrac sitekey
              ref={hcaptchaRef}
              onVerify={handleHCaptcha}
              size={captchaSize}
            />

            <button className="Registry__form-button" type="submit">
              {t('REGISTRATION.FORMS_BUTTON')}
            </button>
          </form>
        </div>
      </section>

      <section className="Registry__donate" id="platnosci">
        <div className="container Registry__donate-container">
          <h2 className="Registry__donate-title">
            {' '}
            {t('REGISTRATION.DONATE_TITLE')}
          </h2>
          <p className="Registry__donate-description">
            {t('REGISTRATION.DONATE_DESCRIPTION')}
          </p>

          <div className="Registry__donate__buttons">
            {[100, 200, 250, 400, 500, 1000].map((amount) => (
              <button
                key={amount}
                onClick={() => handleClick(amount)}
                className={`Registry__donate__buttons-button ${
                  donate === amount
                    ? 'Registry__donate__buttons-button--active'
                    : ''
                }`}>
                {`${amount} zł`}
              </button>
            ))}
          </div>

          <button className="Registry__form-button" type="button">
            {t('REGISTRATION.DONATE_BUTTON')}
          </button>
        </div>
      </section>

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
                src={`./Przelewy24-logo/P24-method-${i}.webp`}
                alt={`p24-method ${i}`}
                key={`p24-method img ${i}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Registry;
