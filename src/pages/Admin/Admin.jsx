import { useEffect, useState } from 'react';
import { getAcessToken } from '../../api/services';
import '../../styles/index.scss';
import './admin.scss';

const Admin = () => {
  const [islogged, setIsLogged] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getAcessToken(formData); // Pobranie tokena
      //const token = response.data.token; // Odczytanie tokena z odpowiedzi

      // console.log(response.status());

      if (response.token) {
        // setMessage('Błędne dane logowania');
        sessionStorage.setItem('token', response.token);
        setIsLogged(true);
        return;
      }

      // localStorage.setItem('token', token); // Zapisanie tokena w localStorage
      //setIsLogged(true); // Ustawienie stanu zalogowania
      setMessage(response.message || '');

      setTimeout(() => {
        setMessage('');
      }, 5000);
    } catch (error) {
      console.log(error.message);
      setMessage(
        error.response?.data?.message || 'Wystąpił błąd podczas logowania',
      );
      console.log(error);

      setTimeout(() => {
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section className="Admin">
      <div className="container">
        <form onSubmit={handleSubmit} className="Admin__form">
          <h1 className="Registry__topContainer-title">
            {/* Dane logowania */}
            {message}, {`${islogged}`}
          </h1>
          <div className="Admin__form__fieldsGrid">
            <div className="Admin__form-field">
              <label className="Registry__form-label">id:</label>
              <input
                className="Admin__form-input"
                autoComplete="off"
                name="username"
                value={formData['username']}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Admin__form-field">
              <label className="Registry__form-label">hasło</label>
              <input
                className="Admin__form-input"
                autoComplete="off"
                name="password"
                value={formData['password']}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="Admin__form-button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
