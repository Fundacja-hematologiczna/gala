import { useEffect, useState } from 'react';
import { getUsers } from '../../api/services';
import AdminDownloadCSV from './AdminDownloadCSV';
import AdminPanelLine from './AdminPanelLine';

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
        <thead className="Admin__table--head">
          <tr className="Admin__table--row">
            <th className="Admin__table--field">Imię</th>
            <th className="Admin__table--field">Email</th>
            <th className="Admin__table--field">Telefon</th>
            <th className="Admin__table--field">Potwierdzony</th>
            <th className="Admin__table--field">Data</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <AdminPanelLine
              key={user.id}
              name={user.name}
              email={user.email}
              tel={user.phone}
              accepted={user.confirmed}
              date={user.registrationDate}
            />
          ))}
        </tbody>
      </table>
      <AdminDownloadCSV users={users} />
    </>
  );
};

export default AdminPanel;
