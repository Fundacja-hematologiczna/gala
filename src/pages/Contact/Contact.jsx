import '../../styles/index.scss';
import './contact.scss';
import { useState } from 'react';

const Contact = () => {
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

  const handleSubmit = () => {
    console.log('x');
  };

  return (
    <>
      <main className="Contact">
        <div className="Contact-container">
          <div className="Contact__topContainer">
            <div className="Contact__topContainer-img"></div>

            <div className="Contact__topContainer-content">
              <h1 className="Contact__topContainer-title">Kontakt</h1>
              <p className="Contact__topContainer-description">
                Jeśli chcesz przekazać przedmiot i stać się Darczyńcą, lub
                rozważasz współpracę jako Partner, skontaktuj się z nami, aby
                uzyskać więcej informacji. Z radością odpowiemy na pytania i
                pomożemy Ci w realizacji Twojej intencji.
              </p>
              <p className="Contact__topContainer-description--bold">
                Czekamy na Ciebie!
              </p>
            </div>
          </div>
        </div>

        <section className="Contact__form">
          <div className="container">
            <h2 className="Contact__form-title">Formularz kontaktowy</h2>

            <form onSubmit={handleSubmit}>
              <div className="Contact__form__fieldsGrid">
                <div className="Contact__form-field Contact__form-field--1">
                  <label className="Contact__form-label">
                    Imię i Nazwisko:
                  </label>
                  <input
                    className="Contact__form-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Contact__form-field Contact__form-field--2">
                  <label className="Contact__form-label">Adres e-mail:</label>
                  <input
                    className="Contact__form-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Contact__form-field Contact__form-field--3">
                  <label className="Contact__form-label">
                    Treść wiadomości:
                  </label>
                  <textarea
                    className=" Contact__form-input Contact__form-input--big"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <p className="Contact__form-description">
                Kopia wysłanej wiadomości pojawi się w Twojej skrzynce email.
              </p>

              <button className="Contact__form-button" type="submit">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </section>

        <section className="Contact__details">
          <div className="container">
            <h2 className="Contact__details-title">Dane kontaktowe</h2>
            <div className="Contact__details-cardsWrapper">
              <a className="Contact__details__phone" href="tel:730118500">
                <img
                  className="Contact__details__phone-icon"
                  src="/contact-phone-icon.svg"
                  alt="phone-icon"
                />

                <p className="Contact__details__phone-label">730-118-500</p>
              </a>

              <div className="Contact__details__email">
                <img
                  className="Contact__details__email-icon"
                  src="/contact-mail-icon.svg"
                  alt="mail-icon"
                />
                <p className="Contact__details__email-label">
                  kontakt@fundacja.hematologiczna.org
                </p>
              </div>

              <a
                className="Contact__details__place"
                href="https://www.google.com/maps?q=ul.+Bratysławska+52,+92-112+Łódź"
                target="_blank">
                <img
                  className="Contact__details__place-icon"
                  src="/contact-place-icon.svg"
                  alt="place-icon"
                />
                <p className="Contact__details__place-label">
                  ul. Bratysławska 52, 94-112 Łódź
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
