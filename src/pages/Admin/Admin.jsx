import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import AdminPanel from './AdminPanel';

const Admin = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <section className="Admin">
      <div className="Admin__container">
        {isLogged ? (
          <AdminPanel />
        ) : (
          <LoginForm onLogin={() => setIsLogged(true)} />
        )}
      </div>
    </section>
  );
};

export default Admin;
