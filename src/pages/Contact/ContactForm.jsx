/* eslint-disable react/prop-types */

const ContactForm = ({ onChange, onSubmit, formData }) => {
  return (
    <section className="Contact__form">
      <div className="container">
        <h2 className="Contact__form-title">Formularz kontaktowy</h2>

        <form onSubmit={onSubmit}>
          <div className="Contact__form__fieldsGrid">
            <div className="Contact__form-field Contact__form-field--1">
              <label className="Contact__form-label">Imię i Nazwisko:</label>
              <input
                className="Contact__form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
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
                onChange={onChange}
                required
              />
            </div>

            <div className="Contact__form-field Contact__form-field--3">
              <label className="Contact__form-label">Treść wiadomości:</label>
              <textarea
                className=" Contact__form-input Contact__form-input--big"
                name="message"
                value={formData.message}
                onChange={onChange}
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
  );
};

export default ContactForm;
