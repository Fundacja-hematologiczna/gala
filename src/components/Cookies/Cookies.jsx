import { useTranslation } from 'react-i18next';
import './cookies.scss';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import '../../styles/index.scss';

const CookiesComponent = () => {
  const [isOpened, setIsOpened] = useState(
    () => !Cookies.get('cookiesAccepted'),
  );

  const { t } = useTranslation();
  const cookiesRef = useRef(null);

  const handleClickCloseCookies = () => {
    cookiesRef.current?.classList.add('Cookies--closing');

    cookiesRef.current?.addEventListener(
      'animationend',
      () => {
        Cookies.set('cookiesAccepted', 'true', { expires: 365 });
        setIsOpened(false);
      },
      { once: true },
    );
  };

  return !isOpened ? null : (
    <section
      className={classNames('Cookies', { 'Cookies--hidden': !isOpened })}
      ref={cookiesRef}>
      <div className="container">
        <p>
          {t('COOKIES.TITLE')}{' '}
          <a
            className="Cookies__link"
            href="https://fundacja.hematologiczna.org/polityka-prywatnosci"
            target="_blank"
            rel="noopener noreferrer">
            {t('COOKIES.LINK')}
          </a>
          .
        </p>
      </div>
      <button onClick={handleClickCloseCookies} className="Cookies__button">
        {t('COOKIES.BUTTON')}
      </button>
    </section>
  );
};

export default CookiesComponent;
