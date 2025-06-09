import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  tel: PropTypes.string,
  accepted: PropTypes.string.isRequired,
  date: PropTypes.string,
};

const AdminPanelLine = ({ name, email, tel, accepted, date }) => {
  return (
    <tr className="Admin__table--row">
      <th className="Admin__table--field">
        <img
          src="adminPanel/Name-Admin.svg"
          alt="Name"
          className="Admin__table--img"
        />
        {name}
      </th>
      <th className="Admin__table--field">
        <img
          src="adminPanel/Email-Admin.svg"
          alt="Name"
          className="Admin__table--img"
        />
        {email}
      </th>
      <th className="Admin__table--field">
        <img
          src="adminPanel/Telephone-Admin.svg"
          alt="Name"
          className="Admin__table--img"
        />
        {tel}
      </th>
      <th className="Admin__table--field">
        <img
          src="adminPanel/Accepted-Admin.svg"
          alt="Name"
          className="Admin__table--img"
        />
        <span
          style={{
            color: accepted ? 'green' : 'red',
            fontWeight: 'bold',
          }}>
          {accepted ? 'tak' : 'nie'}
        </span>
      </th>
      <th className="Admin__table--field">
        <img
          src="adminPanel/Date-Admin.svg"
          alt="Name"
          className="Admin__table--img"
        />
        {date}
      </th>
    </tr>
  );
};

export default AdminPanelLine;

AdminPanelLine.propTypes = propTypes;
