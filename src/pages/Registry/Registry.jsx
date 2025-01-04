import '../../styles/index.scss';
import './registry.scss';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState, useRef } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useTranslation } from 'react-i18next';
import { addUser } from '../../api/services';

const Registry = () => {
  const [donate, setDonate] = useState(10);
  const { t } = useTranslation();
  const hcaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      return alert('Proszę potwierdzić, że jesteś człowiekiem.');
    }

    addUser(formData);

    console.log('siema');
  };

  const handleClick = (pln) => setDonate(pln);

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

            {[1, 2, 3].map((item) => (
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

            <HCaptcha
              className="h-captcha"
              sitekey="dfd4a7f6-1c36-4914-b44c-0b9220d2059a" // trzeba założyc konto fundacyjne na hcaptcha.com i pobrac sitekey
              ref={hcaptchaRef}
              onVerify={handleHCaptcha}
            />

            <button className="Registry__form-button" type="submit">
              {t('REGISTRATION.FORMS_BUTTON')}
            </button>
          </form>
        </div>
      </section>

      <section className="Registry__donate">
        <div className="container Registry__donate-container">
          <h2 className="Registry__donate-title">Wesprzyj naszą inicjatywę</h2>
          <p className="Registry__donate-description">
            Przekazując darowiznę, pomagasz w realizacji zadań statutowych
            Fundacji.
          </p>

          <div className="Registry__donate__buttons">
            {[10, 20, 50, 100, 250, 500].map((amount) => (
              <button
                key={amount}
                onClick={() => handleClick(amount)}
                className={`Registry__donate__buttons-button ${
                  donate === amount
                    ? 'Registry__donate__buttons-button--active'
                    : ''
                }`}>
                {amount}
              </button>
            ))}
          </div>

          <button className="Registry__form-button" type="button">
            Przekaż darowiznę
          </button>
        </div>
      </section>
    </main>
  );
};

export default Registry;
