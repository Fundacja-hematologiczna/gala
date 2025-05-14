import { useState } from 'react';
import { getAcessToken } from '../../api/services';
import './admin.scss';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await getAcessToken(formData);
      if (response.token) {
        sessionStorage.setItem('token', response.token);
        onLogin();
      } else {
        setMessage(response.message || 'Błędne dane logowania');
        setTimeout(() => setMessage(''), 5000);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Błąd logowania');
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Admin__form">
      <h1 className="Admin__form-title">logowanie</h1>
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

      <p className="Admin__form-info"> {message}</p>

      <button className="Admin__form-button" type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
