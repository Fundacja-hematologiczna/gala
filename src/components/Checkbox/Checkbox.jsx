import { useState } from 'react';
import './checkbox.scss';
import PropTypes from 'prop-types';

const propTypes = {
  required: PropTypes.bool,
};

const defaultProps = {
  required: true,
};

const Checkbox = ({ required = true }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="Checkbox">
        <div
          className={
            isChecked ? 'Checkbox-item--active' : 'Checkbox-item'
          }></div>
        <input
          className="Checkbox-input"
          type="checkbox"
          name="terms"
          checked={isChecked}
          onChange={handleCheckboxChange}
          required={required}
        />
      </div>
    </>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
