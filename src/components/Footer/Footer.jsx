/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="Footer">
        <div className="container Footer-container">
          <div className="Footer__logo">
            <img
              src="stopka-logo.webp"
              alt="logo fundacja hematologiczna"
              className="Footer__logo-img"
            />
          </div>

          <div className="Footer__content">
            <div className="Footer__content-contact">
              <p className="Footer__content-contact-title">
                {t('FOOTER.CONTACT')}
              </p>
              <p className="Footer__content-contact-description">
                93-513 Łódź, ul. Pabianicka 62
              </p>
              <p className="Footer__content-contact-description">
                gala@fundacja.hematologiczna.org
              </p>
              <p className="Footer__content-contact-description">730-118-500</p>
            </div>

            <div className="Footer__content-donate">
              <p className="Footer__content-donate-title">
                {t('FOOTER.SUPPORT_TITLE')}
              </p>
              <p className="Footer__content-donate-description">
                {t('FOOTER.SUPPORT_BANK')}
                <span className="Footer__content-donate-description--noWrap">
                  31 1020 3352 0000 1202 0241 5990
                </span>
              </p>
              <p className="Footer__content-donate-description">
                {t('FOOTER.SUPPORT_NOTE')}
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
                href="https://www.facebook.com/Fundacja.Hematologiczna/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="footer-icon-fb.svg" alt="facebook icon" />
              </a>

              <a
                href="https://www.youtube.com/@FundacjaHematologiczna"
                target="_blank"
                rel="noopener noreferrer">
                <img src="footer-icon-yt.svg" alt="youtube icon" />
              </a>

              <a
                href="https://pl.linkedin.com/company/fundacja-na-rzecz-pomocy-chorym-na-bia%C5%82aczki"
                target="_blank"
                rel="noopener noreferrer">
                <img src="footer-icon-in.svg" alt="linkedin icon" />
              </a>

              <a
                href="https://www.instagram.com/fundacja.hematologiczna/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="test"
                  src="footer-icon-instagram.webp"
                  alt="instagram icon"
                />
              </a>
            </div>
          </div>
          <div className="Footer__links">
            <NavLink
              className="Footer__links-link"
              to={'/klauzula-informacyjna'}>
              {t('FOOTER.MENU_OPTIONS.CLAUSE')}
            </NavLink>

            <NavLink className="Footer__links-link" to={'/regulamin'}>
              {t('FOOTER.MENU_OPTIONS.STATUTE')}
            </NavLink>

            <p>{t('FOOTER.MENU_OPTIONS.RIGHTS')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
