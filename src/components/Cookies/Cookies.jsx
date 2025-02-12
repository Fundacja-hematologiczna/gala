import { useTranslation } from 'react-i18next';
import './cookies.scss';
import { useRef } from 'react';
import classNames from 'classnames';
import useLocalStorage from '../../hooks/useLocaleStorage.hook';

const Cookies = () => {
  const { t } = useTranslation();
  const [isOpened, setIsOpened] = useLocalStorage('cookies', false);
  const cookiesRef = useRef(null);

  const handleClickCloseCookies = () => {
    cookiesRef.current?.classList.add('Cookies--closing');

    cookiesRef.current?.addEventListener(
      'animationend',
      () => {
        setIsOpened((prev) => !prev);
        cookiesRef.current?.classList.remove('Cookies--closing');
      },
      {
        once: true,
      },
    );
  };

  return (
    <section
      className={classNames('Cookies', { 'Cookies--hidden': isOpened })}
      ref={cookiesRef}>
      <div>
        <p>
          {t('COOKIES.TITLE')}{' '}
          <a
            className="Cookies__link"
            href="https://fundacja.hematologiczna.org/polityka-prywatnosci"
            target="_blank">
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

export default Cookies;
