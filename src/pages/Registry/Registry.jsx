import '../../styles/index.scss';
import './registry.scss';
import { useState } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import { addUser } from '../../api/services';
import { useTranslation } from 'react-i18next';

const Registry = () => {
  const [donate, setDonate] = useState(10);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    street: '',
    buildingNumber: '',
    zipCode: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('x');
    addUser(formData);
  };

  const handleClick = (pln) => {
    setDonate(pln);
  };

  return (
    <>
      <main className="Registry">
        <div className="Registry-container">
          <div className="Registry__topContainer">
            <div className="Registry__topContainer-img"></div>

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
                <div className="Registry__form-field ">
                  <label className="Registry__form-label">
                    {t('REGISTRATION.FORM_FULLNAME')}
                  </label>
                  <input
                    className="Registry__form-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Registry__form-field Contact__form-field--2">
                  <label className="Registry__form-label">
                    {t('REGISTRATION.FORM_EMAIL')}
                  </label>
                  <input
                    className="Registry__form-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Registry__form-field ">
                  <label className="Contact__form-label">
                    {t('REGISTRATION.FORM_STREET')}
                  </label>
                  <input
                    className="Registry__form-input"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Registry__form-field ">
                  <label className="Contact__form-label">
                    {t('REGISTRATION.FORM_BUILDING')}
                  </label>
                  <input
                    className="Registry__form-input"
                    name="buildingNumber"
                    value={formData.buildingNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Registry__form-field ">
                  <label className="Contact__form-label">
                    {t('REGISTRATION.FORM_INDEX')}
                  </label>
                  <input
                    className="Registry__form-input"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Registry__form-field ">
                  <label className="Contact__form-label">
                    {t('REGISTRATION.FORM_CITY')}
                  </label>
                  <input
                    className="Registry__form-input"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="Registry__form__checkbox">
                <Checkbox />
                <p className="Registry__form__checkbox-description">
                  {t('REGISTRATION.FORM_RIGHTS.1')}
                  <a
                    className="Registry__form__checkbox-description--link"
                    href="">
                    (link)
                  </a>
                </p>
              </div>
              <div className="Registry__form__checkbox">
                <Checkbox />
                <p className="Registry__form__checkbox-description">
                  {t('REGISTRATION.FORM_RIGHTS.2')}
                </p>
              </div>
              <div className="Registry__form__checkbox">
                <Checkbox />
                <p className="Registry__form__checkbox-description">
                  {t('REGISTRATION.FORM_RIGHTS.3')}
                </p>
              </div>

              <div className="Registry__form__checkbox"></div>
              <p className="Registry__form-description">
                {t('REGISTRATION.MESSAGE_TEXT')}
              </p>

              <button className="Registry__form-button" type="submit">
                {t('REGISTRATION.FORMS_BUTTON')}
              </button>
            </form>
          </div>
        </section>

        <section className="Registry__donate">
          <div className="container Registry__donate-container">
            <h2 className="Registry__donate-title">
              Wesprzyj naszą inicjatywę
            </h2>
            <p className="Registry__donate-description">
              Przekazując darowiznę, pomagasz w realizacji zadań statutowych
              Fundacji.
            </p>

            <div className="Registry__donate__buttons">
              <button
                onClick={() => handleClick(10)}
                className={`Registry__donate__buttons-button ${donate === 10 ? 'Registry__donate__buttons-button--active' : ''}`}>
                10
              </button>
              <button
                onClick={() => handleClick(20)}
                className={`Registry__donate__buttons-button ${donate === 20 ? 'Registry__donate__buttons-button--active' : ''}`}>
                20
              </button>
              <button
                onClick={() => handleClick(50)}
                className={`Registry__donate__buttons-button ${donate === 50 ? 'Registry__donate__buttons-button--active' : ''}`}>
                50
              </button>

              <button
                onClick={() => handleClick(100)}
                className={`Registry__donate__buttons-button ${donate === 100 ? 'Registry__donate__buttons-button--active' : ''}`}>
                100
              </button>
              <button
                onClick={() => handleClick(250)}
                className={`Registry__donate__buttons-button ${donate === 250 ? 'Registry__donate__buttons-button--active' : ''}`}>
                250
              </button>
              <button
                onClick={() => handleClick(500)}
                className={`Registry__donate__buttons-button ${donate === 500 ? 'Registry__donate__buttons-button--active' : ''}`}>
                500
              </button>
            </div>

            <button className="Registry__form-button" type="submit">
              Przekaż darowiznę
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registry;
