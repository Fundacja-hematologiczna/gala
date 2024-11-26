import '../../styles/index.scss';
import './registry.scss';
import { useState } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useTranslation } from 'react-i18next';

const Registry = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
                    type="email"
                    name="email"
                    value={formData.email}
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
                    type="email"
                    name="email"
                    value={formData.email}
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
                    type="email"
                    name="email"
                    value={formData.email}
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
                    type="email"
                    name="email"
                    value={formData.email}
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

        <section className="Registry__form">
          <div className="container Registry__form-container">
            <h2 className="Registry__form-title">
              {t('REGISTRATION.SUPPORT_TITLE')}
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
                    {t('REGISTRATION.SUPPORT_EMAIL')}
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
                    {t('REGISTRATION.SUPPORT_STREET')}
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
                    {t('REGISTRATION.SUPPORT_BUILDING')}
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
                    {t('REGISTRATION.SUPPORT_INDEX')}
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
                    {t('REGISTRATION.SUPPORT_CITY')}
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
      </main>
    </>
  );
};

export default Registry;
