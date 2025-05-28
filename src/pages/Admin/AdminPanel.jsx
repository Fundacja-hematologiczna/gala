import { useEffect, useState } from 'react';
import { getUsers } from '../../api/services';
import AdminDownloadCSV from './AdminDownloadCSV';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = sessionStorage.getItem('token');
      console.log('token z adminpanel', token);
      try {
        const data = await getUsers();

        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error('Błąd pobierania użytkowników:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h2 className="Admin-title">Lista użytkowników</h2>
      <table className="Admin__table">
        <thead>
          <tr>
            <th className=" Admin__table-field ">Imię</th>
            <th className="Admin__table-field ">Email</th>
            <th className="Admin__table-field ">Telefon</th>
            <th className="Admin__table-field ">Potwierdzony</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="Admin__table-field">{user.name}</td>
              <td className="Admin__table-field">{user.email}</td>
              <td className="Admin__table-field">{user.phone}</td>
              <td className="Admin__table-field">
                <span
                  style={{
                    color: user.confirmed ? 'green' : 'red',
                    fontWeight: 'bold',
                  }}>
                  {user.confirmed ? 'tak' : 'nie'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AdminDownloadCSV users={users} />
    </>
  );
};

export default AdminPanel;
