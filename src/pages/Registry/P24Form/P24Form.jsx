import './p24Form.scss';
import { useState } from 'react';

const P24Form = ({ p24formIsOpen }) => {
  if (!p24formIsOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="P24Form">
        <div className="P24Form-group1">
          <div className="wrapper">
            <h1 className="P24Form-title">Formularz zamówienia</h1>
            <p className="P24Form-date">24/24/2224 12:12</p>
          </div>

          <img
            className="P24Form-logo"
            src="Przelewy24-logo/P24-logo.png"
            alt="logo-p24"
          />
        </div>

        <div>
          <h2>Dane Sprzedawcy</h2>
        </div>

        <div></div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
};

export default P24Form;
