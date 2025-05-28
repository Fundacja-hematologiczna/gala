import PropTypes from 'prop-types';
import './admin.scss';

const AdminDownloadCSV = ({ users }) => {
  const mapToPolishCsv = (data) => {
    const headers = [
      'Imię',
      'Data Rejestracji',
      'Email',
      'Telefon',
      'Potwierdzony',
      'Miasto',
      'Adres',
      'Kod pocztowy',
      'Polityka prywatności',
      'Przetwarzanie danych',
      'Zgody marketingowe',
    ];

    const rows = data.map((item) => [
      item.name,
      item.registrationDate,
      item.email,
      item.phone,
      item.confirmed ? 'Tak' : 'Nie',
      item.city,
      item.address,
      item.zipCode,
      item.privacyPolicyAndRegulaminAccepted ? 'Tak' : 'Nie',
      item.dataProcessingConsentAccepted ? 'Tak' : 'Nie',
      item.marketingConsentAccepted ? 'Tak' : 'Nie',
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(','))
      .join('\n');

    return csvContent;
  };

  const downloadCSV = () => {
    const csv = mapToPolishCsv(users);
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'dane.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="AdminDownloadCSV__button" onClick={downloadCSV}>
      Pobierz CSV
    </button>
  );
};

AdminDownloadCSV.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      registrationDate: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      confirmed: PropTypes.bool,
      city: PropTypes.string,
      address: PropTypes.string,
      zipCode: PropTypes.string,
      privacyPolicyAndRegulaminAccepted: PropTypes.bool,
      dataProcessingConsentAccepted: PropTypes.bool,
      marketingConsentAccepted: PropTypes.bool,
    }),
  ).isRequired,
};

export default AdminDownloadCSV;
