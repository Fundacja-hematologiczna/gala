import { useState } from 'react';
import './checkbox.scss';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log('clicked');
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
          required
        />
      </div>
    </>
  );
};

export default Checkbox;
