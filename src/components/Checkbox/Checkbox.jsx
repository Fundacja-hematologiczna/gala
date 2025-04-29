import './checkbox.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ name, checked, onChange, required = true }) => {
  const handleCheckboxChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="Checkbox">
      <div
        className={checked ? 'Checkbox-item--active' : 'Checkbox-item'}></div>
      <input
        className="Checkbox-input"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleCheckboxChange}
        required={required}
      />
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Checkbox;
