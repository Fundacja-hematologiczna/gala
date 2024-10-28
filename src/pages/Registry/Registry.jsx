import '../../styles/index.scss';
import './registry.scss';
import { useState } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';

const Registry = () => {
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
              <h1 className="Registry__topContainer-title">Rejestracja</h1>
              <p className="Registry__topContainer-description">
                Wypełnij formularz, aby zgłosić swoje uczestnictwo. Po jego
                wysłaniu zostaniesz przekierowany do opcji dokonania darowizny
                (cegiełki o kwocie 100 zł) poprzez przelew bankowy lub online
                (poniżej), co umożliwi Ci udział w Galii.
              </p>
            </div>
          </div>
        </div>

        <section className="Registry__form">
          <div className="container Registry__form-container">
            <h2 className="Registry__form-title">Formularz zgłoszeniowy</h2>

            <form onSubmit={handleSubmit}>
              <div className="Registry__form__fieldsGrid">
                <div className="Registry__form-field ">
                  <label className="Registry__form-label">
                    Imię i Nazwisko:
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
                  <label className="Registry__form-label">Adres e-mail</label>
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
                  <label className="Contact__form-label">Ulica</label>
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
                  <label className="Contact__form-label">Nr budynku</label>
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
                  <label className="Contact__form-label">Kod pocztowy</label>
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
                  <label className="Contact__form-label">Miasto</label>
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
                  Akceptuję postanowienia Regulaminu prywatności{' '}
                  <a
                    className="Registry__form__checkbox-description--link"
                    href="">
                    (link)
                  </a>{' '}
                  i Regulaminu imprezy (link).
                </p>
              </div>
              <div className="Registry__form__checkbox">
                <Checkbox />
                <p className="Registry__form__checkbox-description">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w
                  zakresie mojego wizerunku utrwalonego podczas Gali
                  Charytatywnej dla celów prowadzonych przez Fundację
                  wewnętrznych i zewnętrznych działań komunikacyjnych i
                  marketingowych.
                </p>
              </div>
              <div className="Registry__form__checkbox">
                <Checkbox />
                <p className="Registry__form__checkbox-description">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w
                  zakresie danych kontaktowych w celu informowania o przyszłych
                  wydarzeniach oraz działalności statutowej Fundacji.
                </p>
              </div>

              <div className="Registry__form__checkbox"></div>
              <p className="Registry__form-description">
                Kopia wysłanej wiadomości pojawi się w Twojej skrzynce email.
              </p>

              <button className="Registry__form-button" type="submit">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </section>

        <section className="Registry__form">
          <div className="container Registry__form-container">
            <h2 className="Registry__form-title">Wesprzyj naszą inicjatywę</h2>

            <form onSubmit={handleSubmit}>
              <div className="Registry__form__fieldsGrid">
                <div className="Registry__form-field ">
                  <label className="Registry__form-label">
                    Imię i Nazwisko:
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
                  <label className="Registry__form-label">Adres e-mail</label>
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
                  <label className="Contact__form-label">Ulica</label>
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
                  <label className="Contact__form-label">Nr budynku</label>
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
                  <label className="Contact__form-label">Kod pocztowy</label>
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
                  <label className="Contact__form-label">Miasto</label>
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
                Kopia wysłanej wiadomości pojawi się w Twojej skrzynce email.
              </p>

              <button className="Registry__form-button" type="submit">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registry;
