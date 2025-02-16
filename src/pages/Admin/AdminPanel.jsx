import { useEffect, useState } from 'react';
import { getUsers } from '../../api/services';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = sessionStorage.getItem('token');
      console.log('token z adminpanel', token);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Błąd pobierania użytkowników:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Lista użytkowników</h1>
      <table className="Admin__table">
        <thead>
          <tr>
            <th className=" Admin__table-field ">Imię</th>
            <th className="Admin__table-field ">Email</th>
            <th className="Admin__table-field ">Zapłacono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="Admin__table-field">{user.name}</td>
              <td className="Admin__table-field">{user.email}</td>
              <td className="Admin__table-field">tak</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminPanel;
