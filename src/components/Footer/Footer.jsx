/* eslint-disable react/no-unescaped-entities */
import '../../styles/index.scss';
import './footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="Footer">
        <div className="container Footer-container">
          <div className="Footer__logo">
            <div className="Footer__logo-img"> </div>
          </div>

          <div className="Footer__content">
            <div className="Footer__content-contact">
              <p className="Footer__content-contact-title">Kontakt</p>
              <p className="Footer__content-contact-description">
                93-513 Łódź, ul. Pabianicka 62
              </p>
              <p className="Footer__content-contact-description">
                kontakt@fundacja.hematologiczna.org
              </p>
              <p className="Footer__content-contact-description">730-118-500</p>
            </div>

            <div className="Footer__content-donate">
              <p className="Footer__content-donate-title">Wesprzyj</p>
              <p className="Footer__content-donate-description">
                Konto bankowe PKO BP:{' '}
                <span className="Footer__content-donate-description--noWrap">
                  31 1020 3352 0000 1202 0241 5990
                </span>
              </p>
              <p className="Footer__content-donate-description">
                {' '}
                Dopisek: "Darowizna na cele statutowe"
              </p>

              <p className="Footer__content-donate-description">
                {' '}
                KRS: 0000069531
              </p>

              <p className="Footer__content-donate-description">
                {' '}
                NIP: 729-23-25-734
              </p>
            </div>

            <div className="Footer__content-icons">
              <a
                href="https://www.example1.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/footer-icon-fb.svg" alt="facebook" />
              </a>

              <a
                href="https://www.example1.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/footer-icon-yt.svg" alt="youtube" />
              </a>

              <a
                href="https://www.example1.com"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/footer-icon-in.svg" alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="Footer__links">
            <NavLink
              className="Footer__links-link"
              to={'/klauzula-informacyjna'}>
              Klauzula informacyjna
            </NavLink>

            <NavLink className="Footer__links-link" to={'/regulamin'}>
              Regulamin
            </NavLink>

            <NavLink className="Footer__links-link" to={'/'}>
              Wszelkie prawa zastrzeżone
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
