import './p24Form.scss';
import { useState } from 'react';

const P24Form = ({ p24formIsOpen }) => {
  if (!p24formIsOpen) return null;

  return (
    <div className="modal-overlay">
      <form className="P24Form">
        <section>
          <div className="P24Form-container">
            <div className="P24Form__group--1">
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
          </div>
        </section>

        <section>
          <div className="P24Form-container">
            <h2 className="P24Form__group-title">Dane Sprzedawcy</h2>
          </div>
        </section>

        <section>
          <div className="P24Form-container">
            <div className='className="P24Form__group--2'>
              <p>
                <p>Nazwa sprzedawcy: Fundacja na rzecz chorym na Białaczki</p>
              </p>
              <p>
                <p>Adres: Bratysławska 52 Kod, miasto: 92-112 Łódź</p>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="P24Form-container">
            <h2 className="P24Form__group-title">Zamówienie</h2>
          </div>
        </section>

        <section>
          <div className="P24Form-container">
            <div className="P24Form__group--3">
              <div className="flex-wrapper">
                <div className="flex-wrapper">
                  <label>Tytuł płatności:</label>
                  <input type="" name="email"  className='P24Form-input'/>
                </div>

                <div>
                  <label>Do zapłaty:</label>
                  <input type="" name="email" />
                </div>
              </div>

              <div>
                <label>Uwagi:</label>
                <input type="" name="email" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="P24Form-container">
            <h2 className="P24Form__group-title">Dane kupującego</h2>
          </div>
        </section>

        <section>
          <div className="P24Form-container">
            <div className="P24Form__group--3">
              <div className="flex-wrapper">
                <div>
                  <label>Imię i nazwisko*:</label>
                  <input type="" />
                </div>

                <div>
                  <label>Firma:</label>
                  <input type="" />
                </div>

                <div>
                  <label>NIP:</label>
                  <input type="" name="email" />
                </div>
              </div>

              <div className="flex-wrapper">
                <div>
                  <label>Miasto*:</label>
                  <input type="" />
                </div>

                <div>
                  <label>Kod*:</label>
                  <input type=""  />
                </div>

                <div>
                  <label>Kraj:</label>
                  <input type=""  />
                </div>
              </div>

              <div className="flex-wrapper">
                <div>
                  <label>Ulica*:</label>
                  <input type="" />
                </div>

                <div>
                  <label>Nr Domu*:</label>
                  <input type="" />
                </div>

                <div>
                  <label>Nr lokalu:</label>
                  <input type="" />
                </div>
              </div>

              <div className="flex-wrapper">
                <div>
                  <label>Adres email*:</label>
                  <input type="" name="email" />
                </div>

                <div>
                  <label>Telefon:</label>
                  <input type="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="P24Form-container">
            <div className="P24Form__buttons">
              <button>anuluj</button>
              <button>zapłać z Przelewy 24</button>
            </div>
          </div>
        </section>

        <section>
          <div className="P24Form-container P24Form-bottomLabel">
            <p>Copyrights © PayPro S.A. All rights reserved.</p>
            <p>
              PayPro S.A. | Poznań 60-198, ul. Pastelowa 8 | tel. +48 61 642 93
              44, email: serwis@przelewy24.pl
            </p>
          </div>
        </section>

        {/* <section className="P24Form-bottomMargin"></section> */}
      </form>
    </div>
  );
};

export default P24Form;
